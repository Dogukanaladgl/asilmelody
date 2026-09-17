"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Exhibit } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { formatMessage } from "@/lib/i18n";

interface SelectedWorksProps {
  tracks: Exhibit[];
}

export function SelectedWorks({ tracks }: SelectedWorksProps) {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const loop = [...tracks, ...tracks];

  return (
    <section
      className="overflow-hidden border-t border-cream/10 bg-ink-soft py-14 sm:py-20 md:py-24"
      aria-labelledby="selected-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[0.62rem] uppercase tracking-[0.38em] text-accent">
            {t.artist.selectedEyebrow}
          </p>
          <h2
            id="selected-works-heading"
            className="mt-3 font-display text-2xl tracking-[0.08em] text-cream sm:text-3xl md:text-4xl"
          >
            {t.artist.selectedTitle}
          </h2>
          <p className="mt-3 max-w-md text-sm font-light text-cream/55">
            {t.artist.selectedHint}
          </p>
        </motion.div>
      </div>

      <div
        className="relative mt-8 sm:mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink-soft to-transparent sm:w-12 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink-soft to-transparent sm:w-12 md:w-24" />

        <div
          className={`works-marquee flex w-max gap-3 px-4 sm:gap-5 sm:px-6 md:gap-6 md:px-10 ${
            paused ? "works-marquee--paused" : ""
          }`}
        >
          {loop.map((track, index) => (
            <a
              key={`${track.id}-${index}`}
              href={track.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[12.5rem] shrink-0 sm:w-[17rem] md:w-[18.5rem]"
              aria-label={
                index < tracks.length
                  ? formatMessage(t.artist.watchAria, { title: track.title })
                  : undefined
              }
              aria-hidden={index >= tracks.length ? true : undefined}
              tabIndex={index >= tracks.length ? -1 : undefined}
            >
              <div className="relative aspect-square overflow-hidden bg-ink">
                <SharpImage
                  src={track.image}
                  alt={index < tracks.length ? track.title : ""}
                  fill
                  sizes="(max-width: 640px) 55vw, (max-width: 768px) 70vw, 480px"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-cream px-2.5 py-1.5 text-[0.5rem] uppercase tracking-[0.18em] text-ink sm:bottom-4 sm:right-4 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-[0.55rem] sm:tracking-[0.22em] sm:opacity-0 sm:transition sm:duration-500 sm:group-hover:opacity-100">
                  <YouTubeIcon className="h-3 w-3" />
                  {t.common.watch}
                </span>
                <p className="absolute bottom-3 left-3 right-14 font-display text-xs leading-snug tracking-[0.04em] text-cream sm:bottom-4 sm:left-4 sm:right-16 sm:text-sm sm:tracking-[0.06em] md:text-base">
                  {track.title}
                </p>
              </div>
              <p className="mt-2.5 truncate text-[0.5rem] uppercase tracking-[0.22em] text-cream/45 sm:mt-3 sm:text-[0.55rem] sm:tracking-[0.28em]">
                {track.year} & {track.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
