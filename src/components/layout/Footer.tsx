"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { artists, companyInfo } from "@/lib/data";

const profiles = [
  {
    name: "Asi İldeniz",
    href: "/asi-ildeniz",
    image: artists[0].profileImage,
  },
  {
    name: "Asil's a Melody",
    href: "/",
    image: "https://placehold.co/400x400/1A1817/EBE6E0/png?text=AM",
  },
  {
    name: "Asi Nildeniz",
    href: "/asi-nildeniz",
    image: artists[1].profileImage,
  },
] as const;

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
    icon: (
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    ),
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

const MAP_SRC =
  "https://maps.google.com/maps?q=Meram%20Ba%C4%9Flar%C4%B1%20Seyir%20Alan%C4%B1%2C%20Konya&t=&z=14&ie=UTF8&iwloc=&output=embed";

export function Footer() {
  return (
    <footer
      id="iletisim"
      className="relative border-t border-museum-brown/15 bg-museum-darker"
    >
      <div className="pointer-events-none absolute inset-0 bg-spotlight opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
        {/* Hakkımızda */}
        <section id="hakkinda" className="scroll-mt-28 text-center">
          <h2 className="font-display text-3xl tracking-[0.28em] text-museum-bone md:text-4xl">
            Hakkımızda
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {profiles.map((profile) => (
              <Link
                key={profile.name}
                href={profile.href}
                className="group flex flex-col items-center gap-4"
              >
                <span className="relative h-28 w-28 overflow-hidden rounded-full border border-museum-brown/35 bg-museum-dark transition-shadow duration-500 group-hover:shadow-[0_0_15px_rgba(139,90,43,0.3)] md:h-32 md:w-32">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    unoptimized
                    sizes="128px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="max-w-[9rem] text-center text-[0.65rem] uppercase tracking-[0.28em] text-museum-bone-muted transition-colors duration-300 group-hover:text-museum-brown">
                  {profile.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bize Ulaşın */}
        <section className="mt-24 text-center">
          <h3 className="font-display text-2xl tracking-[0.24em] text-museum-bone md:text-3xl">
            Bize Ulaşın
          </h3>
          <p className="mt-3 text-sm font-light tracking-[0.18em] text-museum-bone-muted">
            Birlikte Daha İyiyiz
          </p>

          <motion.a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 inline-flex items-center justify-center border border-museum-brown/40 bg-museum-brown/15 px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.28em] text-museum-bone transition-colors duration-300 hover:border-museum-brown hover:bg-museum-brown/25"
          >
            Bize WhatsApp Üzerinden Ulaşın
          </motion.a>

          <div className="mx-auto mt-14 flex max-w-xl flex-col gap-6 text-sm font-light leading-relaxed tracking-[0.12em] text-museum-bone">
            <p>{companyInfo.address}</p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="transition-colors duration-300 hover:text-museum-brown"
            >
              {companyInfo.email}
            </a>
            <p>Bugün açık 09:00 - 17:00</p>
          </div>
        </section>

        {/* Dark map */}
        <div className="mt-16 overflow-hidden border border-museum-brown/20">
          <iframe
            title="Asil Melody Konum — Meram, Konya"
            src={MAP_SRC}
            className="h-56 w-full grayscale invert opacity-80 contrast-125 md:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Social + copyright */}
        <div className="mt-16 flex flex-col items-center gap-10">
          <ul className="flex items-center gap-7">
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
                    className="h-5 w-5"
                  >
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-3 text-[0.62rem] uppercase tracking-[0.22em] text-museum-bone-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © 2026 Asil&apos;s a Melody - All Rights Reserved.</p>
            <p>® Evrenin Asil sesi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
