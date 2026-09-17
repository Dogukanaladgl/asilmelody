"use client";

import type { ReactNode } from "react";
import LanguageProvider, {
  useLanguage,
} from "@/components/providers/LanguageProvider";

function SkipToContent() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:tracking-[0.12em] focus:text-ink focus:uppercase"
    >
      {t.common.skipToContent}
    </a>
  );
}

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <SkipToContent />
      {children}
    </LanguageProvider>
  );
}
