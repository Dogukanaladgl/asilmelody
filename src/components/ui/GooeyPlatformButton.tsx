import type { MouseEventHandler, ReactNode } from "react";
import {
  AppleMusicIcon,
  InstagramIcon,
  SpotifyIcon,
  TidalIcon,
  YouTubeIcon,
  YouTubeMusicIcon,
} from "@/components/icons/PlatformIcons";

const iconClass = "platform-icon";

const platformIcons: Record<string, ReactNode> = {
  "Apple Music": <AppleMusicIcon className={iconClass} />,
  Spotify: <SpotifyIcon className={iconClass} />,
  Tidal: <TidalIcon className={iconClass} />,
  "YouTube Music": <YouTubeMusicIcon className={iconClass} />,
  YouTube: <YouTubeIcon className={iconClass} />,
  Instagram: <InstagramIcon className={iconClass} />,
};

interface GooeyButtonProps {
  href: string;
  label: ReactNode;
  icon?: ReactNode;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export function GooeyButton({
  href,
  label,
  icon,
  external = true,
  onClick,
  className,
}: GooeyButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={["c-button c-button--gooey", className].filter(Boolean).join(" ")}
    >
      <span className="c-button__content">
        {icon}
        {label}
      </span>
      <div className="c-button__blobs" aria-hidden>
        <div className="c-button__blobs-inner">
          <div />
          <div />
          <div />
        </div>
      </div>
    </a>
  );
}

interface GooeyPlatformButtonProps {
  name: string;
  url: string;
}

export function GooeyPlatformButton({ name, url }: GooeyPlatformButtonProps) {
  return (
    <GooeyButton href={url} label={name} icon={platformIcons[name] ?? null} />
  );
}

export function GooeyFilterDefs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      aria-hidden
    >
      <defs>
        <filter
          id="goo"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
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
