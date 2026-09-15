"use client";

import type { ReactNode } from "react";
import { companyInfo } from "@/lib/data";

const phoneHref = `tel:${companyInfo.phone.replace(/\s/g, "")}`;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Asil-Melody/61574901124501/",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/asilmelody/",
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
    href: "https://www.tiktok.com/@asilmelody",
    icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />,
  },
  {
    label: "X",
    href: "https://x.com/asilmelody",
    icon: (
      <path d="M4 4l7.3 8.6L4.5 20H7l5.2-5.8L16.8 20H20l-7.5-8.8L19.5 4H17l-4.8 5.4L7.2 4z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Asilmelody",
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </>
    ),
  },
] as const;

function FooterLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 text-[0.72rem] uppercase tracking-[0.28em] text-accent">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="relative z-[2] mt-auto border-t border-cream/10 bg-ink-soft">
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid grid-cols-1 items-start gap-10 text-center text-sm font-light text-cream/65 md:grid-cols-3 md:gap-8 md:text-left">
          <div className="space-y-8 md:text-left">
            <div>
              <FooterLabel>E-posta</FooterLabel>
              <a
                href={`mailto:${companyInfo.email}`}
                className="tracking-[0.08em] text-cream transition-colors hover:text-accent"
              >
                {companyInfo.email}
              </a>
            </div>

            <div>
              <FooterLabel>Telefon</FooterLabel>
              <a
                href={phoneHref}
                className="tracking-[0.08em] text-cream transition-colors hover:text-accent"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <FooterLabel>Sosyal</FooterLabel>
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 hover:border-accent hover:text-accent"
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
          </div>

          <div className="md:text-right">
            <FooterLabel>Adres</FooterLabel>
            <p className="leading-relaxed text-cream md:ml-auto md:max-w-[18rem]">
              {companyInfo.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-cream/10 pt-8 text-[0.58rem] uppercase tracking-[0.22em] text-cream/50 sm:flex-row sm:justify-between">
          <p>© 2026 Asil&apos;s a Melody</p>
          <p>Evrenin Asil sesi</p>
        </div>
      </div>
    </footer>
  );
}
