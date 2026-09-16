"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { SharpImage } from "@/components/ui/SharpImage";
import { artists, companyInfo, exhibits, heroImage } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const featured = exhibits[0];
const ildeniz = artists[0];
const nildeniz = artists[1];

const marqueeItems = [
  "ASIL'S A MELODY",
  "ASİ İLDENİZ",
  "ASİ NİLDENİZ",
  companyInfo.slogan.toUpperCase(),
  featured.title.toUpperCase(),
];

export function Hero() {
  const { onNavClick } = useViewPath();
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;
    if (!section || !visual) return;

    const ctx = gsap.context(() => {
      gsap.to(visual, {
        yPercent: 8,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div
        ref={visualRef}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <SharpImage
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:px-10 md:pb-14 md:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[0.58rem] uppercase tracking-[0.28em] text-accent sm:text-[0.68rem] sm:tracking-[0.42em]"
            >
              {companyInfo.slogan}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-display text-[clamp(2.4rem,12vw,7rem)] font-medium leading-[0.92] tracking-[0.04em] text-cream sm:mt-5"
            >
              ASİL&apos;S
              <br />
              A MELODY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42 }}
              className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-cream/75 sm:mt-6 sm:text-base lg:mx-0"
            >
              Asi İldeniz & Asi Nildeniz. Yeni nesil Türkçe rap ve elektronik
              tınılar — tek bir markanın altında.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58 }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            >
              <a
                href="#music"
                onClick={scrollToId("music")}
                className="inline-flex min-h-12 items-center justify-center bg-cream px-6 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] text-ink transition hover:bg-accent hover:text-ink sm:px-7 sm:tracking-[0.28em]"
              >
                Müziği Dinle
              </a>
              <a
                href="#artists"
                onClick={scrollToId("artists")}
                className="inline-flex min-h-12 items-center justify-center border border-cream/35 px-6 py-3.5 text-[0.65rem] uppercase tracking-[0.24em] text-cream transition hover:border-accent hover:text-accent sm:px-7 sm:tracking-[0.28em]"
              >
                Sanatçılar
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mx-auto flex gap-3 sm:gap-4 lg:mx-0"
          >
            {[
              {
                artist: ildeniz,
                href: "/asi-ildeniz",
                position: "center 16%",
              },
              {
                artist: nildeniz,
                href: "/asi-nildeniz",
                position: "center 20%",
              },
            ].map(({ artist, href, position }) => (
              <Link
                key={artist.id}
                href={href}
                onClick={onNavClick(href)}
                className="group relative h-28 w-24 overflow-hidden rounded-sm sm:h-40 sm:w-28 md:h-52 md:w-40"
              >
                <SharpImage
                  src={artist.profileImage}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 28vw, 320px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: position }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-1.5 pb-2 pt-8 text-center text-[0.5rem] uppercase tracking-[0.14em] text-cream sm:px-2 sm:pb-3 sm:pt-10 sm:tracking-[0.22em]">
                  {artist.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-cream/10 bg-ink/70 py-2.5 backdrop-blur-md sm:py-3">
        <div className="hero-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-5 font-display text-xs tracking-[0.24em] text-cream/45 sm:mx-7 sm:text-sm sm:tracking-[0.32em] md:text-base"
                >
                  {item}
                  <span className="ml-5 text-accent/60 sm:ml-7">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
