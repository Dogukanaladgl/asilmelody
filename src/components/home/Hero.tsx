"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";
import { useMuseumStore } from "@/store/useMuseumStore";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const setHeaderHidden = useMuseumStore((state) => state.setHeaderHidden);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    const visual = visualRef.current;
    if (!section || !visual) return;

    const ctx = gsap.context(() => {
      gsap.to(visual, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: section,
        start: "bottom top+=80",
        onEnter: () => setHeaderHidden(false),
        onLeaveBack: () => setHeaderHidden(false),
      });
    }, section);

    return () => ctx.revert();
  }, [setHeaderHidden]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        ref={visualRef}
        className="pointer-events-none absolute inset-0 spot-glow"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(52vw,420px)] w-[min(52vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(196,165,116,0.28) 0%, rgba(92,70,56,0.12) 42%, transparent 72%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-[0.68rem] uppercase tracking-[0.55em] text-museum-brown"
        >
          Warm Museum
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,10vw,6.5rem)] font-light leading-[0.95] tracking-[0.18em] text-museum-bone"
        >
          ASIL
          <br />
          MELODY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-md text-sm leading-relaxed tracking-wide text-museum-bone-muted md:text-base"
        >
          Loş bir galeri. Spot altında eserler. Dinlemek için kendi
          platformuna yönlendirilirsin.
        </motion.p>
      </div>

      <motion.a
        href="#collection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.4em] text-museum-bone-muted"
      >
        <span>Keşfet</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-gradient-to-b from-museum-brown to-transparent"
        />
      </motion.a>
    </section>
  );
}
