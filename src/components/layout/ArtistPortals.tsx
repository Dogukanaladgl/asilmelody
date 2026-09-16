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
    <section id="artists" className="relative z-[2] bg-ink-soft px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[0.62rem] uppercase tracking-[0.4em] text-accent">
          Artists
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-[0.1em] text-cream md:text-5xl">
          Sanatçılar
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm font-light text-cream/60">
          İki ses, bir marka. Portreye tıkla — resmi hesaplara ve biyografiye geç.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 md:gap-16">
          {portals.map(({ artist, href, objectPosition }, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Link
                href={href}
                onClick={onNavClick(href)}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/40 bg-ink shadow-[0_0_0_1px_rgba(212,180,138,0.12)] transition duration-500 group-hover:border-accent group-hover:shadow-[0_0_28px_rgba(212,180,138,0.22)] md:h-52 md:w-52 lg:h-56 lg:w-56">
                  <SharpImage
                    src={artist.profileImage}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 176px, 224px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition }}
                  />
                </span>

                <p className="mt-6 text-[0.58rem] uppercase tracking-[0.35em] text-accent">
                  Official
                </p>
                <h3 className="mt-2 font-display text-xl tracking-[0.14em] text-cream transition-colors duration-300 group-hover:text-accent md:text-2xl">
                  {artist.name.toLocaleUpperCase("tr-TR")}
                </h3>
                <p className="mt-3 max-w-[16rem] font-display text-sm italic leading-relaxed text-cream/70">
                  “{artist.quote}”
                </p>
                <span className="mt-6 inline-flex rounded-full border border-cream/30 px-5 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-cream transition group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                  Profili Aç
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
