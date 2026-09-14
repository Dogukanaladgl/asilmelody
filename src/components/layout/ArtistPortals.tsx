"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";

type PortalSide = "asi-ildeniz" | "asi-nildeniz" | null;

const portals = [
  {
    artist: artists[0],
    href: "/asi-ildeniz",
    title: "ASİ İLDENİZ",
    salon: "Salon I",
  },
  {
    artist: artists[1],
    href: "/asi-nildeniz",
    title: "ASİ NİLDENİZ",
    salon: "Salon II",
  },
] as const;

export function ArtistPortals() {
  const [hovered, setHovered] = useState<PortalSide>(null);

  return (
    <section
      id="artists"
      className="relative z-[2] bg-transparent pt-8"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="section-veil-top opacity-50" aria-hidden />

      <div className="relative mb-4 px-6 text-center md:mb-2">
        <p className="text-[0.62rem] uppercase tracking-[0.45em] text-museum-brown/75">
          Salon Kapıları
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2">
        {portals.map(({ artist, href, title, salon }) => {
          const isHovered = hovered === artist.id;
          const isDimmed = hovered !== null && hovered !== artist.id;

          return (
            <Link
              key={artist.id}
              href={href}
              onMouseEnter={() => setHovered(artist.id as PortalSide)}
              className="group relative flex min-h-[55vh] items-center justify-center overflow-hidden md:min-h-[75vh]"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: isHovered ? 1.04 : 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <Image
                  src={artist.profileImage}
                  alt={artist.name}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="museum-photo object-cover object-top"
                />
              </motion.div>

              <motion.div
                aria-hidden
                className="absolute inset-0 bg-museum-dark"
                animate={{
                  opacity: isHovered ? 0.28 : isDimmed ? 0.78 : 0.55,
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />

              <div className="relative z-10 flex max-w-md flex-col items-center px-8 text-center">
                <p className="mb-4 text-[0.6rem] uppercase tracking-[0.4em] text-museum-amber/80">
                  {salon}
                </p>
                <h2 className="font-display text-3xl tracking-[0.28em] text-museum-bone md:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-sm font-light italic leading-relaxed tracking-wide text-museum-bone-muted md:text-base">
                  {artist.quote}
                </p>
                <span className="mt-10 text-[0.65rem] uppercase tracking-[0.35em] text-museum-brown transition-colors duration-500 group-hover:text-museum-amber">
                  Salona Gir →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="section-veil-bottom opacity-80" aria-hidden />
    </section>
  );
}
