"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { aboutProfiles } from "@/lib/data";
import {
  getArtistLocalized,
  getBrandCardBio,
  type ArtistContentId,
} from "@/lib/artistI18n";
import { SharpImage } from "@/components/ui/SharpImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: index * 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HakkindaPage() {
  const { onNavClick } = useViewPath();
  const { t, language } = useLanguage();

  const profileBio = (id: string) => {
    if (id === "asil-a-melody") return getBrandCardBio(language);
    return getArtistLocalized(id as ArtistContentId, language).cardBio;
  };

  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-40"
    >
      <motion.p
        custom={0}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="font-display text-xl tracking-widest text-museum-bone sm:text-2xl md:text-3xl"
      >
        {t.about.brand}
      </motion.p>

      <motion.p
        custom={1}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="mt-3 text-xs tracking-[0.22em] text-museum-brown sm:text-sm sm:tracking-[0.28em]"
      >
        {t.about.registered}
      </motion.p>

      <motion.h1
        custom={2}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="mt-10 max-w-3xl font-display text-3xl font-light leading-tight tracking-wide text-museum-bone sm:mt-14 sm:text-4xl md:text-5xl"
      >
        {t.about.title}
      </motion.h1>

      <div className="mx-auto mt-10 max-w-2xl space-y-6 text-left text-museum-bone/80 sm:mt-12 sm:space-y-8 sm:text-center">
        {t.about.paragraphs.map((text, index) => (
          <motion.p
            key={text.slice(0, 24)}
            custom={index + 3}
            variants={fadeInUp}
            initial={false}
            animate="visible"
            className="text-sm font-light leading-relaxed tracking-wide md:text-lg"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.section
        custom={7}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="mt-16 w-full max-w-6xl sm:mt-24"
      >
        <h2 className="font-display text-xl tracking-[0.2em] text-museum-bone sm:text-2xl sm:tracking-[0.28em] md:text-3xl">
          {t.about.sectionTitle}
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-museum-brown/60" aria-hidden />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-14 md:grid-cols-3 md:gap-10">
          {aboutProfiles.map((profile) => {
            const isLogo = profile.id === "asil-a-melody";
            return (
              <Link
                key={profile.id}
                href={profile.href}
                onClick={onNavClick(profile.href)}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative h-36 w-36 overflow-hidden rounded-full border border-museum-amber/40 bg-black transition-shadow duration-500 group-hover:shadow-[0_0_22px_rgba(224,192,138,0.28)] sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-56 lg:w-56">
                  <SharpImage
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 280px"
                    className={
                      isLogo
                        ? "object-cover"
                        : "object-cover object-[center_18%] transition duration-700 group-hover:scale-105"
                    }
                  />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-[0.12em] text-museum-bone transition-colors duration-300 group-hover:text-museum-amber sm:mt-6 sm:text-xl sm:tracking-[0.16em]">
                  {profile.name}
                </h3>
                <p className="mt-3 max-w-xs px-2 text-sm font-light leading-relaxed tracking-wide text-museum-bone-muted sm:mt-4 sm:px-3">
                  {profileBio(profile.id)}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
