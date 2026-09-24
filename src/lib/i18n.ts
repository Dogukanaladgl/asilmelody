export type Language = "tr" | "en" | "ja" | "es" | "ru";

export type LocalizedText = Record<Language, string>;

export const languages: { code: Language; label: string; name: string }[] = [
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "es", label: "ES", name: "Español" },
  { code: "ru", label: "RU", name: "Русский" },
];

export function pickLocalized(
  value: LocalizedText | string,
  language: Language,
): string {
  if (typeof value === "string") return value;
  return value[language] ?? value.tr ?? value.en;
}

const tr = {
  nav: {
    home: "ANA SAYFA",
    about: "HAKKINDA",
    ildeniz: "ASİ İLDENİZ",
    nildeniz: "ASİ NİLDENİZ",
    contact: "İLETİŞİM",
    brandHome: "Asil's a Melody — Ana sayfa",
    mainNav: "Ana menü",
    mobileNav: "Mobil menü",
  },
  common: {
    switchLanguage: "Dili değiştir",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    skipToContent: "İçeriğe geç",
    official: "Resmi",
    openProfile: "Profili Aç",
    watch: "İzle",
    newTab: "yeni sekme",
  },
  hero: {
    slogan: "Evrenin Asil Sesi",
    description:
      "Asi İldeniz & Asi Nildeniz. Yeni nesil Türkçe rap ve elektronik tınılar — tek bir markanın altında.",
    listenCta: "Müziği Dinle",
    artistsCta: "Sanatçılar",
  },
  spotify: {
    badge: "Playlist",
    cta: "Spotify'da Dinle",
    aria: "{title} oynatma listesini Spotify’da aç (yeni sekme)",
  },
  music: {
    eyebrow: "Diskografi",
    title: "Müzik",
    subtitle: "Resmi klipler ve parçalar. Kapaklara tıkla, YouTube’da dinle.",
    featured: "Öne çıkan",
    watchAria: "{title} — {artists}. YouTube’da izle (yeni sekme)",
  },
  artists: {
    eyebrow: "Sanatçılar",
    title: "Sanatçılar",
    subtitle:
      "İki ses, bir marka. Portreye tıkla — resmi hesaplara ve biyografiye geç.",
  },
  partner: {
    eyebrow: "Partner",
    title: "Yaşam Alanımızı Keşfedin",
    description:
      "Müziğin bıraktığı yankıyı mekâna taşıyan partnerimiz — sıcak atmosfer, zarif doku ve yaşamın ritmi.",
    cta: "KEŞFET",
  },
  footer: {
    email: "E-posta",
    phone: "Telefon",
    social: "Sosyal",
    livingSpace: "Yaşam Alanımız",
    livingSpaceLink: "Asil's a World",
    address: "Adres",
    rights: "© 2026 Asil's a Melody",
    tagline: "Evrenin Asil sesi",
    socialNav: "Sosyal medya",
  },
  about: {
    brand: "ASİL'S A MELODY",
    registered: "® Evrenin Asil sesi",
    title: "Müziğin Sessizlikle Buluştuğu Yer",
    paragraphs: [
      "Asil Melody, sadece bir müzik platformu değil; notaların ve sessizliğin arasında yankılanan sanatsal bir serüvendir. Asi İldeniz ve Asi Nildeniz’in ruhundan kopan eserler, burada zamanın ötesinde bir müzede sergilenir.",
      "Her koridor loş bir ışıkla aydınlanır. Her parçanın bir vitrini, her sözün bir yankısı vardır. Ziyaretçi acele etmez; yavaşlar, dinler ve sanatın ağırlığını omuzlarında değil, kalbinde taşır.",
      "Bu mekân, dinlemeyi bir alışverişe değil, bir ayine dönüştürür. Platformlara açılan kapılar yalnızca birer eşiktir; asıl deneyim, eserin kendi sessizliğinde başlar.",
      "Biz, müziği hızla tüketilen bir nesne olmaktan çıkarıp, hatırlanan bir atmosfer haline getirmek için buradayız. Evrenin Asil sesi — sabırla, zarifçe, sonsuza kadar.",
    ],
    sectionTitle: "Hakkımızda",
  },
  contact: {
    eyebrow: "İletişim",
    title: "Bize Ulaşın",
    lead: "Birlikte Daha İyiyiz",
    paragraphs: [
      "AsilMelody, yalnızca eserlerin sergilendiği bir müze değil; ortak çalışma, prodüksiyon, organizasyon ve önerilerin buluştuğu sıcak bir eşiktir. Yeni bir proje fikriniz, iş birliği talebiniz veya meraktan doğan bir sorunuz varsa, sizi dinlemek isteriz.",
      "Sanatçılarla iletişim, konser ve etkinlik organizasyonu, basın ve marka iş birlikleri ya da katalogumuzdaki parçalar hakkında bilgi almak için WhatsApp üzerinden doğrudan yazabilirsiniz.",
      "Mesajınızı acele etmeden okuruz. Her yazışmayı, bir salon kapısını aralamak gibi karşılarız — net, zarif ve samimi bir dönüş için buradayız.",
    ],
    whatsapp: "WhatsApp Üzerinden Ulaşın",
  },
  artist: {
    official: "Resmi Sanatçı",
    bio: "Biyografi",
    listen: "Dinle",
    about: "Hakkında",
    listenFollow: "Dinle & Takip Et",
    selectedEyebrow: "Seçili İşler",
    selectedTitle: "Seçili Parçalar",
    selectedHint: "Kaydırarak keşfet — dokununca veya üzerine gelince durur.",
    watchAria: "{title} — YouTube’da izle (yeni sekme)",
  },
};

