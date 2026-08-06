import type { Artwork } from "@/types/artwork";

/** Placeholder exhibition catalog — replace with CMS / API later. */
export const artworks: Artwork[] = [
  {
    id: "nocturne-01",
    title: "Loş Koridor",
    artist: "Asil Melody",
    year: "2024",
    catalogNumber: "AM-001",
    description:
      "Müzenin ilk salonu. Yavaş açılan bir atmosfer, uzak bir piyano ve sıcak ahşap rezonansı.",
    coverTone: "#2a221c",
    accent: "#c4a574",
    links: [
      {
        platform: "spotify",
        label: "Spotify",
        href: "https://open.spotify.com",
      },
      {
        platform: "apple",
        label: "Apple Music",
        href: "https://music.apple.com",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://youtube.com",
      },
    ],
  },
  {
    id: "velvet-02",
    title: "Kadife Vitrin",
    artist: "Asil Melody",
    year: "2024",
    catalogNumber: "AM-002",
    description:
      "Kadife perdelerin ardında saklı bir melodi. Galeri ışığı altında yumuşak bas hatları.",
    coverTone: "#1f1a24",
    accent: "#8b6f5c",
    links: [
      {
        platform: "spotify",
        label: "Spotify",
        href: "https://open.spotify.com",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://youtube.com",
      },
      {
        platform: "soundcloud",
        label: "SoundCloud",
        href: "https://soundcloud.com",
      },
    ],
  },
  {
    id: "amber-03",
    title: "Kehribar Saat",
    artist: "Asil Melody",
    year: "2025",
    catalogNumber: "AM-003",
    description:
      "Zamanın yavaşladığı bir salon. Kehribar tonlarında akordlar ve uzun yankılar.",
    coverTone: "#241c14",
    accent: "#d4b896",
    links: [
      {
        platform: "apple",
        label: "Apple Music",
        href: "https://music.apple.com",
      },
      {
        platform: "spotify",
        label: "Spotify",
        href: "https://open.spotify.com",
      },
    ],
  },
  {
    id: "marble-04",
    title: "Mermer Sessizlik",
    artist: "Asil Melody",
    year: "2025",
    catalogNumber: "AM-004",
    description:
      "Soğuk mermer yüzeylerde gezinen sıcak bir fısıltı. Minimal, net, galeri gibi.",
    coverTone: "#1c1e20",
    accent: "#a89b8c",
    links: [
      {
        platform: "spotify",
        label: "Spotify",
        href: "https://open.spotify.com",
      },
      {
        platform: "youtube",
        label: "YouTube",
        href: "https://youtube.com",
      },
    ],
  },
  {
    id: "archive-05",
    title: "Arşiv Odası",
    artist: "Asil Melody",
    year: "2025",
    catalogNumber: "AM-005",
    description:
      "Tozlu raflardan çıkan bir kayıt. Eski bant hissi, modern bir düzenleme ile.",
    coverTone: "#221816",
    accent: "#9a7b5f",
    links: [
      {
        platform: "spotify",
        label: "Spotify",
        href: "https://open.spotify.com",
      },
      {
        platform: "apple",
        label: "Apple Music",
        href: "https://music.apple.com",
      },
      {
        platform: "soundcloud",
        label: "SoundCloud",
        href: "https://soundcloud.com",
      },
    ],
  },
];

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((item) => item.id === id);
}
