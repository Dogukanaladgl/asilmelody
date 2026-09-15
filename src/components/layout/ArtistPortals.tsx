"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { SharpImage } from "@/components/ui/SharpImage";
import { artists } from "@/lib/data";

const portals = [
  {
    artist: artists[0],
    href: "/asi-ildeniz",
    objectPosition: "center 16%",
  },
  {
    artist: artists[1],
    href: "/asi-nildeniz",
    objectPosition: "center 18%",
  },
] as const;

export function ArtistPortals() {
  const { onNavClick } = useViewPath();

  return (
    <section id="artists" className="relative z-[2] bg-ink-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-10 md:py-20">
        <p className="text-[0.62rem] uppercase tracking-[0.4em] text-accent">
          Artists
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-[0.1em] text-cream md:text-5xl">
          Sanatçılar
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm font-light text-cream/60">
          İki ses, bir marka. Portreye tıkla — resmi hesaplara ve biyografiye geç.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {portals.map(({ artist, href, objectPosition }, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: index * 0.08 }}
          >
            <Link
              href={href}
              onClick={onNavClick(href)}
              className="group relative block min-h-[70svh] overflow-hidden md:min-h-[85svh]"
            >
              <SharpImage
                src={artist.profileImage}
                alt={artist.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.03]"
                style={{ objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 transition duration-500 group-hover:from-ink/95" />

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <p className="text-[0.6rem] uppercase tracking-[0.38em] text-accent">
                  Official
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[0.12em] text-cream md:text-5xl">
                  {artist.name.toLocaleUpperCase("tr-TR")}
                </h3>
                <p className="mt-4 max-w-sm font-display text-base italic text-cream/80 md:text-lg">
                  “{artist.quote}”
                </p>
                <span className="mt-8 inline-flex border border-cream/40 px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.28em] text-cream transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                  Profili Aç
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
