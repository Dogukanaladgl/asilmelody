"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

const VIEW_COOKIE = "asil-view";

const ALLOWED = new Set([
  "/",
  "/hakkinda",
  "/asi-ildeniz",
  "/asi-nildeniz",
  "/iletisim",
]);

type ViewPathContextValue = {
  viewPath: string;
  navigate: (href: string) => void;
  onNavClick: (href: string) => (event: MouseEvent<HTMLAnchorElement>) => void;
};

const ViewPathContext = createContext<ViewPathContextValue | null>(null);

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
}

function writeCookie(path: string) {
  document.cookie = `${VIEW_COOKIE}=${encodeURIComponent(path)}; path=/; SameSite=Lax`;
}

function maskUrl() {
  if (
    window.location.pathname !== "/" ||
    window.location.search ||
    window.location.hash
  ) {
    window.history.replaceState(window.history.state, "", "/");
  }
}

export function ViewPathProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  // Must match server HTML on first paint — never read cookies during init.
  const [viewPath, setViewPath] = useState(pathname);

  useEffect(() => {
    // Soft-nav to a real route: trust pathname and sync the cookie.
    // On "/" (home or refresh after rewrite): restore remembered view from cookie.
    let next = "/";
    if (pathname !== "/" && ALLOWED.has(pathname)) {
      next = pathname;
    } else if (pathname === "/") {
      const stored = readCookie(VIEW_COOKIE);
      next = stored && ALLOWED.has(stored) ? stored : "/";
    }
    setViewPath(next);
    writeCookie(next);
    maskUrl();
  }, [pathname]);

  useEffect(() => {
    const { pushState, replaceState } = window.history;

    window.history.pushState = (state, title, url) => {
      const result = pushState.call(window.history, state, title, url);
      maskUrl();
      return result;
    };

    window.history.replaceState = (state, title, url) => {
      if (url === "/" || url === "" || url == null) {
        return replaceState.call(window.history, state, title, url ?? "/");
      }
      const result = replaceState.call(window.history, state, title, url);
      maskUrl();
      return result;
    };

    maskUrl();

    return () => {
      window.history.pushState = pushState;
      window.history.replaceState = replaceState;
    };
  }, []);

  const navigate = useCallback(
    (href: string) => {
      const next = ALLOWED.has(href) ? href : "/";
      writeCookie(next);
      setViewPath(next);
      router.push(next);
      requestAnimationFrame(maskUrl);
      window.setTimeout(maskUrl, 0);
      window.setTimeout(maskUrl, 40);
    },
    [router],
  );

  const onNavClick = useCallback(
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }
      event.preventDefault();
      navigate(href);
    },
    [navigate],
  );

  const value = useMemo(
    () => ({ viewPath, navigate, onNavClick }),
    [viewPath, navigate, onNavClick],
  );

  return (
    <ViewPathContext.Provider value={value}>{children}</ViewPathContext.Provider>
  );
}

export function useViewPath() {
  const ctx = useContext(ViewPathContext);
  if (!ctx) {
    throw new Error("useViewPath must be used within ViewPathProvider");
  }
  return ctx;
}
