"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "ANA SAYFA", href: "/", match: "/" },
  { label: "ASİL MELODY HAKKINDA", href: "/hakkinda", match: "/hakkinda" },
  { label: "ASİ NİLDENİZ", href: "/asi-nildeniz", match: "/asi-nildeniz" },
  { label: "ASİ İLDENİZ", href: "/asi-ildeniz", match: "/asi-ildeniz" },
  { label: "İLETİŞİM", href: "/iletisim", match: "/iletisim" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (match: string) => {
    if (match === "/") return pathname === "/";
    return pathname === match;
  };

  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-museum-dark/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link href="/" className="group shrink-0">
          <span className="block font-display text-lg tracking-[0.22em] text-museum-bone transition-colors duration-300 group-hover:text-museum-brown md:text-xl">
            ASİL&apos;S A MELODY
          </span>
          <span className="mt-1 block text-[0.58rem] font-light tracking-[0.28em] text-museum-bone-muted">
            ® Evrenin Asil sesi
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
          aria-label="Ana menü"
        >
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-[0.68rem] uppercase tracking-[0.28em] transition-colors xl:text-xs xl:tracking-[0.3em] ${
                  active
                    ? "text-museum-brown"
                    : "text-museum-bone hover:text-museum-brown"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-museum-brown" />
                )}
              </Link>
            );
          })}
        </nav>

        <nav className="flex items-center gap-3 lg:hidden" aria-label="Mobil menü">
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`max-w-[4.5rem] truncate text-[0.52rem] uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "text-museum-brown"
                    : "text-museum-bone hover:text-museum-brown"
                }`}
                aria-current={active ? "page" : undefined}
                title={item.label}
              >
                {item.label === "ASİL MELODY HAKKINDA"
                  ? "HAKKINDA"
                  : item.label.split(" ").slice(-1)[0]}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
