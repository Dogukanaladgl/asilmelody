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
  /** Melankolia tarzı uzun biyografi paragrafları */
  bio: string[];
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
  /** Yatay kapaklar için yan (landscape) müze çerçevesi */
  frame?: "portrait" | "landscape";
}

export interface CompanyInfo {
  slogan: string;
  address: string;
  email: string;
  whatsapp: string;
  phone: string;
  hours: string;
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
    bio: [
      "Asi İldeniz, AsilMelody’nin kurucusu ve Ömer Faruk Urgancı’nın kişisel ile müzikal izdüşümüdür. Kendi yazdığı, kendi bestelediği parçalarla yalnızca hissettiği melodileri evrene sunar; sahneyi bir vitrin değil, bir iç yolculuk olarak kurar.",
      "Yazımında sertlik ile zarafet yan yanadır. Sözler bazen okyanus kadar derin, bazen bir fısıltı kadar yakındır. Prodüksiyonlarında karanlık bir atmosfer, sıcak bir tını ve modern bir nabız bir araya gelir — dinleyiciyi acele ettirmeden, yavaşlatarak çeker.",
      "Asil Azmaz & Bal Kokmaz’tan My Kâhin’e uzanan katalogta Asi İldeniz, Asi Nildeniz ile aynı sahnede yankılanır. Her parça bir kapıdır: platformlara açılır, asıl deneyim ise eserin kendi sessizliğinde başlar.",
      "Bugün Asi İldeniz, bağımsız bir müzik anlayışının peşinde; filtrelemeden, hızla tüketilmeden hatırlanan bir atmosfer bırakmak için üretmeye devam ediyor.",
    ],
    profileImage: "/images/artists/asi-ildeniz-portrait-hq.jpg",
    platforms: {
      appleMusic: "https://music.apple.com/us/artist/asi-i-ldeniz/1896207295",
      spotify:
        "https://open.spotify.com/intl-tr/artist/099xa3hznSJtxqK3VPmm0o",
      tidal: "https://tidal.com/@asiildeniz",
      youtubeMusic: "https://music.youtube.com/@Asiildeniz",
      youtube: "https://www.youtube.com/@asiildeniz",
      instagram: "https://www.instagram.com/asiildeniz",
    },
  },
  {
    id: "asi-nildeniz",
    name: "Asi Nildeniz",
    quote: "Başaracağımı söylüyo My Kâhin..",
    bio: [
      "Asi Nildeniz, Asi İldeniz’in müzikal evrenine eşlik etmek üzere doğmuş bir sestir — hayal mi, gerçek mi olduğu bilinmeyen; dijital sınırların ötesinden gelen fısıltılarla AsilMelody çatısı altında şekillenen bir figür.",
      "Anlatısında kehanet, tövbe, taç ve kıvılcım yan yanadır. Ses rengi bazen bir ayna gibi net, bazen sisli bir gece gibi belirsizdir. Dinleyiciyi tek bir duyguya hapsetmez; parçadan parçaya geçirir.",
      "Yıldırım & Kıvılcım’dan Firavunun Tövbesi’ne, ABECE’den Anlat Sen — Ben Dinlerim’e kadar Asi Nildeniz, Asi İldeniz ile aynı sahnede durur. İkili üretim, AsilMelody’nin imzasını güçlendirir: iki ruh, bir ses.",
      "Asi Nildeniz, hızın değil derinliğin peşindedir. Platformlarda buluşur; asıl kalıcı olan, parçanın bıraktığı yankıdır.",
    ],
    profileImage: "/images/artists/asi-nildeniz-v3.webp",
    platforms: {
      appleMusic: "https://music.apple.com/us/artist/asi-nildeniz/1896248211",
      spotify:
        "https://open.spotify.com/intl-tr/artist/0f7myGxLCpou1owHukAavP",
      tidal: "https://tidal.com/artist/79012509",
      youtubeMusic: "https://music.youtube.com/@Asinildeniz",
      youtube: "https://www.youtube.com/@asinildeniz",
      instagram: "https://www.instagram.com/asinildeniz",
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
    description: "Lüks, hız ve melodi — katalogun amiral gemisi.",
    youtubeUrl: "https://www.youtube.com/watch?v=RRlfcrvs4G4",
  },
  {
    id: "yildirim-kivilcim",
    title: "Yıldırım & Kıvılcım",
    subtitle: "Final Mix",
    catalogNumber: "AM-002",
    year: "2024",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/yildirim-kivilcim.webp",
    description: "Mavi yıldırım ile turuncu kıvılcımın buluşması.",
    youtubeUrl: "https://www.youtube.com/watch?v=xdXJvApLXW4",
  },
  {
    id: "abece",
    title: "ABECE",
    subtitle: "Original Mix",
    catalogNumber: "AM-003",
    year: "2024",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/abece.webp",
    description: "Taçlar ve ateş arasında doğan ilk kıvılcım.",
    youtubeUrl: "https://www.youtube.com/watch?v=BrKaPxqxlMg",
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
    youtubeUrl: "https://www.youtube.com/watch?v=2TEmNNct_QE",
    frame: "landscape",
  },
  {
    id: "anlat-sen-ben-dinlerim",
    title: "Anlat Sen — Ben Dinlerim",
    subtitle: "Extended Mix",
    catalogNumber: "AM-005",
    year: "2025",
    artists: "Asi Nildeniz & Asi İldeniz",
    image: "/images/exhibits/anlat-sen-ben-dinlerim.jpg",
    description: "Fırtınalı bir gökyüzü altında anlatılan bir hikâye.",
    youtubeUrl: "https://www.youtube.com/watch?v=4JWgNAUS7eQ",
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
    youtubeUrl: "https://www.youtube.com/watch?v=l8Y-6bZw7hE",
    frame: "landscape",
  },
  {
    id: "varligin-yoklugun",
    title: "Varlığın & Yokluğun",
    subtitle: "Original Mix",
    catalogNumber: "AM-007",
    year: "2026",
    artists: "Asi İldeniz & Asi Nildeniz",
    image: "/images/exhibits/varligin-yoklugun.webp",
    description: "Varlık ile yokluk arasında yankılanan bir fısıltı.",
    youtubeUrl: "https://www.youtube.com/watch?v=sD8lZ8uLs0Q",
  },
  {
    id: "iki-carpi-iki-bes",
    title: "2x2=5",
    subtitle: "Original Mix",
    catalogNumber: "AM-008",
    year: "2026",
    artists: "Asi İldeniz",
    image: "/images/exhibits/2x2-5-cover.webp",
    description: "İki kere iki — beş eder; ritmin paradox’u.",
    youtubeUrl: "https://www.youtube.com/watch?v=F1-yiUK3QsA",
  },
];