type DictionaryShape = {
  nav: {
    home: string;
    about: string;
    ildeniz: string;
    nildeniz: string;
    contact: string;
    brandHome: string;
    mainNav: string;
    mobileNav: string;
  };
  common: {
    switchLanguage: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    official: string;
    openProfile: string;
    watch: string;
    newTab: string;
  };
  hero: {
    slogan: string;
    description: string;
    listenCta: string;
    artistsCta: string;
  };
  spotify: {
    badge: string;
    cta: string;
    aria: string;
  };
  music: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featured: string;
    watchAria: string;
  };
  artists: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  partner: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    email: string;
    phone: string;
    social: string;
    livingSpace: string;
    livingSpaceLink: string;
    address: string;
    rights: string;
    tagline: string;
    socialNav: string;
  };
  about: {
    brand: string;
    registered: string;
    title: string;
    paragraphs: string[];
    sectionTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    whatsapp: string;
  };
  artist: {
    official: string;
    bio: string;
    listen: string;
    about: string;
    listenFollow: string;
    selectedEyebrow: string;
    selectedTitle: string;
    selectedHint: string;
    watchAria: string;
  };
};

const en: DictionaryShape = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    ildeniz: "ASI ILDENIZ",
    nildeniz: "ASI NILDENIZ",
    contact: "CONTACT",
    brandHome: "Asil's a Melody — Home",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
  },
  common: {
    switchLanguage: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    official: "Official",
    openProfile: "Open Profile",
    watch: "Watch",
    newTab: "new tab",
  },
  hero: {
    slogan: "The Noble Voice of the Universe",
    description:
      "Asi İldeniz & Asi Nildeniz. New-wave Turkish rap and electronic tones — under one brand.",
    listenCta: "Listen",
    artistsCta: "Artists",
  },
  spotify: {
    badge: "Playlist",
    cta: "Listen on Spotify",
    aria: "Open {title} playlist on Spotify (new tab)",
  },
  music: {
    eyebrow: "Discography",
    title: "Music",
    subtitle: "Official videos and tracks. Tap a cover to watch on YouTube.",
    featured: "Featured",
    watchAria: "{title} — {artists}. Watch on YouTube (new tab)",
  },
  artists: {
    eyebrow: "Artists",
    title: "Artists",
    subtitle: "Two voices, one brand. Tap a portrait for profiles and bios.",
  },
  partner: {
    eyebrow: "Partner",
    title: "Discover Our Living Spaces",
    description:
      "Our partner carries the echo of music into space — warm atmosphere, refined texture, and the rhythm of life.",
    cta: "EXPLORE",
  },
  footer: {
    email: "Email",
    phone: "Phone",
    social: "Social",
    livingSpace: "Our Living Space",
    livingSpaceLink: "Asil's a World",
    address: "Address",
    rights: "© 2026 Asil's a Melody",
    tagline: "The Noble Voice of the Universe",
    socialNav: "Social media",
  },
  about: {
    brand: "ASIL'S A MELODY",
    registered: "® The Noble Voice of the Universe",
    title: "Where Music Meets Silence",
    paragraphs: [
      "Asil Melody is more than a music platform; it is an artistic journey echoing between notes and silence. Works born from Asi İldeniz and Asi Nildeniz are presented here like exhibits beyond time.",
      "Every corridor is lit with a soft glow. Every track has a vitrine, every lyric an echo. Visitors do not rush; they slow down, listen, and carry the weight of art in the heart — not on the shoulders.",
      "This place turns listening into a ritual, not a purchase. Doors to platforms are only thresholds; the real experience begins in the silence of the work itself.",
      "We are here to transform music from something quickly consumed into an atmosphere that is remembered. The noble voice of the universe — patiently, gracefully, forever.",
    ],
    sectionTitle: "About Us",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in Touch",
    lead: "We Are Better Together",
    paragraphs: [
      "AsilMelody is not only a museum of works; it is a warm threshold where collaboration, production, events and ideas meet. If you have a project, a partnership request, or a curious question — we want to listen.",
      "For artist contact, concerts and events, press and brand collaborations, or catalog inquiries, write to us on WhatsApp.",
      "We read every message without hurry. Each conversation is like opening a salon door — clear, graceful, and sincere.",
    ],
    whatsapp: "Contact via WhatsApp",
  },
  artist: {
    official: "Official Artist",
    bio: "Biography",
    listen: "Listen",
    about: "About",
    listenFollow: "Listen & Follow",
    selectedEyebrow: "Selected Works",
    selectedTitle: "Selected Tracks",
    selectedHint: "Scroll to explore — pauses on hover or touch.",
    watchAria: "{title} — Watch on YouTube (new tab)",
  },
};

