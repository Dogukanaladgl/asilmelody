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
        lenis.scrollTo(target, { offset: -24, duration: 1.35 });
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-ink/55" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[0.68rem] uppercase tracking-[0.42em] text-accent"
            >
              {companyInfo.slogan}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[clamp(3rem,11vw,7rem)] font-medium leading-[0.9] tracking-[0.04em] text-cream"
            >
              ASİL&apos;S
              <br />
              A MELODY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42 }}
              className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/75 md:text-lg"
            >
              Asi İldeniz & Asi Nildeniz. Yeni nesil Türkçe rap ve elektronik
              tınılar — tek bir markanın altında.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#music"
                onClick={scrollToId("music")}
                className="inline-flex items-center justify-center bg-cream px-7 py-3.5 text-[0.68rem] uppercase tracking-[0.28em] text-ink transition hover:bg-accent hover:text-ink"
              >
                Müziği Dinle
              </a>
              <a
                href="#artists"
                onClick={scrollToId("artists")}
                className="inline-flex items-center justify-center border border-cream/35 px-7 py-3.5 text-[0.68rem] uppercase tracking-[0.28em] text-cream transition hover:border-accent hover:text-accent"
              >
                Sanatçılar
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex gap-3 sm:gap-4"
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
                className="group relative h-36 w-28 overflow-hidden sm:h-44 sm:w-32 md:h-52 md:w-40"
              >
                <SharpImage
                  src={artist.profileImage}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 40vw, 320px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: position }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-2 pb-3 pt-10 text-center text-[0.55rem] uppercase tracking-[0.22em] text-cream">
                  {artist.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-cream/10 bg-ink/70 py-3 backdrop-blur-md">
        <div className="hero-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-7 font-display text-sm tracking-[0.32em] text-cream/45 md:text-base"
                >
                  {item}
                  <span className="ml-7 text-accent/60">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
