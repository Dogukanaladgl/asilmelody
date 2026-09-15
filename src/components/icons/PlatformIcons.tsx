import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      shapeRendering="geometricPrecision"
      {...props}
    >
      {children}
    </svg>
  );
}

export function AppleMusicIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M19.5 3.2c-.2-.2-.5-.3-.9-.3L9.4 4.3c-.5.1-.9.5-.9 1v9.4a3.1 3.1 0 0 0-1.4-.3c-1.7 0-3.1 1.2-3.1 2.8S5.4 20 7.1 20s3.1-1.2 3.1-2.8V9.7l8.2-1.1v5.3a3.1 3.1 0 0 0-1.4-.3c-1.7 0-3.1 1.2-3.1 2.8s1.4 2.8 3.1 2.8 3.1-1.2 3.1-2.8V4.1c0-.4-.2-.7-.5-.9z" />
    </BaseIcon>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm4.6 15.1c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.3-.9-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.6-.8 6.7-.4 9.2 1 .3.2.4.5.2.8zm1.2-2.7c-.2.4-.7.5-1 .3-2.5-1.6-6.4-2-9.4-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.4-1 7.7-.6 10.6 1.3.3.2.4.6.2.9zm.1-2.8C14.8 9.4 9.5 9.2 6.4 10.2c-.5.1-1-.1-1.2-.6-.1-.5.1-1 .6-1.2 3.6-1.1 9.5-.9 13.2 1.3.4.3.6.8.3 1.2-.2.4-.8.5-1.2.3z" />
    </BaseIcon>
  );
}

export function TidalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m4.7 9.3 2.5 2.5 2.5-2.5-2.5-2.5zm5.1 0 2.5 2.5 2.5-2.5-2.5-2.5zm5.1 0 2.5 2.5 2.5-2.5-2.5-2.5zM9.8 14.4l2.5 2.5 2.5-2.5-2.5-2.5z" />
    </BaseIcon>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </BaseIcon>
  );
}

export function YouTubeMusicIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 17.8A7.8 7.8 0 1 1 19.8 12 7.8 7.8 0 0 1 12 19.8z" />
      <path d="M10 8.4v7.2l6-3.6z" />
    </BaseIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2z" />
      <circle cx="17.5" cy="6.5" r="1.2" />
      <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm3.2 15a3.2 3.2 0 0 1-3.2 3.2H7A3.2 3.2 0 0 1 3.8 17V7A3.2 3.2 0 0 1 7 3.8h10A3.2 3.2 0 0 1 20.2 7z" />
    </BaseIcon>
  );
}
