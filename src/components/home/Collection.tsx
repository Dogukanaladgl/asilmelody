"use client";

import { useEffect, useRef } from "react";
import { artworks } from "@/data/artworks";
import { ArtworkCard } from "@/components/home/ArtworkCard";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

export function Collection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || window.matchMedia("(max-width: 768px)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const totalScroll = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 80);

      gsap.to(track, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="relative overflow-hidden bg-museum-darker py-24 md:py-0"
    >
      <div className="pointer-events-none absolute inset-0 spot-glow opacity-40" aria-hidden />

      <div className="relative mx-auto mb-12 max-w-7xl px-6 md:absolute md:left-10 md:top-16 md:z-10 md:mb-0 md:px-0">
        <p className="text-[0.68rem] uppercase tracking-[0.45em] text-museum-brown">
          Koleksiyon
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-[0.16em] text-museum-bone md:text-5xl">
          Müzik Sergisi
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-museum-bone-muted">
          Eserler galeri duvarında asılı gibi sunulur. Detay için bir parçaya
          dokun.
        </p>
      </div>

      <div
        ref={trackRef}
        className="relative grid grid-cols-1 gap-10 px-6 md:flex md:w-max md:items-end md:gap-16 md:px-10 md:pt-48 md:pb-24"
      >
        {artworks.map((artwork, index) => (
          <div key={artwork.id} className="md:w-[min(28vw,340px)]">
            <ArtworkCard artwork={artwork} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
