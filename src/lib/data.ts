export interface ArtistPlatformLinks {
  spotify: string;
  appleMusic: string;
  tidal: string;
  youtube: string;
}

export interface Artist {
  id: string;
  name: string;
  quote: string;
  profileImage: string;
  platforms: ArtistPlatformLinks;
}

export interface CompanyInfo {
  slogan: string;
  address: string;
  email: string;
  whatsapp: string;
}

export const artists: Artist[] = [
  {
    id: "asi-ildeniz",
    name: "Asi İldeniz",
    quote: "İçim okyanus içimdekiler hâin..",
    profileImage: "https://placehold.co/600x800/1A1817/EBE6E0/png?text=Asi+Ildeniz",
    platforms: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      tidal: "https://tidal.com",
      youtube: "https://youtube.com",
    },
  },
  {
    id: "asi-nildeniz",
    name: "Asi Nildeniz",
    quote: "Başaracağımı söylüyo My Kâhin..",
    profileImage: "https://placehold.co/600x800/1A1817/EBE6E0/png?text=Asi+Nildeniz",
    platforms: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      tidal: "https://tidal.com",
      youtube: "https://youtube.com",
    },
  },
];

export const companyInfo: CompanyInfo = {
  slogan: "Evrenin Asil Sesi",
  address: "Meram Bağları Seyir Alanı, Durunday, Meram/Konya",
  email: "info@asilmelody.com",
  whatsapp: "+905000000000",
};

export function getArtistById(id: string): Artist | undefined {
  return artists.find((artist) => artist.id === id);
}

export function toPlatformList(platforms: ArtistPlatformLinks) {
  return [
    { name: "Apple Music", url: platforms.appleMusic },
    { name: "Spotify", url: platforms.spotify },
    { name: "Tidal", url: platforms.tidal },
    { name: "YouTube", url: platforms.youtube },
  ];
}
