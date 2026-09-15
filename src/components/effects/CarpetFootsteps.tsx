"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

interface CarpetFootstepsProps {
  /** 0–1 arası yatay merkez (0.5 = kırmızı halı ortası) */
  trackCenterRatio?: number;
  /** İki adım arası kaydırma mesafesi (px) */
  stepInterval?: number;
  /** Sol–sağ ayak yatay açıklığı (px) — dar tut, hali üzerinde kalsın */
  strideWidth?: number;
  /** Sol/sağ ayak dikey önde olma mesafesi (yürüme duruşu) */
  gaitLead?: number;
  className?: string;
}

const STEP_LIFETIME_MS = 2500;
const STEP_HEIGHT = 80;
const TRACK_ID = "footsteps-track";

const SHOE_MARKUP = `
  <svg viewBox="0 0 45 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;" aria-hidden="true">
    <g filter="url(#leather-shadow)" fill="#3a0208" stroke="#1f0105" stroke-width="1.2">
      <path d="M 12 5 C 24 3, 36 7, 39 24 C 42 40, 36 60, 29 70 C 23 72, 17 72, 12 69 C 7 58, 4 38, 6 22 C 7 11, 8 6, 12 5 Z"/>
      <path d="M 14 9 C 23 7, 33 11, 35 25 C 37 38, 33 55, 27 64 C 23 66, 18 65, 14 63 C 10 54, 7 36, 9 23 C 10 14, 11 10, 14 9 Z"
            fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.65"/>
      <path d="M 13 77 C 19 76, 26 76, 30 77 C 33 82, 33 97, 29 103 C 24 105, 17 105, 13 103 C 9 97, 9 82, 13 77 Z"/>
      <path d="M 15 80 C 19 79, 24 79, 28 80 C 30 84, 30 95, 27 99 C 23 101, 18 101, 15 99 C 12 95, 12 84, 15 80 Z"
            fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.5"/>
    </g>
  </svg>
`;

function getTrackBounds(scrollY: number) {
  const track = document.getElementById(TRACK_ID);
  if (!track) return null;
  const rect = track.getBoundingClientRect();
  const top = scrollY + rect.top;
  return { top, bottom: top + rect.height };
}

export function CarpetFootsteps({
  trackCenterRatio = 0.5,
  stepInterval = 78,
  strideWidth = 16,
  gaitLead = 44,
  className = "",
}: CarpetFootstepsProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const distanceAccumulator = useRef(0);
  const isLeftFoot = useRef(true);
  const primed = useRef(false);
  const timersRef = useRef<number[]>([]);
  const reducedMotion = useRef(false);

  const syncHeight = (scrollLimit: number) => {
    const container = containerRef.current;
    if (!container) return;
    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      scrollLimit + window.innerHeight,
      window.innerHeight,
    );
    container.style.height = `${docHeight}px`;
  };

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    syncHeight(0);

    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    primed.current = false;
    distanceAccumulator.current = 0;
    lastScrollY.current = 0;
    isLeftFoot.current = true;
    const container = containerRef.current;
    if (container) {
      container.querySelectorAll(".shoe-step").forEach((node) => node.remove());
    }
    syncHeight(0);
  }, [pathname]);

  useLenis(
    (lenis) => {
      const container = containerRef.current;
      if (!container || reducedMotion.current) return;

      syncHeight(lenis.limit);

      const currentScrollY = lenis.scroll;

      if (!primed.current) {
        lastScrollY.current = currentScrollY;
        primed.current = true;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (Math.abs(delta) < 1) return;

      const isDown = delta > 0;
      distanceAccumulator.current += Math.abs(delta);

      if (distanceAccumulator.current < stepInterval) return;
      distanceAccumulator.current = 0;

      const direction = isDown ? 1 : -1;
      const footLead = isLeftFoot.current ? 0 : gaitLead * direction;
      const posY =
        currentScrollY + window.innerHeight * 0.42 + footLead;

      // Sadece eserler koridoru bandında bas — hero / başlık / salon kapıları hariç
      const track = getTrackBounds(currentScrollY);
      if (!track || posY < track.top || posY + STEP_HEIGHT > track.bottom) {
        return;
      }

      const step = document.createElement("div");
      step.className = "shoe-step";
      step.innerHTML = SHOE_MARKUP;

      const centerX = window.innerWidth * trackCenterRatio;
      // Sol ayak solda kalsın; 180° dönüşte scaleX terslenmezse ayaklar yer değiştirir
      const side = isLeftFoot.current ? -1 : 1;
      const posX = centerX + side * strideWidth - 16;

      const rotation = isDown ? 180 : 0;
      const footTilt = side * 4;
      // Aşağı (180°) ve yukarı (0°) için ayna: iç kavisler orta çizgiye baksın
      const flipX = side * (isDown ? -1 : 1);
      const totalAngle = rotation + footTilt;

      step.style.left = `${posX}px`;
      step.style.top = `${posY}px`;
      step.style.setProperty(
        "--step-transform",
        `rotate(${totalAngle}deg) scaleX(${flipX})`,
      );

      container.appendChild(step);

      const timer = window.setTimeout(() => {
        step.remove();
        timersRef.current = timersRef.current.filter((id) => id !== timer);
      }, STEP_LIFETIME_MS);
      timersRef.current.push(timer);

      isLeftFoot.current = !isLeftFoot.current;
    },
    [trackCenterRatio, stepInterval, strideWidth, gaitLead, pathname],
  );

  return (
    <div
      id="carpet-steps-container"
      ref={containerRef}
      className={`carpet-steps-container ${className}`}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
        aria-hidden
      >
        <defs>
          <filter
            id="leather-shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="1.5"
              floodColor="#000000"
              floodOpacity="0.45"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
