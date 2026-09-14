import type { ReactNode } from "react";
import {
  AppleMusicIcon,
  SpotifyIcon,
  TidalIcon,
  YouTubeIcon,
} from "@/components/icons/PlatformIcons";

const platformIcons: Record<string, ReactNode> = {
  "Apple Music": <AppleMusicIcon className="h-4 w-4 shrink-0" />,
  Spotify: <SpotifyIcon className="h-4 w-4 shrink-0" />,
  Tidal: <TidalIcon className="h-4 w-4 shrink-0" />,
  YouTube: <YouTubeIcon className="h-4 w-4 shrink-0" />,
};

interface GooeyPlatformButtonProps {
  name: string;
  url: string;
}

export function GooeyPlatformButton({ name, url }: GooeyPlatformButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="c-button c-button--gooey"
    >
      <span className="c-button__content">
        {platformIcons[name] ?? null}
        {name}
      </span>
      <div className="c-button__blobs" aria-hidden>
        <div />
        <div />
        <div />
      </div>
    </a>
  );
}

export function GooeyFilterDefs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      aria-hidden
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}