const ja: DictionaryShape = {
  nav: {
    home: "ホーム",
    about: "について",
    ildeniz: "ASI ILDENIZ",
    nildeniz: "ASI NILDENIZ",
    contact: "お問い合わせ",
    brandHome: "Asil's a Melody — ホーム",
    mainNav: "メインメニュー",
    mobileNav: "モバイルメニュー",
  },
  common: {
    switchLanguage: "言語を変更",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    skipToContent: "コンテンツへスキップ",
    official: "公式",
    openProfile: "プロフィール",
    watch: "視聴",
    newTab: "新しいタブ",
  },
  hero: {
    slogan: "宇宙の気高い声",
    description:
      "Asi İldeniz & Asi Nildeniz。新世代のトルコ語ラップとエレクトロニック——ひとつのブランドのもとに。",
    listenCta: "音楽を聴く",
    artistsCta: "アーティスト",
  },
  spotify: {
    badge: "Playlist",
    cta: "Spotifyで聴く",
    aria: "{title} のプレイリストを Spotify で開く（新しいタブ）",
  },
  music: {
    eyebrow: "ディスコグラフィ",
    title: "ミュージック",
    subtitle: "公式クリップと楽曲。カバーをタップして YouTube で視聴。",
    featured: "注目",
    watchAria: "{title} — {artists}。YouTube で視聴（新しいタブ）",
  },
  artists: {
    eyebrow: "アーティスト",
    title: "アーティスト",
    subtitle: "二つの声、ひとつのブランド。肖像をタップしてプロフィールへ。",
  },
  partner: {
    eyebrow: "パートナー",
    title: "私たちの生活空間を探検",
    description:
      "音楽の余韻を空間へ届けるパートナー——温かな空気、洗練された質感、暮らしのリズム。",
    cta: "探検する",
  },
  footer: {
    email: "メール",
    phone: "電話",
    social: "ソーシャル",
    livingSpace: "暮らしの空間",
    livingSpaceLink: "Asil's a World",
    address: "住所",
    rights: "© 2026 Asil's a Melody",
    tagline: "宇宙の気高い声",
    socialNav: "ソーシャルメディア",
  },
  about: {
    brand: "ASIL'S A MELODY",
    registered: "® 宇宙の気高い声",
    title: "音楽が沈黙と出会う場所",
    paragraphs: [
      "Asil Melody は単なる音楽プラットフォームではありません。音と沈黙のあいだで響く芸術の旅です。Asi İldeniz と Asi Nildeniz から生まれた作品が、時間を超えた展示のように並びます。",
      "廊下は柔らかな光に包まれ、曲ごとにショーケースがあり、言葉ごとにエコーがあります。訪問者は急がず、ゆっくり聞き、芸術の重みを肩ではなく心で受け止めます。",
      "ここでの聴取は買い物ではなく儀式です。プラットフォームへの扉はただの閾。本当の体験は作品そのものの沈黙から始まります。",
      "私たちは音楽を消費されるものから、記憶される空気へと変えたい。宇宙の気高い声——忍耐強く、優雅に、永遠に。",
    ],
    sectionTitle: "私たちについて",
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "ご連絡ください",
    lead: "一緒ならもっと良くなる",
    paragraphs: [
      "AsilMelody は作品の展示だけでなく、コラボレーション、制作、イベント、アイデアが出会う温かな入口です。プロジェクトや提携、ご質問があればお聞かせください。",
      "アーティスト連絡、コンサート、プレスやブランド提携、カタログに関するお問い合わせは WhatsApp からどうぞ。",
      "メッセージは急がず読みます。一つひとつのやりとりを、サロンの扉を開けるように——明確で、優雅で、誠実に。",
    ],
    whatsapp: "WhatsAppで連絡",
  },
  artist: {
    official: "公式アーティスト",
    bio: "バイオグラフィ",
    listen: "聴く",
    about: "プロフィール",
    listenFollow: "聴く & フォロー",
    selectedEyebrow: "セレクト",
    selectedTitle: "セレクト楽曲",
    selectedHint: "スクロールして探索——ホバーやタッチで一時停止。",
    watchAria: "{title} — YouTube で視聴（新しいタブ）",
  },
};

