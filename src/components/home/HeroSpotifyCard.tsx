"use client";

import { motion } from "framer-motion";
import { SharpImage } from "@/components/ui/SharpImage";
import { SpotifyIcon } from "@/components/icons/PlatformIcons";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { spotifyPlaylist } from "@/lib/data";
import { formatMessage } from "@/lib/i18n";

export function HeroSpotifyCard() {
  const { t } = useLanguage();
  const { title, artists, coverImage, href } = spotifyPlaylist;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={formatMessage(t.spotify.aria, { title })}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-full max-w-[26rem] items-stretch overflow-hidden rounded-2xl bg-[#181818] text-left shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition duration-500 hover:bg-[#222] hover:shadow-[0_22px_60px_rgba(0,0,0,0.55)] sm:max-w-[30rem] lg:ml-auto lg:w-[32rem] lg:max-w-none xl:w-[34rem]"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', var(--font-noto-sans-jp), sans-serif",
      }}
    >
      <div className="relative m-3.5 h-[6.75rem] w-[6.75rem] shrink-0 overflow-hidden rounded-md sm:m-4 sm:h-[8rem] sm:w-[8rem] lg:h-[8.5rem] lg:w-[8.5rem]">
        <SharpImage
          src={coverImage}
          alt=""
          fill
          sizes="160px"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col justify-between py-3.5 pr-3.5 sm:py-4 sm:pr-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 pr-6">
            <p className="truncate text-base font-bold leading-snug text-white sm:text-lg">
              {title}
            </p>
            <div className="mt-2 flex min-w-0 items-center gap-2">
              <span className="inline-flex shrink-0 rounded-full bg-[#2a2a2a] px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-[#b3b3b3]">
                {t.spotify.badge}
              </span>
              <span className="truncate text-[0.78rem] text-[#b3b3b3] sm:text-sm">
                {artists}
              </span>
            </div>
          </div>
          <SpotifyIcon className="h-6 w-6 shrink-0 text-white sm:h-7 sm:w-7" />
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <span className="inline-flex items-center gap-2.5 text-sm font-medium text-white transition group-hover:text-[#1db954]">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full border border-white/80 text-base leading-none"
              aria-hidden
            >
              +
            </span>
            {t.spotify.cta}
          </span>

          <span className="flex items-center gap-3">
            <span className="text-xl leading-none text-[#b3b3b3]" aria-hidden>
              ···
            </span>
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 h-[1.15rem] w-[1.15rem] fill-current sm:h-5 sm:w-5"
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
