"use client";

import type { ReactNode } from "react";
import { CursorLight } from "@/components/effects/CursorLight";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <CursorLight />
      <div className="museum-grain" aria-hidden />
      {children}
    </>
  );
}
