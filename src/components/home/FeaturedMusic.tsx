"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Exhibit } from "@/lib/data";
import { exhibits } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { formatMessage } from "@/lib/i18n";

function TrackCard({
  track,
  index,
  total,
}: {
  track: Exhibit;
  index: number;
  total: number;
}) {
  const { t } = useLanguage();
  const isLandscape = track.frame === "landscape";
  const isOriginal = index < total;

  return (
    <a
      href={track.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative shrink-0 ${
        isLandscape
          ? "w-[16.5rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem]"
          : "w-[12.5rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem]"
      }`}
      aria-label={
        isOriginal
          ? formatMessage(t.music.watchAria, {
              title: track.title,
              artists: track.artists,
            })
          : undefined
      }
      aria-hidden={isOriginal ? undefined : true}
      tabIndex={isOriginal ? undefined : -1}
    >
      <div
        className={`relative overflow-hidden bg-ink ${
          isLandscape ? "aspect-[16/9]" : "aspect-square"
        }`}
      >
        <SharpImage
          src={track.image}
          alt={isOriginal ? track.title : ""}
          fill
          sizes={
            isLandscape
              ? "(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 640px"
              : "(max-width: 640px) 55vw, (max-width: 1024px) 35vw, 480px"
          }
          className="object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
          <p className="truncate text-[0.5rem] uppercase tracking-[0.22em] text-cream/55 sm:text-[0.55rem] sm:tracking-[0.28em]">
            {track.year} & {track.subtitle}
          </p>
          <h3 className="mt-1 font-display text-sm leading-snug tracking-[0.04em] text-cream transition group-hover:text-accent sm:text-base md:text-lg md:tracking-[0.06em]">
            {track.title}
          </h3>
          <p className="mt-0.5 truncate text-[0.65rem] text-cream/60 sm:text-xs">
            {track.artists}
          </p>
        </div>

        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 border border-cream/25 bg-ink/70 px-2 py-1.5 text-[0.5rem] uppercase tracking-[0.18em] text-cream backdrop-blur-sm sm:right-4 sm:top-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-[0.55rem] sm:tracking-[0.22em] sm:opacity-0 sm:transition sm:duration-500 sm:group-hover:opacity-100">
          <YouTubeIcon className="h-3 w-3" />
          {t.common.watch}
        </span>
      </div>
    </a>
  );
}

export function FeaturedMusic() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const loop = [...exhibits, ...exhibits];

  return (
    <section
      id="music"
      aria-labelledby="music-heading"
      className="relative z-[2] scroll-mt-20 overflow-hidden pb-4 pt-14 sm:pb-6 sm:pt-20 md:pb-8 md:pt-28"
      style={{
        background:
          "linear-gradient(180deg, #0a0908 0%, #0a0908 85%, #0c0b09 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4"
        >
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-accent">
              {t.music.eyebrow}
            </p>
            <h2
              id="music-heading"
              className="mt-3 font-display text-3xl tracking-[0.08em] text-cream md:text-5xl"
            >
              {t.music.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-cream/60 md:text-right">
            {t.music.subtitle}
          </p>
        </motion.header>
      </div>

      <div
        className="relative mt-8 sm:mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0a0908] to-transparent sm:w-14 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0a0908] to-transparent sm:w-14 md:w-24" />

        <div
          className={`music-marquee flex w-max gap-3 px-4 sm:gap-5 sm:px-6 md:gap-6 md:px-10 ${
            paused ? "music-marquee--paused" : ""
          }`}
        >
          {loop.map((track, index) => (
            <TrackCard
              key={`${track.id}-${index}`}
              track={track}
              index={index}
              total={exhibits.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
