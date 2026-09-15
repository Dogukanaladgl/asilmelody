"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { exhibits } from "@/lib/data";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";

gsap.registerPlugin(ScrollTrigger);

export function GalleryWalk() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const frames = section.querySelectorAll<HTMLElement>("[data-exhibit]");

    const ctx = gsap.context(() => {
      frames.forEach((frame, index) => {
        const fromX = index % 2 === 0 ? -48 : 48;

        gsap.fromTo(
          frame,
          { opacity: 0.35, x: fromX, y: 40 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top 85%",
              end: "top 45%",
              scrub: 1.1,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sergi"
      ref={sectionRef}
      className="relative z-[2] bg-transparent px-6 py-8 md:px-10 md:py-16"
    >
      <div className="relative mx-auto mb-16 max-w-3xl text-center md:mb-24">
        <p className="text-[0.62rem] uppercase tracking-[0.45em] text-museum-amber/90">
          Diskografi
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-[0.16em] text-museum-bone md:text-5xl">
          Eserler Koridoru
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-museum-bone-muted md:text-base">
          Her parça bir salon. Spot altında dur; izle, dinle, yankıyı hisset.
        </p>
      </div>

      <div
        id="footsteps-track"
        className="relative mx-auto flex max-w-6xl flex-col gap-24 md:gap-36"
      >
        {exhibits.map((exhibit, index) => {
          const left = index % 2 === 0;
          const landscape = exhibit.frame === "landscape";

          return (
            <article
              key={exhibit.id}
              data-exhibit
              className={`group relative flex w-full flex-col ${
                landscape
                  ? "max-w-lg md:max-w-[min(58%,34rem)]"
                  : "max-w-md md:max-w-[min(42%,420px)]"
              } ${
                left ? "md:mr-auto md:items-start" : "md:ml-auto md:items-end"
              } ${left ? "self-start" : "self-end"}`}
            >
              <div
                className={`museum-frame relative w-full overflow-hidden ${
                  landscape ? "museum-frame--landscape" : "museum-frame--portrait"
                }`}
              >
                <div className="museum-frame__mat">
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      landscape ? "aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={exhibit.image}
                      alt={exhibit.title}
                      fill
                      unoptimized
                      priority={index < 2}
                      sizes={
                        landscape
                          ? "(max-width: 768px) 100vw, 560px"
                          : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                      }
                      className="object-cover object-center transition-transform duration-[1.1s] ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <a
                  href={exhibit.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exhibit.title} — YouTube’da izle`}
                  className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 border border-museum-brown/35 bg-museum-dark/70 px-3 py-2 text-museum-bone/70 backdrop-blur-sm transition-colors duration-500 hover:border-museum-amber/50 hover:text-museum-amber"
                >
                  <YouTubeIcon className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  <span className="text-[0.58rem] uppercase tracking-[0.28em]">
                    İzle
                  </span>
                </a>
              </div>

              <div
                className={`mt-5 max-w-sm ${left ? "text-left" : "md:text-right"}`}
              >
                <p className="text-[0.58rem] uppercase tracking-[0.35em] text-museum-brown/80">
                  {exhibit.catalogNumber} · {exhibit.year}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-[0.12em] text-museum-bone">
                  {exhibit.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.18em] text-museum-bone-muted">
                  {exhibit.artists}
                </p>
                <p className="mt-3 text-sm font-light italic leading-relaxed text-museum-bone/65">
                  {exhibit.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
