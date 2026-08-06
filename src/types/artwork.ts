export type StreamingPlatform =
  | "spotify"
  | "apple"
  | "youtube"
  | "soundcloud";

export interface StreamingLink {
  platform: StreamingPlatform;
  label: string;
  href: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  catalogNumber: string;
  description: string;
  coverTone: string;
  accent: string;
  links: StreamingLink[];
}
