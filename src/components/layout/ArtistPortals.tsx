"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import {
  GooeyButton,
  GooeyFilterDefs,
} from "@/components/ui/GooeyPlatformButton";
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
    <section
      id="artists"
      className="relative z-[2] scroll-mt-20 px-4 pb-14 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:px-10 md:pb-24 md:pt-8"
      style={{
        background:
          "linear-gradient(180deg, #0a0908 0%, #0e0c0a 18%, #12100e 42%, #12100e 100%)",
      }}
    >
      <GooeyFilterDefs />

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

        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-14 sm:gap-12 md:gap-20">
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
                <span className="relative h-36 w-36 overflow-hidden rounded-full border border-accent/45 bg-ink shadow-[0_0_0_1px_rgba(212,180,138,0.14)] transition duration-500 group-hover:border-accent group-hover:shadow-[0_0_32px_rgba(212,180,138,0.24)] sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-64 lg:w-64">
                  <SharpImage
                    src={artist.profileImage}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 256px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition }}
                  />
                </span>

                <p className="mt-5 text-[0.52rem] uppercase tracking-[0.3em] text-accent sm:mt-6 sm:text-[0.58rem] sm:tracking-[0.35em]">
                  Official
                </p>
                <h3 className="mt-1.5 font-display text-base tracking-[0.1em] text-cream transition-colors duration-300 group-hover:text-accent sm:mt-2 sm:text-xl sm:tracking-[0.14em] md:text-2xl">
                  {artist.name.toLocaleUpperCase("tr-TR")}
                </h3>
                <p className="mt-2 hidden max-w-[16rem] font-display text-sm italic leading-relaxed text-cream/70 sm:mt-3 sm:block">
                  “{artist.quote}”
                </p>
              </Link>

              <div className="mt-5 w-full max-w-[10.5rem] sm:mt-7 sm:max-w-[12rem]">
                <GooeyButton
                  href={href}
                  label="Profili Aç"
                  external={false}
                  onClick={onNavClick(href)}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
