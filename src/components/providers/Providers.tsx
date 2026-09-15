"use client";

import type { ReactNode } from "react";
import { CursorLight } from "@/components/effects/CursorLight";
import { CarpetFootsteps } from "@/components/effects/CarpetFootsteps";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <CursorLight />
      <CarpetFootsteps />
      <div className="museum-grain" aria-hidden />
      {children}
    </>
  );
}
