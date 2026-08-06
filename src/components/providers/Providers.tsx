"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CursorLight } from "@/components/effects/CursorLight";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SmoothScroll>
      <CursorLight />
      <div className="museum-grain" aria-hidden />
      {children}
    </SmoothScroll>
  );
}
