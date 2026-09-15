"use client";

import { motion } from "framer-motion";
import { companyInfo, contactCopy } from "@/lib/data";
import {
  GooeyButton,
  GooeyFilterDefs,
} from "@/components/ui/GooeyPlatformButton";

const mapQuery = encodeURIComponent(companyInfo.mapQuery);
const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;
const whatsappHref = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`;

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function IletisimPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-spotlight opacity-40"
        aria-hidden
      />
      <GooeyFilterDefs />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          custom={0}
          variants={fade}
          initial={false}
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <p className="text-[0.62rem] uppercase tracking-[0.45em] text-museum-brown">
            {contactCopy.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-light tracking-[0.12em] text-museum-bone md:text-5xl">
            {contactCopy.title}
          </h1>
          <div
            className="mt-4 h-px w-16 bg-accent/80"
            aria-hidden
          />

          <p className="mt-8 text-lg font-light tracking-wide text-museum-amber md:text-xl">
            {contactCopy.lead}
          </p>

          <div className="mt-8 space-y-5 text-left sm:text-center">
            {contactCopy.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-sm font-light leading-relaxed tracking-wide text-museum-bone-muted md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 w-full max-w-sm">
            <GooeyButton
              href={whatsappHref}
              label={contactCopy.whatsappLabel}
              icon={<WhatsAppGlyph />}
            />
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fade}
          initial={false}
          animate="visible"
          className="mx-auto mt-20 flex w-full max-w-4xl flex-col items-center"
        >
          <h2 className="font-display text-2xl tracking-[0.18em] text-museum-bone md:text-3xl">
            {contactCopy.mapLabel}
          </h2>
          <p className="mt-4 max-w-2xl text-center text-sm font-light leading-relaxed text-museum-bone-muted md:text-base">
            {contactCopy.mapHint}
          </p>
          <div className="relative mt-10 w-full min-h-[360px] overflow-hidden border border-museum-brown/25 bg-[#e8e4df] md:min-h-[440px]">
            <iframe
              title="Asil Melody konum haritası"
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.4 17.7L2 22l4.4-1.3A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.6.8.8-2.5-.2-.3a9 9 0 1 1 6.9 3.5zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.5-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 5.2 5.2 0 0 0 3.2.9 2.7 2.7 0 0 0 1.8-.8 2.2 2.2 0 0 0 .5-1.6c0-.2-.2-.3-.4-.4z" />
    </svg>
  );
}
