"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroImage } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(section, {
        opacity: 0.35,
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
      className="relative z-[2] flex min-h-[100svh] items-center justify-center overflow-hidden bg-transparent pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-spotlight opacity-80" aria-hidden />

      <div className="relative z-10 w-full px-6">
        <p className="mb-6 text-center text-[0.62rem] uppercase tracking-[0.5em] text-museum-brown/80">
          Müze Girişi
        </p>
        <div ref={imageRef} className="will-change-transform">
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="museum-frame relative mx-auto aspect-video max-w-5xl overflow-hidden"
          >
            <Image
              src={heroImage}
              alt="Asil Melody müze girişi — Asil Azmaz & Bal Kokmaz"
              fill
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="museum-photo object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-museum-dark/60 via-transparent to-black/15" />
          </motion.div>
        </div>
      </div>

      <div className="section-veil-bottom" aria-hidden />

      <button
        type="button"
        onClick={() => {
          const el = document.getElementById("sergi");
          if (!el) return;
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-4"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.4em] text-museum-bone-muted">
          İçeri Yürü
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-museum-brown/20">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-museum-brown to-transparent"
            animate={{ scaleY: [0.35, 1, 0.35] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </button>
    </section>
  );
}
