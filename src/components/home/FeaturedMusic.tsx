"use client";

import { motion } from "framer-motion";
import { exhibits } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";

export function FeaturedMusic() {
  const [featured, ...rest] = exhibits;

  return (
    <section id="music" className="relative z-[2] bg-ink px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-accent">
              Discography
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-cream md:text-5xl">
              Müzik
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-cream/60 md:text-right">
            Resmi klipler ve parçalar. Kapaklara tıkla, YouTube’da dinle.
          </p>
        </div>

        <motion.a
          href={featured.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-12 block overflow-hidden"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
            <SharpImage
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-accent">
                Featured · {featured.year}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-[0.06em] text-cream md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-cream/70">{featured.artists}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 bg-cream px-5 py-3 text-[0.65rem] uppercase tracking-[0.28em] text-ink transition group-hover:bg-accent">
              <YouTubeIcon className="h-3.5 w-3.5" />
              İzle
            </span>
          </div>
        </motion.a>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((track, index) => (
            <motion.a
              key={track.id}
              href={track.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden bg-ink-soft">
                <SharpImage
                  src={track.image}
                  alt={track.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/35" />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 border border-cream/30 bg-ink/70 px-3 py-2 text-[0.55rem] uppercase tracking-[0.24em] text-cream opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <YouTubeIcon className="h-3 w-3" />
                  İzle
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[0.55rem] uppercase tracking-[0.3em] text-cream/45">
                  {track.year} · {track.subtitle}
                </p>
                <h3 className="mt-1.5 font-display text-lg tracking-[0.06em] text-cream transition group-hover:text-accent md:text-xl">
                  {track.title}
                </h3>
                <p className="mt-1 text-xs text-cream/55">{track.artists}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
