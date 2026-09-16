"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GooeyFilterDefs,
  GooeyPlatformButton,
} from "@/components/ui/GooeyPlatformButton";
import { SelectedWorks } from "@/components/layout/SelectedWorks";
import { SharpImage } from "@/components/ui/SharpImage";
import { exhibits } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export interface ArtistPlatform {
  name: string;
  url: string;
}

interface ArtistProfileProps {
  name: string;
  quote: string;
  bio: string[];
  imageUrl: string;
  platforms: ArtistPlatform[];
  imagePosition?: "left" | "right";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: 0.08 + index * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ArtistProfile({
  name,
  quote,
  bio,
  imageUrl,
  platforms,
}: ArtistProfileProps) {
  const heroRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const marqueeName = name.toLocaleUpperCase("tr-TR");

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;
    if (!hero || !visual) return;

    const ctx = gsap.context(() => {
      gsap.to(visual, {
        yPercent: 8,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.05,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-ink">
      <GooeyFilterDefs />

      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      >
        <div
          ref={visualRef}
          className="absolute inset-0 will-change-transform"
          aria-hidden
        >
          <SharpImage
            src={imageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        </div>

        <div className="relative z-10 px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-36 md:px-10 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="text-[0.58rem] uppercase tracking-[0.3em] text-accent sm:text-[0.62rem] sm:tracking-[0.4em]"
            >
              Official Artist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-4xl font-display text-[clamp(2.2rem,11vw,6.5rem)] font-medium leading-[0.92] tracking-[0.04em] text-cream sm:mt-4 sm:tracking-[0.06em]"
            >
              {marqueeName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35 }}
              className="mt-5 max-w-xl font-display text-lg italic leading-snug text-cream/85 sm:mt-6 sm:text-xl md:text-2xl"
            >
              “{quote}”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#artist-bio"
                className="inline-flex min-h-12 items-center justify-center bg-cream px-6 py-3 text-[0.65rem] uppercase tracking-[0.24em] text-ink transition hover:bg-accent sm:tracking-[0.28em]"
              >
                Biyografi
              </a>
              <a
                href="#artist-listen"
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-6 py-3 text-[0.65rem] uppercase tracking-[0.24em] text-cream transition hover:border-accent hover:text-accent sm:tracking-[0.28em]"
              >
                Dinle
              </a>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 overflow-hidden border-y border-cream/10 bg-ink/65 py-2.5 backdrop-blur-md sm:py-3">
          <div className="hero-marquee flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={`${copy}-${i}`}
                    className="mx-5 font-display text-xs tracking-[0.24em] text-cream/40 sm:mx-7 sm:text-sm sm:tracking-[0.35em] md:text-base"
                  >
                    {marqueeName}
                    <span className="ml-5 text-accent/55 sm:ml-7">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="artist-bio"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28"
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden lg:max-w-none"
          >
            <SharpImage
              src={imageUrl}
              alt={name}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover object-[center_15%]"
            />
          </motion.div>

          <div>
            <motion.p
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[0.62rem] uppercase tracking-[0.38em] text-accent"
            >
              About
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-3 font-display text-2xl tracking-[0.08em] text-cream sm:text-3xl md:text-4xl"
            >
              {name}
            </motion.h2>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {bio.map((paragraph, index) => (
                <motion.p
                  key={paragraph.slice(0, 28)}
                  custom={index + 2}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="text-sm font-light leading-relaxed text-cream/75 sm:text-base md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              id="artist-listen"
              custom={bio.length + 2}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 scroll-mt-24 sm:mt-12"
            >
              <h3 className="text-[0.68rem] uppercase tracking-[0.32em] text-accent">
                Listen & Follow
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <GooeyPlatformButton name={platform.name} url={platform.url} />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <SelectedWorks tracks={exhibits} />
    </div>
  );
}
