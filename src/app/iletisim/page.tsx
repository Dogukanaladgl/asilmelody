"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";
import {
  GooeyButton,
  GooeyFilterDefs,
} from "@/components/ui/GooeyPlatformButton";

const mapQuery = encodeURIComponent(companyInfo.mapQuery);
const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;
const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
const appleMapsDirections = `https://maps.apple.com/?daddr=${mapQuery}`;
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
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <h1 className="font-display text-4xl font-light tracking-[0.12em] text-museum-bone md:text-5xl">
            Bize Ulaşın
          </h1>
          <div
            className="mt-4 h-px w-16 bg-museum-carpet-edge/80"
            aria-hidden
          />

          <p className="mt-8 text-lg font-light tracking-wide text-museum-bone md:text-xl">
            Birlikte Daha İyiyiz
          </p>
          <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-museum-bone-muted md:text-base">
            Ortak çalışma, proje ve önerileriniz için iletişime geçebilirsiniz.
          </p>

          <div className="mt-10 w-full max-w-sm">
            <GooeyButton
              href={whatsappHref}
              label="WhatsApp Üzerinden Ulaşın"
              icon={<WhatsAppGlyph />}
            />
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fade}
          initial={false}
          animate="visible"
          className="mx-auto mt-16 flex w-full max-w-4xl flex-col items-center"
        >
          <div className="relative w-full min-h-[360px] overflow-hidden border border-museum-brown/25 bg-[#e8e4df] md:min-h-[440px]">
            <iframe
              title="Asil Melody konum haritası"
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-4">
            <p className="text-center text-[0.72rem] uppercase tracking-[0.28em] text-museum-amber">
              Yol Tarifi
            </p>
            <GooeyButton
              href={appleMapsDirections}
              label="Apple ile Tarif Al"
              icon={<AppleGlyph />}
            />
            <GooeyButton
              href={googleMapsDirections}
              label="Google ile Tarif Al"
              icon={<GoogleGlyph />}
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

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.474 2.341-1.261 3.723 1.338.104 2.715-.688 3.548-1.711z" />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"
        opacity=".9"
      />
      <path
        fill="currentColor"
        d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a6.6 6.6 0 0 1-6.2-4.5H2.5v2.6A11 11 0 0 0 12 22z"
        opacity=".75"
      />
      <path
        fill="currentColor"
        d="M5.8 13.6a6.6 6.6 0 0 1 0-3.2V7.8H2.5a11 11 0 0 0 0 8.4l3.3-2.6z"
        opacity=".6"
      />
      <path
        fill="currentColor"
        d="M12 5.3c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 12 2 11 11 0 0 0 2.5 7.8l3.3 2.6A6.6 6.6 0 0 1 12 5.3z"
        opacity=".85"
      />
    </svg>
  );
}
