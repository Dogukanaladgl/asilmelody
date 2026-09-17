"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getArtworkById } from "@/data/artworks";
import { useMuseumStore } from "@/store/useMuseumStore";

export function ArtworkDetail() {
  const isDetailOpen = useMuseumStore((state) => state.isDetailOpen);
  const selectedArtworkId = useMuseumStore((state) => state.selectedArtworkId);
  const closeArtwork = useMuseumStore((state) => state.closeArtwork);
  const artwork = selectedArtworkId
    ? getArtworkById(selectedArtworkId)
    : undefined;

  useEffect(() => {
    if (!isDetailOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeArtwork();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDetailOpen, closeArtwork]);

  return (
    <AnimatePresence>
      {isDetailOpen && artwork && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute inset-0 bg-museum-darker/80 backdrop-blur-sm"
            onClick={closeArtwork}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="artwork-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-4 mb-4 w-full max-w-lg overflow-hidden border border-museum-brown/25 bg-museum-dark md:mb-0"
          >
            <div
              className="aspect-[16/10] w-full"
              style={{
                background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${artwork.accent}66 0%, ${artwork.coverTone} 70%)`,
              }}
            />

            <div className="space-y-6 p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.35em] text-museum-brown">
                    {artwork.catalogNumber} & {artwork.year}
                  </p>
                  <h2
                    id="artwork-title"
                    className="mt-3 font-display text-3xl tracking-[0.12em] text-museum-bone"
                  >
                    {artwork.title}
                  </h2>
                  <p className="mt-2 text-sm tracking-[0.18em] text-museum-bone-muted">
                    {artwork.artist}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeArtwork}
                  className="text-[0.65rem] uppercase tracking-[0.3em] text-museum-bone-muted transition-colors hover:text-museum-bone"
                >
                  Kapat
                </button>
              </div>

              <p className="text-sm leading-relaxed text-museum-bone-muted">
                {artwork.description}
              </p>

              <div>
                <p className="mb-3 text-[0.62rem] uppercase tracking-[0.35em] text-museum-brown">
                  Dinle
                </p>
                <ul className="flex flex-col gap-2">
                  {artwork.links.map((link) => (
                    <li key={link.platform}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between border border-museum-brown/20 px-4 py-3 text-sm tracking-[0.18em] text-museum-bone transition-colors duration-300 hover:border-museum-amber/50 hover:text-museum-amber"
                      >
                        <span>{link.label}</span>
                        <span aria-hidden className="text-museum-brown">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
