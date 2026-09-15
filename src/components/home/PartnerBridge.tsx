"use client";

import { motion } from "framer-motion";
import { partnerSite } from "@/lib/data";
import {
  GooeyButton,
  GooeyFilterDefs,
} from "@/components/ui/GooeyPlatformButton";

export function PartnerBridge() {
  return (
    <section
      id="partner"
      className="relative z-[2] overflow-hidden border-y border-cream/10"
    >
      <GooeyFilterDefs />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(212,180,138,0.14) 0%, transparent 62%), linear-gradient(180deg, #161310 0%, #0f0d0b 55%, #0a0908 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center md:min-h-[52vh] md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          className="text-[0.65rem] uppercase tracking-[0.48em] text-accent"
        >
          {partnerSite.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-light leading-snug tracking-[0.04em] text-cream"
        >
          {partnerSite.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="mt-5 max-w-xl text-sm font-light leading-relaxed text-cream/65 md:text-base"
        >
          {partnerSite.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.26 }}
          className="mt-10 w-full max-w-[14rem]"
        >
          <GooeyButton href={partnerSite.href} label={partnerSite.ctaLabel} />
        </motion.div>
      </div>
    </section>
  );
}
