"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const navItems = [
  { label: "ANA SAYFA", href: "/" },
  { label: "ASİ İLDENİZ", href: "/asi-ildeniz" },
  { label: "ASİ NİLDENİZ", href: "/asi-nildeniz" },
  { label: "HAKKINDA", href: "/hakkinda" },
  { label: "İLETİŞİM", href: "/#iletisim" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-museum-dark/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a href="/" className="group shrink-0">
          <span className="block font-display text-lg tracking-[0.22em] text-museum-bone transition-colors duration-300 group-hover:text-museum-brown md:text-xl">
            ASİL&apos;S A MELODY
          </span>
          <span className="mt-1 block text-[0.58rem] font-light tracking-[0.28em] text-museum-bone-muted">
            ® Evrenin Asil sesi
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.3em] text-museum-bone transition-colors hover:text-museum-brown"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-4 lg:hidden">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.6rem] uppercase tracking-[0.22em] text-museum-bone transition-colors hover:text-museum-brown"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
