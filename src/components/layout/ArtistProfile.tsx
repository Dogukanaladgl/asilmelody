"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ArtistPlatform {
  name: string;
  url: string;
}

interface ArtistProfileProps {
  name: string;
  quote: string;
  imageUrl: string;
  platforms: ArtistPlatform[];
}

const fadeInRight = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: 0.15 + index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ArtistProfile({
  name,
  quote,
  imageUrl,
  platforms,
}: ArtistProfileProps) {
  return (
    <section className="relative mx-auto min-h-[80vh] max-w-7xl px-6 pb-20 pt-32">
      <p className="mb-10 text-center text-[0.65rem] uppercase tracking-[0.45em] text-museum-brown lg:text-left">
        Sanatçı Salonu
      </p>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="museum-frame relative mx-auto w-full max-w-md overflow-hidden lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={imageUrl}
              alt={name}
              fill
              priority
              quality={100}
              sizes="(max-width: 1024px) 92vw, 560px"
              className="museum-photo object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 opacity-90"
            aria-hidden
          >
            <div className="red-carpet mx-auto h-full w-[70%]" />
          </div>
        </motion.div>

        <div className="flex flex-col">
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            aria-hidden
            className="select-none font-display text-7xl leading-none text-museum-brown/25 md:text-8xl"
          >
            “
          </motion.div>

          <motion.blockquote
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="-mt-4 font-display text-3xl font-light italic leading-snug tracking-wide text-museum-bone md:text-4xl"
          >
            {quote}
          </motion.blockquote>

          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <div className="h-px w-16 bg-museum-brown/50" aria-hidden />
            <p className="mt-4 text-sm uppercase tracking-[0.35em] text-museum-bone-muted">
              {name}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-14"
          >
            <h2 className="text-[0.7rem] uppercase tracking-[0.35em] text-museum-brown">
              Resmi Sanatçı Hesapları
            </h2>

            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {platforms.map((platform) => (
                <li key={platform.name} className="sm:min-w-[11rem] sm:flex-1">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full border border-museum-brown bg-transparent px-6 py-3 text-center text-[0.7rem] uppercase tracking-[0.22em] text-museum-brown transition-colors duration-300 hover:bg-museum-brown/10"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
