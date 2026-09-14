"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutProfiles, companyInfo } from "@/lib/data";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <path d="M4 4l7.3 8.6L4.5 20H7l5.2-5.8L16.8 20H20l-7.5-8.8L19.5 4H17l-4.8 5.4L7.2 4z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="relative z-[2] bg-transparent">
      <div className="section-veil-top opacity-80" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-spotlight opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
        {/* Hakkımızda */}
        <section id="hakkinda" className="scroll-mt-28 text-center">
          <h2 className="font-display text-3xl tracking-[0.28em] text-museum-bone md:text-4xl">
            Hakkımızda
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-museum-brown/60" aria-hidden />

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {aboutProfiles.map((profile) => (
              <Link
                key={profile.id}
                href={profile.href}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative h-28 w-28 overflow-hidden rounded-full border border-museum-brown/35 bg-museum-dark transition-shadow duration-500 group-hover:shadow-[0_0_15px_rgba(139,90,43,0.3)] md:h-32 md:w-32">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    quality={95}
                    sizes="128px"
                    className="museum-photo object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-[0.14em] text-museum-bone transition-colors duration-300 group-hover:text-museum-brown">
                  {profile.name}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm font-light leading-relaxed text-museum-bone-muted">
                  {profile.bio}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* İletişim — sade */}
        <section className="mt-20 border-t border-museum-brown/15 pt-16 text-center">
          <h3 className="font-display text-2xl tracking-[0.24em] text-museum-bone md:text-3xl">
            Bize Ulaşın
          </h3>
          <p className="mt-3 text-sm font-light tracking-[0.18em] text-museum-bone-muted">
            Birlikte Daha İyiyiz
          </p>

          <a
            href="/iletisim"
            className="mt-8 inline-flex items-center justify-center border border-museum-brown/45 px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.28em] text-museum-bone transition-all duration-300 hover:border-museum-amber hover:bg-museum-brown/15 hover:text-museum-amber"
          >
            İletişim Sayfası
          </a>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 text-sm font-light text-museum-bone-muted md:flex-row md:justify-center md:gap-8">
            <p className="max-w-xs leading-relaxed">{companyInfo.address}</p>
            <span className="hidden h-3 w-px bg-museum-brown/30 md:block" aria-hidden />
            <a
              href={`mailto:${companyInfo.email}`}
              className="tracking-[0.12em] transition-colors hover:text-museum-amber"
            >
              {companyInfo.email}
            </a>
            <span className="hidden h-3 w-px bg-museum-brown/30 md:block" aria-hidden />
            <p>09:00 — 17:00</p>
          </div>

          <ul className="mt-12 flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-museum-bone-muted transition-colors duration-300 hover:text-museum-brown"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-museum-brown/10 pt-8 text-[0.58rem] uppercase tracking-[0.22em] text-museum-bone-muted/80 sm:flex-row sm:justify-between">
          <p>© 2026 Asil&apos;s a Melody</p>
          <p>® Evrenin Asil sesi</p>
        </div>
      </div>
    </footer>
  );
}