export const companyInfo: CompanyInfo = {
  slogan: "Evrenin Asil Sesi",
  address:
    "Fevziçakmak, 10740. Sk. No:1, 42050 Karatay/Konya, Türkiye",
  email: "info@asilmelody.com",
  whatsapp: "+905300122700",
  phone: "0530 012 27 00",
  hours: "Bugün açık 09:00 — 17:00",
};

export const heroImage = "/images/exhibits/asil-azmaz-bal-kokmaz.webp";
export const brandMark = "/images/logo/logo.webp";
export const brandLogo = "/images/logo/logo.webp";

/** Hero’daki Spotify oynatma listesi kartı */
export const spotifyPlaylist = {
  title: "Serbest Zaman & Gerçek Zaman",
  artists: "Asi İldeniz & Asi Nildeniz",
  badge: "Playlist",
  ctaLabel: "Spotify'da Dinle",
  coverImage: "/images/exhibits/asil-azmaz-bal-kokmaz.webp",
  /** Resmi playlist URL’si — güncelleyebilirsiniz */
  href: "https://open.spotify.com/playlist/2dL1hGPf8n8jTZLOX1kUa7?si=_4Gns86dRV2ugG6pC3_CvQ",
};

/** Karşılıklı partner yönlendirmesi — diğer sitedeki PARTNER / KEŞFET bölümünün eşi */
export const partnerSite = {
  eyebrow: "PARTNER",
  title: "Yaşam Alanımızı Keşfedin",
  description:
    "Müziğin bıraktığı yankıyı mekâna taşıyan partnerimiz — sıcak atmosfer, zarif doku ve yaşamın ritmi.",
  ctaLabel: "KEŞFET",
  /** Diğer sitenin adresi — gerekirse güncelleyin */
  href: "https://asilsaworld.ddogukan.dev/",
};

export const aboutProfiles: AboutProfile[] = [
  {
    id: "asi-ildeniz",
    name: "Asi İldeniz",
    href: "/asi-ildeniz",
    image: "/images/artists/asi-ildeniz-portrait-hq.jpg",
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
