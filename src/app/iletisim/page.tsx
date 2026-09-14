"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";

const mapQuery = encodeURIComponent(companyInfo.mapQuery);
const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const googleMapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
const appleMapsDirections = `https://maps.apple.com/?daddr=${mapQuery}`;
const whatsappHref = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}`;
const phoneHref = `tel:${companyInfo.phone.replace(/\s/g, "")}`;

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
    <main className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-spotlight opacity-40" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-14 lg:items-stretch">
        {/* Sol — metin & iletişim */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <h1 className="font-display text-3xl font-light leading-snug tracking-wide text-museum-bone md:text-4xl lg:text-[2.75rem]">
            Yardım burada. Ne zaman ve ne şekilde ihtiyacınız olursa.
          </h1>

          <p className="mt-6 text-base font-medium tracking-wide text-museum-bone md:text-lg">
            Daha da iyisi, gelin, yüz yüze görüşelim.
          </p>

          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-museum-bone-muted md:text-base">
            Müşterilerimize değer veriyoruz. Mesai saatleri içinde bizi
            dilediğiniz zaman ziyaret edebilirsiniz. Ortak çalışma, proje ve
            önerileriniz için de buradayız.
          </p>

          <div className="my-8 h-px w-full max-w-md bg-museum-brown/25" aria-hidden />

          <div className="space-y-5 text-sm text-museum-bone-muted md:text-base">
            <a
              href={phoneHref}
              className="block text-lg tracking-[0.08em] text-museum-bone transition-colors hover:text-museum-amber"
            >
              {companyInfo.phone}
            </a>

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-museum-brown">
                Çalışma Saatleri
              </p>
              <p className="mt-2 font-light">{companyInfo.hours}</p>
            </div>

            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-museum-brown">
                Adres
              </p>
              <p className="mt-2 max-w-sm font-light leading-relaxed">
                {companyInfo.address}
              </p>
            </div>

            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-block tracking-[0.1em] text-museum-brown transition-colors hover:text-museum-amber"
            >
              {companyInfo.email}
            </a>
          </div>

          <div className="mt-10 flex max-w-md flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-museum-brown/40 bg-museum-brown/10 px-5 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] text-museum-bone transition-colors hover:border-museum-amber/50 hover:text-museum-amber"
            >
              <WhatsAppGlyph />
              WhatsApp ile Ulaşın
            </a>

            <a
              href={appleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-museum-bone/95 px-5 py-3.5 text-[0.65rem] uppercase tracking-[0.22em] text-museum-darker transition-opacity hover:opacity-90"
            >
              <AppleGlyph />
              Apple Haritalar ile Yol Tarifi
            </a>

            <a
              href={googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-museum-brown-deep px-5 py-3.5 text-[0.65rem] uppercase tracking-[0.22em] text-museum-bone transition-colors hover:bg-museum-brown"
            >
              <GoogleGlyph />
              Google Haritalar ile Yol Tarifi
            </a>
          </div>
        </motion.div>

        {/* Sağ — harita */}
        <motion.div
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="relative min-h-[420px] overflow-hidden border border-museum-brown/25 bg-museum-darker lg:min-h-full"
        >
          <iframe
            title="Asil Melody konum haritası"
            src={mapEmbedSrc}
            className="absolute inset-0 h-full w-full grayscale invert contrast-125 opacity-85"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-museum-brown/20" />
        </motion.div>
      </div>
    </main>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.4 17.7L2 22l4.4-1.3A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.6.8.8-2.5-.2-.3a9 9 0 1 1 6.9 3.5zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.5-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 5.2 5.2 0 0 0 3.2.9 2.7 2.7 0 0 0 1.8-.8 2.2 2.2 0 0 0 .5-1.6c0-.2-.2-.3-.4-.4z" />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M16.7 12.6c0-2.2 1.8-3.3 1.9-3.4a4.6 4.6 0 0 0-3.6-1.9c-1.5-.2-3 .9-3.7.9s-2-.9-3.2-.9A4.8 4.8 0 0 0 4 11.3c-1 1.8-.3 4.4.7 5.9.5.7 1.1 1.5 1.9 1.5s1.1-.5 2.1-.5 1.3.5 2.1.5 1.3-.7 1.9-1.5a10 10 0 0 0 .9-1.8 4.2 4.2 0 0 1-2.9-4zm-2.6-7.2a4.4 4.4 0 0 0 1-3.1 4.5 4.5 0 0 0-2.9 1.5 4.2 4.2 0 0 0-1 3 3.7 3.7 0 0 0 2.9-1.4z" />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
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
