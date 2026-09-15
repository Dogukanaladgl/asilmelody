"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { artists, brandLogo } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const ildeniz = artists[0];
const nildeniz = artists[1];

export function Hero() {
  const { onNavClick } = useViewPath();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(section, {
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] flex min-h-[100svh] items-center justify-center overflow-hidden bg-transparent pb-24 pt-28 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-spotlight opacity-80"
        aria-hidden
      />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div ref={imageRef} className="will-change-transform">
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-6xl overflow-hidden md:max-w-7xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <Link
                href="/asi-ildeniz"
                onClick={onNavClick("/asi-ildeniz")}
                className="group relative aspect-square overflow-hidden bg-black"
              >
                <Image
                  src={ildeniz.profileImage}
                  alt={ildeniz.name}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover object-[center_16%] transition duration-500 group-hover:brightness-105"
                  style={{ transform: "scale(1.03)", transformOrigin: "center center" }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-5 pt-12 text-center text-[0.62rem] uppercase tracking-[0.35em] text-museum-bone opacity-90 transition group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  {ildeniz.name}
                </span>
              </Link>

              <div className="relative aspect-square overflow-hidden bg-black">
                <Image
                  src={brandLogo}
                  alt="Asil's a Melody"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover"
                />
              </div>

              <Link
                href="/asi-nildeniz"
                onClick={onNavClick("/asi-nildeniz")}
                className="group relative aspect-square overflow-hidden bg-black"
              >
                <Image
                  src={nildeniz.profileImage}
                  alt={nildeniz.name}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover object-[center_22%] transition duration-500 group-hover:brightness-105"
                  style={{ transform: "scale(1.03)", transformOrigin: "center center" }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-5 pt-12 text-center text-[0.62rem] uppercase tracking-[0.35em] text-museum-bone opacity-90 transition group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  {nildeniz.name}
                </span>
              </Link>
            </div>

            {/* Thin panel dividers — desktop */}
            <div
              className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px -translate-x-1/2 bg-museum-bone/20 sm:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px -translate-x-1/2 bg-museum-bone/20 sm:block"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
