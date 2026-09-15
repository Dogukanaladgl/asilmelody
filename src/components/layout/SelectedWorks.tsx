"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Exhibit } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";

interface SelectedWorksProps {
  tracks: Exhibit[];
}

export function SelectedWorks({ tracks }: SelectedWorksProps) {
  const [paused, setPaused] = useState(false);
  const loop = [...tracks, ...tracks];

  return (
    <section className="overflow-hidden border-t border-cream/10 bg-ink-soft py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[0.62rem] uppercase tracking-[0.38em] text-accent">
            Selected Works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-cream md:text-4xl">
            Seçili Parçalar
          </h2>
          <p className="mt-3 max-w-md text-sm font-light text-cream/55">
            Kaydırarak keşfet — üzerine gelince durur.
          </p>
        </motion.div>
      </div>

      <div
        className="relative mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-soft to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-soft to-transparent md:w-24" />

        <div
          className={`works-marquee flex w-max gap-5 px-6 md:gap-6 md:px-10 ${
            paused ? "works-marquee--paused" : ""
          }`}
        >
          {loop.map((track, index) => (
            <a
              key={`${track.id}-${index}`}
              href={track.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[15.5rem] shrink-0 sm:w-[17rem] md:w-[18.5rem]"
              aria-hidden={index >= tracks.length ? true : undefined}
              tabIndex={index >= tracks.length ? -1 : undefined}
            >
              <div className="relative aspect-square overflow-hidden bg-ink">
                <SharpImage
                  src={track.image}
                  alt={index < tracks.length ? track.title : ""}
                  fill
                  sizes="(max-width: 768px) 70vw, 480px"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 bg-cream px-3 py-2 text-[0.55rem] uppercase tracking-[0.22em] text-ink opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <YouTubeIcon className="h-3 w-3" />
                  İzle
                </span>
                <p className="absolute bottom-4 left-4 right-16 font-display text-sm tracking-[0.06em] text-cream md:text-base">
                  {track.title}
                </p>
              </div>
              <p className="mt-3 text-[0.55rem] uppercase tracking-[0.28em] text-cream/45">
                {track.year} · {track.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
