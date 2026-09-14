"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useViewPath } from "@/components/layout/ViewPathProvider";

const navItems = [
  { label: "ANA SAYFA", short: "ANA SAYFA", href: "/", match: "/" },
  {
    label: "HAKKINDA",
    short: "HAKKINDA",
    href: "/hakkinda",
    match: "/hakkinda",
  },
  {
    label: "ASİ İLDENİZ",
    short: "İLDENİZ",
    href: "/asi-ildeniz",
    match: "/asi-ildeniz",
  },
  {
    label: "ASİ NİLDENİZ",
    short: "NİLDENİZ",
    href: "/asi-nildeniz",
    match: "/asi-nildeniz",
  },
  { label: "İLETİŞİM", short: "İLETİŞİM", href: "/iletisim", match: "/iletisim" },
] as const;

export function Header() {
  const { viewPath, onNavClick } = useViewPath();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollPageToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Avoid active-state hydration mismatch (cookie / rewritten "/" vs real page).
  const isActive = (match: string) => {
    if (!mounted) return false;
    return match === "/" ? viewPath === "/" : viewPath === match;
  };

  const go = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    scrollPageToTop();
    onNavClick(href)(event);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-b border-museum-brown/25 bg-museum-dark/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-museum-brown/15 bg-museum-dark/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6 md:h-20 md:px-10">
        <Link
          href="/"
          onClick={go("/")}
          className="group shrink-0 leading-tight"
        >
          <span className="block font-display text-base tracking-[0.2em] text-museum-bone transition-colors duration-300 group-hover:text-museum-amber md:text-lg">
            ASİL&apos;S A MELODY
          </span>
          <span className="mt-0.5 block text-[0.55rem] font-light tracking-[0.26em] text-museum-bone-muted">
            ® Evrenin Asil sesi
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Ana menü"
        >
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className={`relative pb-1 text-[0.7rem] uppercase tracking-[0.28em] transition-colors duration-300 ${
                  active
                    ? "text-museum-amber"
                    : "text-museum-bone/85 hover:text-museum-bone"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-museum-amber transition-all duration-300 ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <nav
          className="flex max-w-[55%] flex-wrap items-center justify-end gap-x-3 gap-y-1 lg:hidden"
          aria-label="Mobil menü"
        >
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={go(item.href)}
                className={`text-[0.58rem] uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "text-museum-amber"
                    : "text-museum-bone/80 hover:text-museum-bone"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.short}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
