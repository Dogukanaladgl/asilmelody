"use client";

import { useEffect, useRef } from "react";
import { useMuseumStore } from "@/store/useMuseumStore";

export function CursorLight() {
  const lanternRef = useRef<HTMLDivElement>(null);
  const setCursor = useMuseumStore((state) => state.setCursor);
  const isDetailOpen = useMuseumStore((state) => state.isDetailOpen);

  useEffect(() => {
    const lantern = lanternRef.current;
    if (!lantern) return;

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setCursor({ x: targetX, y: targetY });
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      lantern.style.background = `radial-gradient(circle 180px at ${currentX}px ${currentY}px, rgba(196, 165, 116, 0.22) 0%, rgba(139, 111, 92, 0.08) 35%, transparent 70%)`;
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [setCursor]);

  return (
    <div
      ref={lanternRef}
      className="cursor-lantern"
      style={{ opacity: isDetailOpen ? 0.35 : 1 }}
      aria-hidden
    />
  );
}
