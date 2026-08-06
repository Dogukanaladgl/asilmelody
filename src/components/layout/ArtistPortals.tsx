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
  },
  {
    artist: artists[1],
    href: "/asi-nildeniz",
    title: "ASİ NİLDENİZ",
  },
] as const;

export function ArtistPortals() {
  const [hovered, setHovered] = useState<PortalSide>(null);

  return (
    <motion.section
      id="artists"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2"
      onMouseLeave={() => setHovered(null)}
    >
      {portals.map(({ artist, href, title }) => {
        const isHovered = hovered === artist.id;
        const isDimmed = hovered !== null && hovered !== artist.id;

        return (
          <Link
            key={artist.id}
            href={href}
            onMouseEnter={() => setHovered(artist.id as PortalSide)}
            className="group relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[70vh]"
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={artist.profileImage}
                alt={artist.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              aria-hidden
              className="absolute inset-0 bg-black"
              animate={{
                opacity: isHovered ? 0.35 : isDimmed ? 0.8 : 0.6,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />

            <div className="relative z-10 flex max-w-md flex-col items-center px-8 text-center">
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
    </motion.section>
  );
}
