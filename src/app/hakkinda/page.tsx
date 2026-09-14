"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutProfiles } from "@/lib/data";

const paragraphs = [
  "Asil Melody, sadece bir müzik platformu değil; notaların ve sessizliğin arasında yankılanan sanatsal bir serüvendir. Asi İldeniz ve Asi Nildeniz’in ruhundan kopan eserler, burada zamanın ötesinde bir müzede sergilenir.",
  "Her koridor loş bir ışıkla aydınlanır. Her parçanın bir vitrini, her sözün bir yankısı vardır. Ziyaretçi acele etmez; yavaşlar, dinler ve sanatın ağırlığını omuzlarında değil, kalbinde taşır.",
  "Bu mekân, dinlemeyi bir alışverişe değil, bir ayine dönüştürür. Platformlara açılan kapılar yalnızca birer eşiktir; asıl deneyim, eserin kendi sessizliğinde başlar.",
  "Biz, müziği hızla tüketilen bir nesne olmaktan çıkarıp, hatırlanan bir atmosfer haline getirmek için buradayız. Evrenin Asil sesi — sabırla, zarifçe, sonsuza kadar.",
];

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
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-40 text-center">
      <motion.p
        custom={0}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-display text-2xl tracking-widest text-museum-bone md:text-3xl"
      >
        ASİL&apos;S A MELODY
      </motion.p>

      <motion.p
        custom={1}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-3 text-sm tracking-[0.28em] text-museum-brown"
      >
        ® Evrenin Asil sesi
      </motion.p>

      <motion.h1
        custom={2}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-14 max-w-3xl font-display text-4xl font-light leading-tight tracking-wide text-museum-bone md:text-5xl"
      >
        Müziğin Sessizlikle Buluştuğu Yer
      </motion.h1>

      <div className="mx-auto mt-12 max-w-2xl space-y-8 text-museum-bone/80">
        {paragraphs.map((text, index) => (
          <motion.p
            key={text.slice(0, 24)}
            custom={index + 3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-base font-light leading-relaxed tracking-wide md:text-lg"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.section
        custom={7}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mt-24 w-full max-w-6xl"
      >
        <h2 className="font-display text-2xl tracking-[0.28em] text-museum-bone md:text-3xl">
          Hakkımızda
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-museum-brown/60" aria-hidden />

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {aboutProfiles.map((profile) => (
            <Link
              key={profile.id}
              href={profile.href}
              className="group flex flex-col items-center text-center"
            >
              <span className="relative h-32 w-32 overflow-hidden rounded-full border border-museum-brown/35 bg-museum-dark transition-shadow duration-500 group-hover:shadow-[0_0_15px_rgba(139,90,43,0.3)] md:h-36 md:w-36">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  quality={95}
                  sizes="144px"
                  className="museum-photo object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <h3 className="mt-6 font-display text-xl tracking-[0.16em] text-museum-bone transition-colors duration-300 group-hover:text-museum-brown">
                {profile.name}
              </h3>
              <p className="mt-4 max-w-xs text-sm font-light leading-relaxed tracking-wide text-museum-bone-muted">
                {profile.bio}
              </p>
            </Link>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
