export interface ArtistPlatformLinks {
  spotify: string;
  appleMusic: string;
  tidal: string;
  youtubeMusic: string;
  youtube: string;
  instagram: string;
}

export interface Artist {
  id: string;
  name: string;
  quote: string;
  profileImage: string;
  platforms: ArtistPlatformLinks;
}

export interface Exhibit {
  id: string;
  title: string;
  subtitle: string;
  catalogNumber: string;
  year: string;
  artists: string;
  image: string;
  description: string;
  /** Official watch URL — replace search links with exact watch?v= when ready */
  youtubeUrl: string;
}

export interface CompanyInfo {
  slogan: string;
  address: string;
  email: string;
  whatsapp: string;
  phone: string;
  hours: string;
  mapQuery: string;
}

export interface AboutProfile {
  id: string;
  name: string;
  href: string;
  image: string;
  bio: string;
}

export const artists: Artist[] = [
  {
    id: "asi-ildeniz",
    name: "Asi İldeniz",
    quote: "İçim okyanus içimdekiler hâin..",
    profileImage: "/images/artists/asi-ildeniz-v3.webp",
    platforms: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      tidal: "https://tidal.com",
      youtubeMusic: "https://music.youtube.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "asi-nildeniz",
    name: "Asi Nildeniz",
    quote: "Başaracağımı söylüyo My Kâhin..",
    profileImage: "/images/artists/asi-nildeniz-v3.webp",
    platforms: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      tidal: "https://tidal.com",
      youtubeMusic: "https://music.youtube.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
    },
  },
];

export const exhibits: Exhibit[] = [
  {
    id: "asil-azmaz",
    title: "Asil Azmaz & Bal Kokmaz",
    subtitle: "Original Mix",
    catalogNumber: "AM-001",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/asil-azmaz-bal-kokmaz.webp",
    description: "Müzenin en ihtişamlı salonu — lüks, hız ve melodi.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Asil+Azmaz+Bal+Kokmaz",
  },
  {
    id: "yildirim-kivilcim",
    title: "Yıldırım & Kıvılcım",
    subtitle: "Final Mix",
    catalogNumber: "AM-002",
    year: "2024",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/yildirim-kivilcim.webp",
    description: "Mavi yıldırım ile turuncu kıvılcımın buluştuğu koridor.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Nildeniz+Asi+Ildeniz+Yildirim+Kivilcim",
  },
  {
    id: "abece",
    title: "ABECE",
    subtitle: "Original Mix",
    catalogNumber: "AM-003",
    year: "2024",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/abece.webp",
    description: "Taçlar ve ateş arasında doğan ilk salon.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Nildeniz+Asi+Ildeniz+ABECE",
  },
  {
    id: "firavunun-tovbesi",
    title: "Firavunun Tövbesi",
    subtitle: "Original Version",
    catalogNumber: "AM-004",
    year: "2025",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/firavunun-tovbesi.webp",
    description: "Piramitler ve altın yankılar arasında bir tövbe.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Nildeniz+Asi+Ildeniz+Firavun+Tovbesi",
  },
  {
    id: "anlat-sen-ben-dinlerim",
    title: "Anlat Sen — Ben Dinlerim",
    subtitle: "Extended Mix",
    catalogNumber: "AM-005",
    year: "2025",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/yildirim-kivilcim-poster.webp",
    description: "Fırtınalı bir gökyüzü altında anlatılan bir hikâye.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Nildeniz+Asi+Ildeniz+Anlat+Sen+Ben+Dinlerim",
  },
  {
    id: "my-kahin",
    title: "My Kâhin",
    subtitle: "Original Mix",
    catalogNumber: "AM-006",
    year: "2024",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/my-kahin.webp",
    description: "Sessizliğin içinden yükselen bir kehanet.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+My+Kahin",
  },
  {
    id: "gercek-zaman",
    title: "Gerçek Zaman",
    subtitle: "Gece bulvarı",
    catalogNumber: "AM-007",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/gercek-zaman.webp",
    description: "Islak asfalt, neon ve klasik otomobiller eşliğinde bir gece sergisi.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Gercek+Zaman",
  },
  {
    id: "serbest-zaman",
    title: "Serbest Zaman",
    subtitle: "Ay ve güneş",
    catalogNumber: "AM-008",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/serbest-zaman.webp",
    description: "Gece ile gündüzün aynı çerçevede sergilendiği eser.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Serbest+Zaman",
  },
  {
    id: "2x2-5",
    title: "2 × 2 = 5",
    subtitle: "Duvar of fame",
    catalogNumber: "AM-009",
    year: "2024",
    artists: "Asi İldeniz & DJ Mic Check",
    image: "/images/exhibits/2x2-5.webp",
    description: "Efsaneler duvarında yeni bir çerçeve.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+2x2%3D5",
  },
];

export const companyInfo: CompanyInfo = {
  slogan: "Evrenin Asil Sesi",
  address: "Meram Bağları Seyir Alanı, Durunday, Meram/Konya, Türkiye",
  email: "info@asilmelody.com",
  whatsapp: "+905555555555",
  phone: "0555 555 55 55",
  hours: "Bugün açık 09:00 — 17:00",
  mapQuery: "Meram Bağları Seyir Alanı, Durunday, Meram/Konya",
};

export const heroImage = "/images/exhibits/asil-azmaz-bal-kokmaz-hero.webp";
export const brandMark = "/images/logo/logo.webp";
export const brandLogo = "/images/logo/logo.webp";

export const aboutProfiles: AboutProfile[] = [
  {
    id: "asi-ildeniz",
    name: "Asi İldeniz",
    href: "/asi-ildeniz",
    image: "/images/artists/asi-ildeniz-v3.webp",
    bio: "AsilMelody’nin kurucusu ve Ömer Faruk Urgancı’nın kişisel & müzikal izdüşümü. Kendi yazıp kendi besteleyen Asi İldeniz, sadece hissettiği melodileri tüm evrene sunuyor.",
  },
  {
    id: "asil-a-melody",
    name: "Asil’s a Melody",
    href: "/",
    image: brandMark,
    bio: "AsilMelody, Ömer Faruk Urgancı tarafından evrenin en asil seslerini, en saf duygularını ve en filtrelenmemiş anlatılarını bir araya getirmek amacıyla kurulmuş müzik şirketidir.",
  },
  {
    id: "asi-nildeniz",
    name: "Asi Nildeniz",
    href: "/asi-nildeniz",
    image: "/images/artists/asi-nildeniz-v3.webp",
    bio: "Asi İldeniz’in müzikal evrenine eşlik etmek üzere yaratılan, hayal mi yoksa gerçek mi olduğu bilinmeyen Asi Nildeniz; AsilMelody çatısı altında, dijital sınırların ötesinden gelen fısıltılarla evrenin en asil seslerine hayat veriyor.",
  },
];

export function getArtistById(id: string): Artist | undefined {
  return artists.find((artist) => artist.id === id);
}

export function toPlatformList(platforms: ArtistPlatformLinks) {
  return [
    { name: "Apple Music", url: platforms.appleMusic },
    { name: "Spotify", url: platforms.spotify },
    { name: "Tidal", url: platforms.tidal },
    { name: "YouTube Music", url: platforms.youtubeMusic },
    { name: "YouTube", url: platforms.youtube },
    { name: "Instagram", url: platforms.instagram },
  ];
}