const es: DictionaryShape = {
  nav: {
    home: "INICIO",
    about: "ACERCA DE",
    ildeniz: "ASI ILDENIZ",
    nildeniz: "ASI NILDENIZ",
    contact: "CONTACTO",
    brandHome: "Asil's a Melody — Inicio",
    mainNav: "Menú principal",
    mobileNav: "Menú móvil",
  },
  common: {
    switchLanguage: "Cambiar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Ir al contenido",
    official: "Oficial",
    openProfile: "Ver perfil",
    watch: "Ver",
    newTab: "nueva pestaña",
  },
  hero: {
    slogan: "La voz noble del universo",
    description:
      "Asi İldeniz & Asi Nildeniz. Rap turco de nueva generación y tonos electrónicos — bajo una sola marca.",
    listenCta: "Escuchar",
    artistsCta: "Artistas",
  },
  spotify: {
    badge: "Playlist",
    cta: "Escuchar en Spotify",
    aria: "Abrir la playlist {title} en Spotify (nueva pestaña)",
  },
  music: {
    eyebrow: "Discografía",
    title: "Música",
    subtitle: "Clips y temas oficiales. Toca una portada para verla en YouTube.",
    featured: "Destacado",
    watchAria: "{title} — {artists}. Ver en YouTube (nueva pestaña)",
  },
  artists: {
    eyebrow: "Artistas",
    title: "Artistas",
    subtitle: "Dos voces, una marca. Toca un retrato para perfiles y biografías.",
  },
  partner: {
    eyebrow: "Partner",
    title: "Descubre nuestros espacios",
    description:
      "Nuestro partner lleva el eco de la música al espacio — atmósfera cálida, textura refinada y el ritmo de la vida.",
    cta: "EXPLORAR",
  },
  footer: {
    email: "Correo",
    phone: "Teléfono",
    social: "Social",
    livingSpace: "Nuestro espacio",
    livingSpaceLink: "Asil's a World",
    address: "Dirección",
    rights: "© 2026 Asil's a Melody",
    tagline: "La voz noble del universo",
    socialNav: "Redes sociales",
  },
  about: {
    brand: "ASIL'S A MELODY",
    registered: "® La voz noble del universo",
    title: "Donde la música encuentra el silencio",
    paragraphs: [
      "Asil Melody no es solo una plataforma musical; es un viaje artístico que resuena entre notas y silencio. Las obras de Asi İldeniz y Asi Nildeniz se presentan aquí como piezas más allá del tiempo.",
      "Cada pasillo se ilumina con una luz suave. Cada tema tiene una vitrina, cada letra un eco. El visitante no corre; se detiene, escucha y lleva el peso del arte en el corazón.",
      "Este lugar convierte la escucha en un rito, no en una compra. Las puertas a las plataformas son solo umbrales; la experiencia real comienza en el silencio de la obra.",
      "Estamos aquí para transformar la música de algo consumido a prisa en una atmósfera que se recuerda. La voz noble del universo — con paciencia, con gracia, para siempre.",
    ],
    sectionTitle: "Sobre nosotros",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    lead: "Juntos somos mejores",
    paragraphs: [
      "AsilMelody no es solo un museo de obras; es un umbral cálido donde se encuentran la colaboración, la producción, los eventos y las ideas. Si tienes un proyecto, una propuesta o una pregunta, queremos escucharte.",
      "Para contacto con artistas, conciertos, prensa y marcas, o consultas del catálogo, escríbenos por WhatsApp.",
      "Leemos cada mensaje sin prisa. Cada conversación es como abrir la puerta de un salón — clara, elegante y sincera.",
    ],
    whatsapp: "Contactar por WhatsApp",
  },
  artist: {
    official: "Artista oficial",
    bio: "Biografía",
    listen: "Escuchar",
    about: "Acerca de",
    listenFollow: "Escucha & sigue",
    selectedEyebrow: "Selección",
    selectedTitle: "Temas seleccionados",
    selectedHint: "Desliza para explorar — se pausa al pasar o tocar.",
    watchAria: "{title} — Ver en YouTube (nueva pestaña)",
  },
};

