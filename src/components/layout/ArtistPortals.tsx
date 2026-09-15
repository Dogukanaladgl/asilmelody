"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { artists } from "@/lib/data";

type PortalSide = "asi-ildeniz" | "asi-nildeniz" | null;

const portals = [
  {
    artist: artists[0],
    href: "/asi-ildeniz",
    title: "ASİ İLDENİZ",
    salon: "Salon I",
    objectPosition: "center 16%",
  },
  {
    artist: artists[1],
    href: "/asi-nildeniz",
    title: "ASİ NİLDENİZ",
    salon: "Salon II",
    objectPosition: "center 22%",
  },
] as const;

export function ArtistPortals() {
  const { onNavClick } = useViewPath();
  const [hovered, setHovered] = useState<PortalSide>(null);

  return (
    <section
      id="artists"
      className="relative z-[2] bg-transparent px-6 py-16 md:px-10 md:py-24"
    >
      <div className="relative mb-10 text-center md:mb-14">
        <p className="text-[0.62rem] uppercase tracking-[0.45em] text-museum-brown/75">
          Salon Kapıları
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10">
        {portals.map(({ artist, href, title, salon, objectPosition }) => {
          const isHovered = hovered === artist.id;

          return (
            <motion.div
              key={artist.id}
              onMouseEnter={() => setHovered(artist.id as PortalSide)}
              onMouseLeave={() => setHovered(null)}
              animate={{ scale: isHovered ? 1.045 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[22rem] origin-center will-change-transform sm:max-w-none"
            >
              <Link
                href={href}
                onClick={onNavClick(href)}
                className="group relative block aspect-[3/4] w-full overflow-hidden bg-transparent"
              >
                <Image
                  src={artist.profileImage}
                  alt={artist.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 22rem, 480px"
                  className="object-cover"
                  style={{
                    objectPosition,
                    transform: "scale(1.04)",
                    transformOrigin: "center center",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-8 text-center">
                  <p className="mb-3 text-[0.58rem] uppercase tracking-[0.4em] text-museum-amber/90">
                    {salon}
                  </p>
                  <h2 className="font-display text-xl tracking-[0.22em] text-museum-bone md:text-2xl">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-[16rem] text-xs font-light italic leading-relaxed tracking-wide text-museum-bone/90 md:text-sm">
                    {artist.quote}
                  </p>
                  <span className="mt-6 text-[0.6rem] uppercase tracking-[0.32em] text-museum-bone/85 transition-colors duration-500 group-hover:text-museum-amber">
                    Salona Gir →
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="section-veil-bottom opacity-80" aria-hidden />
    </section>
  );
}
