"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps the browser address bar on "/" so the active page path
 * is not visible. Soft navigation still works; a hard refresh
 * returns to the homepage.
 */
export function UrlMask() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { pushState, replaceState } = window.history;

    const showRoot = (state: unknown = window.history.state) => {
      replaceState.call(window.history, state, "", "/");
    };

    window.history.pushState = (state, title, url) => {
      const result = pushState.call(window.history, state, title, url);
      showRoot(state);
      return result;
    };

    window.history.replaceState = (state, title, url) => {
      if (url === "/" || url === "" || url == null) {
        return replaceState.call(window.history, state, title, url ?? "/");
      }
      const result = replaceState.call(window.history, state, title, url);
      showRoot(state);
      return result;
    };

    showRoot();

    return () => {
      window.history.pushState = pushState;
      window.history.replaceState = replaceState;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.history.replaceState(window.history.state, "", "/");
  }, [pathname]);

  return null;
}
