"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

interface SmoothScrollingProps {
  children: ReactNode;
}

export function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    registerGsapPlugins();

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => ScrollTrigger.update();
    let attached = false;

    const attach = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis || attached) return;
      lenis.on("scroll", onScroll);
      attached = true;
    };

    const frame = requestAnimationFrame(attach);
    const timer = window.setTimeout(attach, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      lenisRef.current?.lenis?.off("scroll", onScroll);
      gsap.ticker.remove(update);
    };
  }, []);

  // Always start at the top when navigating via header/links
  useEffect(() => {
    const scrollTop = () => {
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      ScrollTrigger.refresh();
    };

    scrollTop();
    const frame = requestAnimationFrame(scrollTop);
    const timer = window.setTimeout(scrollTop, 40);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.065,
        duration: 1.35,
        smoothWheel: true,
        autoRaf: false,
        wheelMultiplier: 0.85,
      }}
    >
      {children}
    </ReactLenis>
  );
}
