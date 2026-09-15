"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GooeyFilterDefs,
  GooeyPlatformButton,
} from "@/components/ui/GooeyPlatformButton";

export interface ArtistPlatform {
  name: string;
  url: string;
}

interface ArtistProfileProps {
  name: string;
  quote: string;
  imageUrl: string;
  platforms: ArtistPlatform[];
  /** İldeniz: left (default). Nildeniz: right — eski site düzeni. */
  imagePosition?: "left" | "right";
}

const fadeInFrom = (from: "left" | "right") => ({
  hidden: { opacity: 0, x: from === "left" ? -48 : 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
});

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
  imagePosition = "left",
}: ArtistProfileProps) {
  const imageOnRight = imagePosition === "right";

  return (
    <section className="relative mx-auto min-h-[80vh] max-w-7xl px-6 pb-20 pt-32">
      <GooeyFilterDefs />

      <p className="mb-10 text-center text-[0.65rem] uppercase tracking-[0.45em] text-museum-brown lg:text-left">
        Sanatçı Salonu
      </p>
      <div
        className={`grid grid-cols-1 items-center gap-12 lg:gap-16 ${
          imageOnRight
            ? "lg:grid-cols-[minmax(0,1fr)_30rem]"
            : "lg:grid-cols-[30rem_minmax(0,1fr)]"
        }`}
      >
        <motion.div
          variants={fadeInFrom(imageOnRight ? "right" : "left")}
          initial={false}
          animate="visible"
          className={`relative mx-auto w-full max-w-[30rem] overflow-hidden lg:mx-0 lg:w-[30rem] ${
            imageOnRight ? "lg:order-2 lg:ml-auto" : ""
          }`}
        >
          <div className="relative aspect-[5/6] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              priority
              unoptimized
              sizes="640px"
              className="object-cover object-[center_15%]"
            />
          </div>
        </motion.div>

        <div className={`flex flex-col ${imageOnRight ? "lg:order-1" : ""}`}>
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial={false}
            animate="visible"
            aria-hidden
            className="select-none font-display text-7xl leading-none text-museum-brown/25 md:text-8xl"
          >
            “
          </motion.div>

          <motion.blockquote
            custom={1}
            variants={fadeInUp}
            initial={false}
            animate="visible"
            className="-mt-4 font-display text-3xl font-light italic leading-snug tracking-wide text-museum-bone md:text-4xl"
          >
            {quote}
          </motion.blockquote>

          <motion.div
            custom={2}
            variants={fadeInUp}
            initial={false}
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
            initial={false}
            animate="visible"
            className="mt-14"
          >
            <h2 className="text-[0.7rem] uppercase tracking-[0.35em] text-museum-brown">
              Resmi Sanatçı Hesapları
            </h2>

            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {platforms.map((platform) => (
                <li key={platform.name} className="sm:min-w-[11rem] sm:flex-1">
                  <GooeyPlatformButton name={platform.name} url={platform.url} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
