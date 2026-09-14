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
    profileImage: "/images/artists/asi-ildeniz.jpg",
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
    profileImage: "/images/artists/asi-nildeniz.jpg",
    platforms: {
      spotify: "https://open.spotify.com",
      appleMusic: "https://music.apple.com",
      tidal: "https://tidal.com",
      youtube: "https://youtube.com",
    },
  },
];

export const exhibits: Exhibit[] = [
  {
    id: "abece",
    title: "ABECE",
    subtitle: "Kraliyet açılışı",
    catalogNumber: "AM-001",
    year: "2024",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/abece.jpg",
    description: "Taçlar ve ateş arasında doğan ilk salon.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+ABECE",
  },
  {
    id: "yildirim-kivilcim",
    title: "Yıldırım & Kıvılcım",
    subtitle: "İkili fırtına",
    catalogNumber: "AM-002",
    year: "2024",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/yildirim-kivilcim.jpg",
    description: "Mavi yıldırım ile turuncu kıvılcımın buluştuğu koridor.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Yildirim+Kivilcim",
  },
  {
    id: "gercek-zaman",
    title: "Gerçek Zaman",
    subtitle: "Gece bulvarı",
    catalogNumber: "AM-003",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/gercek-zaman.jpg",
    description: "Islak asfalt, neon ve klasik otomobiller eşliğinde bir gece sergisi.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Gercek+Zaman",
  },
  {
    id: "asil-azmaz",
    title: "Asil Azmaz & Bal Kokmaz",
    subtitle: "Kırmızı halı",
    catalogNumber: "AM-004",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/asil-azmaz-bal-kokmaz.jpg",
    description: "Müzenin en ihtişamlı salonu — lüks, hız ve melodi.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Asil+Azmaz+Bal+Kokmaz",
  },
  {
    id: "serbest-zaman",
    title: "Serbest Zaman",
    subtitle: "Ay ve güneş",
    catalogNumber: "AM-005",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/serbest-zaman.jpg",
    description: "Gece ile gündüzün aynı çerçevede sergilendiği eser.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Serbest+Zaman",
  },
  {
    id: "firavunun-tovbesi",
    title: "Firavunun Tövbesi",
    subtitle: "Antik salon",
    catalogNumber: "AM-006",
    year: "2025",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/firavunun-tovbesi.jpg",
    description: "Piramitler ve altın yankılar arasında bir tövbe.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+Firavun+Tovbesi",
  },
  {
    id: "2x2-5",
    title: "2 × 2 = 5",
    subtitle: "Duvar of fame",
    catalogNumber: "AM-007",
    year: "2024",
    artists: "Asi İldeniz & DJ Mic Check",
    image: "/images/exhibits/2x2-5.jpg",
    description: "Efsaneler duvarında yeni bir çerçeve.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+2x2%3D5",
  },
  {
    id: "my-kahin",
    title: "My Kâhin",
    subtitle: "Kehanet salonu",
    catalogNumber: "AM-008",
    year: "2024",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/my-kahin.jpg",
    description: "Sessizliğin içinden yükselen bir kehanet.",
    youtubeUrl:
      "https://www.youtube.com/results?search_query=Asi+Ildeniz+Asi+Nildeniz+My+Kahin",
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

export const heroImage = "/images/exhibits/asil-azmaz-bal-kokmaz-hero.png";
export const brandMark = "/images/exhibits/abece.jpg";

export const aboutProfiles: AboutProfile[] = [
  {
    id: "asi-ildeniz",
    name: "Asi İldeniz",
    href: "/asi-ildeniz",
    image: "/images/artists/asi-ildeniz.jpg",
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
    image: "/images/artists/asi-nildeniz.jpg",
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
    { name: "YouTube", url: platforms.youtube },
  ];
}
