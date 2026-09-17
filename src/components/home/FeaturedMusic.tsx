"use client";

import { motion } from "framer-motion";
import type { Exhibit } from "@/lib/data";
import { exhibits } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";

const bentoClass = [
  "col-span-2 sm:col-span-7 sm:row-span-2",
  "col-span-1 sm:col-span-5",
  "col-span-1 sm:col-span-5",
  "col-span-1 sm:col-span-4 sm:translate-y-3",
  "col-span-1 sm:col-span-8 sm:-translate-y-2",
  "col-span-1 sm:col-span-6",
  "col-span-1 sm:col-span-6 sm:translate-y-4",
] as const;

function TrackCard({
  track,
  index,
  featured = false,
}: {
  track: Exhibit;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.a
      href={track.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${track.title} — ${track.artists}. YouTube’da izle (yeni sekme)`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay: Math.min(index * 0.06, 0.36),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative block overflow-hidden ${
        featured ? "" : bentoClass[index] ?? "col-span-1 sm:col-span-6"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-ink-soft ${
          featured
            ? "aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9]"
            : index === 0
              ? "aspect-[4/5] sm:aspect-[4/5] md:aspect-auto md:h-full md:min-h-[28rem]"
              : index === 4
                ? "aspect-[4/5] sm:aspect-[21/11]"
                : "aspect-square sm:aspect-[5/4]"
        }`}
      >
        <SharpImage
          src={track.image}
          alt={track.title}
          fill
          priority={featured}
          sizes={
            featured
              ? "100vw"
              : index === 0
                ? "(max-width: 640px) 100vw, 60vw"
                : "(max-width: 640px) 50vw, 42vw"
          }
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div
          className={`absolute inset-0 transition duration-500 ${
            featured
              ? "bg-gradient-to-t from-ink via-ink/40 to-transparent"
              : "bg-gradient-to-t from-ink/90 via-ink/25 to-transparent group-hover:from-ink/95"
          }`}
        />

        {featured ? (
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:gap-4 sm:p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-accent sm:text-[0.6rem] sm:tracking-[0.35em]">
                Featured & {track.year}
              </p>
              <h3 className="mt-2 font-display text-xl tracking-[0.06em] text-cream sm:text-2xl md:text-4xl">
                {track.title}
              </h3>
              <p className="mt-1.5 text-xs text-cream/70 sm:mt-2 sm:text-sm">
                {track.artists}
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 bg-cream px-4 py-2.5 text-[0.6rem] uppercase tracking-[0.24em] text-ink transition group-hover:bg-accent sm:px-5 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.28em]">
              <YouTubeIcon className="h-3.5 w-3.5" />
              İzle
            </span>
          </div>
        ) : (
          <>
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
              <p className="truncate text-[0.5rem] uppercase tracking-[0.22em] text-cream/55 sm:text-[0.55rem] sm:tracking-[0.28em]">
                {track.year} & {track.subtitle}
              </p>
              <h3
                className={`mt-1 font-display leading-snug tracking-[0.04em] text-cream transition group-hover:text-accent ${
                  index === 0
                    ? "text-lg sm:text-2xl md:text-3xl"
                    : "text-sm sm:text-lg md:text-xl"
                }`}
              >
                {track.title}
              </h3>
              <p className="mt-0.5 truncate text-[0.65rem] text-cream/60 sm:text-xs">
                {track.artists}
              </p>
            </div>
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 border border-cream/25 bg-ink/70 px-2 py-1.5 text-[0.5rem] uppercase tracking-[0.18em] text-cream backdrop-blur-sm sm:right-4 sm:top-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-[0.55rem] sm:tracking-[0.22em] sm:opacity-0 sm:transition sm:group-hover:opacity-100">
              <YouTubeIcon className="h-3 w-3" />
              İzle
            </span>
          </>
        )}
      </div>
    </motion.a>
  );
}

export function FeaturedMusic() {
  const [featured, ...rest] = exhibits;

  return (
    <section
      id="music"
      aria-labelledby="music-heading"
      className="relative z-[2] scroll-mt-20 px-4 pb-4 pt-14 sm:px-6 sm:pb-6 sm:pt-20 md:px-10 md:pb-8 md:pt-28"
      style={{
        background:
          "linear-gradient(180deg, #0a0908 0%, #0a0908 85%, #0c0b09 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-accent">
              Discography
            </p>
            <h2
              id="music-heading"
              className="mt-3 font-display text-3xl tracking-[0.08em] text-cream md:text-5xl"
            >
              Müzik
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-cream/60 md:text-right">
            Resmi klipler ve parçalar. Kapaklara tıkla, YouTube’da dinle.
          </p>
        </header>

        <div className="mt-8 sm:mt-12">
          <TrackCard track={featured} index={0} featured />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-12 sm:gap-5 sm:items-stretch">
          {rest.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
