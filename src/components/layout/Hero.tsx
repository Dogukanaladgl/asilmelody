"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { HeroSpotifyCard } from "@/components/home/HeroSpotifyCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { exhibits } from "@/lib/data";

const featured = exhibits[0];

export function Hero() {
  const { t } = useLanguage();
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);

  const marqueeItems = [
    "ASIL'S A MELODY",
    "ASİ İLDENİZ",
    "ASİ NİLDENİZ",
    t.hero.slogan.toUpperCase(),
    featured.title.toUpperCase(),
  ];

  const scrollToId =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const target = document.getElementById(id);
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { offset: -72, duration: 1.35 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 42% 42%, rgba(212,180,138,0.14) 0%, transparent 58%), radial-gradient(ellipse 45% 35% at 88% 62%, rgba(168,137,98,0.09) 0%, transparent 55%), linear-gradient(180deg, #12100e 0%, #0a0908 52%, #0a0908 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-8 pt-20 sm:px-6 sm:pb-10 sm:pt-24 md:px-10 md:pb-12 md:pt-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          <div className="w-full max-w-2xl text-center lg:max-w-xl lg:text-left xl:max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[0.62rem] uppercase tracking-[0.32em] text-accent sm:text-[0.7rem] sm:tracking-[0.4em]"
            >
              {t.hero.slogan}
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-display text-[clamp(2.35rem,7.5vw,5.25rem)] font-medium leading-[0.94] tracking-[0.04em] text-cream sm:mt-4"
            >
              ASİL&apos;S
              <br />
              A MELODY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42 }}
              className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-cream/75 sm:mt-5 sm:text-[0.95rem] lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58 }}
              className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2.5 sm:mt-7 sm:gap-3 lg:justify-start"
            >
              <a
                href="#music"
                onClick={scrollToId("music")}
                className="inline-flex min-h-9 items-center justify-center bg-cream px-4 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-ink transition hover:bg-accent hover:text-ink sm:min-h-11 sm:px-7 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.28em]"
              >
                {t.hero.listenCta}
              </a>
              <a
                href="#artists"
                onClick={scrollToId("artists")}
                className="inline-flex min-h-9 items-center justify-center border border-cream/35 px-4 py-2 text-[0.55rem] uppercase tracking-[0.2em] text-cream transition hover:border-accent hover:text-accent sm:min-h-11 sm:px-7 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.28em]"
              >
                {t.hero.artistsCta}
              </a>
            </motion.div>
          </div>

          <div className="flex w-full max-w-xl justify-center lg:w-auto lg:max-w-none lg:shrink-0 lg:justify-end">
            <HeroSpotifyCard />
          </div>
        </div>
      </div>

      <div
        className="relative z-10 overflow-hidden border-y border-cream/10 bg-ink/70 py-2.5 backdrop-blur-md sm:py-3"
        aria-hidden
      >
        <div className="hero-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-5 font-display text-xs tracking-[0.24em] text-cream/45 sm:mx-7 sm:text-sm sm:tracking-[0.32em] md:text-base"
                >
                  {item}
                  <span className="ml-5 text-accent/70 sm:ml-7">&</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
