"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-museum-dark">
      <div className="pointer-events-none absolute inset-0 bg-spotlight" aria-hidden />

      <div className="relative z-10 w-full px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative mx-auto aspect-video max-w-5xl overflow-hidden border border-museum-brown/30 shadow-2xl shadow-black"
        >
          <Image
            src="https://placehold.co/1600x900/1A1817/EBE6E0/png?text=Asil+Melody"
            alt="Asil Melody müze girişi"
            fill
            priority
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1024px"
            className="object-cover"
          />
        </motion.div>
      </div>

      <a
        href="#artists"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.4em] text-museum-bone-muted">
          Sergiyi Keşfet
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-museum-brown/20">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-museum-brown to-transparent"
            animate={{ scaleY: [0.35, 1, 0.35] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </a>
    </section>
  );
}
