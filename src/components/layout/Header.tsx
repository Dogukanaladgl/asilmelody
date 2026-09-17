"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useViewPath } from "@/components/layout/ViewPathProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";

export function Header() {
  const { viewPath, onNavClick } = useViewPath();
  const { t } = useLanguage();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = useMemo(
    () =>
      [
        { label: t.nav.home, href: "/", match: "/" },
        { label: t.nav.about, href: "/hakkinda", match: "/hakkinda" },
        { label: t.nav.ildeniz, href: "/asi-ildeniz", match: "/asi-ildeniz" },
        { label: t.nav.nildeniz, href: "/asi-nildeniz", match: "/asi-nildeniz" },
        { label: t.nav.contact, href: "/iletisim", match: "/iletisim" },
      ] as const,
    [t],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, lenis]);

  useEffect(() => {
    setMenuOpen(false);
  }, [viewPath]);

  const scrollPageToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isActive = (match: string) => {
    if (!mounted) return false;
    return match === "/" ? viewPath === "/" : viewPath === match;
  };

  const go = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    scrollPageToTop();
    onNavClick(href)(event);
  };

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[80] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/70 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label={t.common.closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col border-b border-cream/10 bg-ink transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between gap-3 px-4 sm:px-6">
            <span className="font-display text-sm tracking-[0.16em] text-cream">
              ASİL&apos;S A MELODY
            </span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream"
              aria-label={t.common.closeMenu}
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-1.5 block h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1.5 block h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav
            id="mobile-menu"
            className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 sm:px-6"
            aria-label={t.nav.mobileNav}
          >
            {navItems.map((item) => {
              const active = isActive(item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={go(item.href)}
                  className={`border-b border-cream/10 py-3.5 text-[0.72rem] uppercase tracking-[0.24em] transition-colors ${
                    active ? "text-accent" : "text-cream/85 active:text-accent"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-5 pb-4">
              <LanguageToggle variant="inline" />
            </div>
          </nav>
        </div>
      </div>,
      document.body,
    );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || menuOpen
          ? "border-b border-cream/10 bg-ink/95 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 md:px-10">
        <Link
          href="/"
          onClick={go("/")}
          aria-label={t.nav.brandHome}
          className="group min-w-0 shrink leading-tight"
        >
          <span className="block truncate font-display text-sm tracking-[0.16em] text-cream transition-colors duration-300 group-hover:text-accent sm:text-base sm:tracking-[0.22em] md:text-lg">
            ASİL&apos;S A MELODY
          </span>
          <span className="mt-0.5 hidden text-[0.55rem] font-light tracking-[0.26em] text-cream/55 sm:block">
            {t.hero.slogan}
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <nav className="flex items-center gap-7 xl:gap-9" aria-label={t.nav.mainNav}>
            {navItems.map((item) => {
              const active = isActive(item.match);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={go(item.href)}
                  className={`relative pb-1 text-[0.68rem] uppercase tracking-[0.26em] transition-colors duration-300 ${
                    active ? "text-accent" : "text-cream/75 hover:text-cream"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-accent hover:text-accent"
            aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? t.common.closeMenu : t.common.openMenu}
            </span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