const ru: DictionaryShape = {
  nav: {
    home: "ГЛАВНАЯ",
    about: "О НАС",
    ildeniz: "ASI ILDENIZ",
    nildeniz: "ASI NILDENIZ",
    contact: "КОНТАКТЫ",
    brandHome: "Asil's a Melody — Главная",
    mainNav: "Главное меню",
    mobileNav: "Мобильное меню",
  },
  common: {
    switchLanguage: "Сменить язык",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    skipToContent: "К содержанию",
    official: "Официально",
    openProfile: "Открыть профиль",
    watch: "Смотреть",
    newTab: "новая вкладка",
  },
  hero: {
    slogan: "Благородный голос вселенной",
    description:
      "Asi İldeniz & Asi Nildeniz. Турецкий рэп нового поколения и электроника — под одним брендом.",
    listenCta: "Слушать",
    artistsCta: "Артисты",
  },
  spotify: {
    badge: "Playlist",
    cta: "Слушать в Spotify",
    aria: "Открыть плейлист {title} в Spotify (новая вкладка)",
  },
  music: {
    eyebrow: "Дискография",
    title: "Музыка",
    subtitle: "Официальные клипы и треки. Нажмите на обложку — смотрите на YouTube.",
    featured: "Избранное",
    watchAria: "{title} — {artists}. Смотреть на YouTube (новая вкладка)",
  },
  artists: {
    eyebrow: "Артисты",
    title: "Артисты",
    subtitle: "Два голоса, один бренд. Нажмите на портрет — профили и биографии.",
  },
  partner: {
    eyebrow: "Партнёр",
    title: "Откройте наши пространства",
    description:
      "Партнёр переносит эхо музыки в пространство — тёплая атмосфера, изысканная фактура и ритм жизни.",
    cta: "ОТКРЫТЬ",
  },
  footer: {
    email: "Почта",
    phone: "Телефон",
    social: "Соцсети",
    livingSpace: "Наше пространство",
    livingSpaceLink: "Asil's a World",
    address: "Адрес",
    rights: "© 2026 Asil's a Melody",
    tagline: "Благородный голос вселенной",
    socialNav: "Социальные сети",
  },
  about: {
    brand: "ASIL'S A MELODY",
    registered: "® Благородный голос вселенной",
    title: "Где музыка встречает тишину",
    paragraphs: [
      "Asil Melody — не просто музыкальная платформа, а художественное путешествие между нотами и тишиной. Работы Asi İldeniz и Asi Nildeniz представлены здесь как экспонаты вне времени.",
      "Каждый коридор освещён мягким светом. У каждого трека — витрина, у каждого слова — эхо. Гость не спешит; он замедляется, слушает и несёт вес искусства в сердце.",
      "Здесь слушание становится ритуалом, а не покупкой. Двери к платформам — лишь порог; настоящий опыт начинается в тишине самой работы.",
      "Мы здесь, чтобы превратить музыку из быстро потребляемого объекта в атмосферу, которую помнят. Благородный голос вселенной — терпеливо, изящно, навсегда.",
    ],
    sectionTitle: "О нас",
  },
  contact: {
    eyebrow: "Контакты",
    title: "Свяжитесь с нами",
    lead: "Вместе мы лучше",
    paragraphs: [
      "AsilMelody — не только музей произведений, но и тёплый порог, где встречаются сотрудничество, продакшн, события и идеи. Если у вас есть проект, предложение или вопрос — мы хотим услышать вас.",
      "По вопросам артистов, концертов, прессы и брендов, а также каталога пишите в WhatsApp.",
      "Мы читаем каждое сообщение без спешки. Каждый разговор — как открытие двери салона: ясно, изящно и искренне.",
    ],
    whatsapp: "Написать в WhatsApp",
  },
  artist: {
    official: "Официальный артист",
    bio: "Биография",
    listen: "Слушать",
    about: "Об артисте",
    listenFollow: "Слушать & подписаться",
    selectedEyebrow: "Избранное",
    selectedTitle: "Избранные треки",
    selectedHint: "Листайте, чтобы открыть — пауза при наведении или касании.",
    watchAria: "{title} — Смотреть на YouTube (новая вкладка)",
  },
};

export const dictionary: Record<Language, DictionaryShape> = {
  tr,
  en,
  ja,
  es,
  ru,
};

export type Dictionary = DictionaryShape;

export function formatMessage(
  template: string,
  vars: Record<string, string>,
): string {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}
