"use client";

import { motion } from "framer-motion";
import type { Artwork } from "@/types/artwork";
import { useMuseumStore } from "@/store/useMuseumStore";

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

export function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  const openArtwork = useMuseumStore((state) => state.openArtwork);
  const offsetClass =
    index % 3 === 1 ? "md:mt-16" : index % 3 === 2 ? "md:mt-8" : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative ${offsetClass}`}
    >
      <button
        type="button"
        onClick={() => openArtwork(artwork.id)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-museum-amber/60"
      >
        <div
          className="relative aspect-[4/5] w-full overflow-hidden"
          style={{ backgroundColor: artwork.coverTone }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
            style={{
              background: `radial-gradient(ellipse 70% 55% at 50% 35%, ${artwork.accent}55 0%, transparent 65%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-museum-darker/80 via-transparent to-transparent opacity-70" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="mb-2 text-[0.62rem] uppercase tracking-[0.35em] text-museum-bone-muted">
              {artwork.catalogNumber}
            </p>
            <h3 className="font-display text-2xl tracking-[0.12em] text-museum-bone md:text-3xl">
              {artwork.title}
            </h3>
            <p className="mt-2 text-xs tracking-[0.2em] text-museum-brown">
              {artwork.year}
            </p>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
