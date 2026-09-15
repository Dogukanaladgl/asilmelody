"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { aboutProfiles } from "@/lib/data";
import { SharpImage } from "@/components/ui/SharpImage";

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
  const { onNavClick } = useViewPath();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-24 pt-40 text-center">
      <motion.p
        custom={0}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="font-display text-2xl tracking-widest text-museum-bone md:text-3xl"
      >
        ASİL&apos;S A MELODY
      </motion.p>

      <motion.p
        custom={1}
        variants={fadeInUp}
        initial={false}
        animate="visible"
        className="mt-3 text-sm tracking-[0.28em] text-museum-brown"
      >
        ® Evrenin Asil sesi
      </motion.p>

      <motion.h1
        custom={2}
        variants={fadeInUp}
        initial={false}
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
            initial={false}
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
        initial={false}
        animate="visible"
        className="mt-24 w-full max-w-6xl"
      >
        <h2 className="font-display text-2xl tracking-[0.28em] text-museum-bone md:text-3xl">
          Hakkımızda
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-museum-brown/60" aria-hidden />

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {aboutProfiles.map((profile) => {
            const isLogo = profile.id === "asil-a-melody";
            return (
              <Link
                key={profile.id}
                href={profile.href}
                onClick={onNavClick(profile.href)}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative h-44 w-44 overflow-hidden rounded-full border border-museum-amber/40 bg-black transition-shadow duration-500 group-hover:shadow-[0_0_22px_rgba(224,192,138,0.28)] md:h-52 md:w-52 lg:h-56 lg:w-56">
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
                <h3 className="mt-6 font-display text-xl tracking-[0.16em] text-museum-bone transition-colors duration-300 group-hover:text-museum-amber">
                  {profile.name}
                </h3>
                <p className="mt-4 max-w-xs px-3 text-sm font-light leading-relaxed tracking-wide text-museum-bone-muted">
                  {profile.bio}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
