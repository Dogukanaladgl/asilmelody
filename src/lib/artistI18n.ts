import type { Language } from "@/lib/i18n";

export type ArtistContentId = "asi-ildeniz" | "asi-nildeniz";

type ArtistLocalized = {
  quote: string;
  bio: string[];
  cardBio: string;
};

type ArtistsLocalized = Record<ArtistContentId, ArtistLocalized> & {
  brandCardBio: string;
};

const content: Record<Language, ArtistsLocalized> = {
  tr: {
    "asi-ildeniz": {
      quote: "İçim okyanus içimdekiler hâin..",
      bio: [
        "Asi İldeniz, AsilMelody’nin kurucusu ve Ömer Faruk Urgancı’nın kişisel ile müzikal izdüşümüdür. Kendi yazdığı, kendi bestelediği parçalarla yalnızca hissettiği melodileri evrene sunar; sahneyi bir vitrin değil, bir iç yolculuk olarak kurar.",
        "Yazımında sertlik ile zarafet yan yanadır. Sözler bazen okyanus kadar derin, bazen bir fısıltı kadar yakındır. Prodüksiyonlarında karanlık bir atmosfer, sıcak bir tını ve modern bir nabız bir araya gelir — dinleyiciyi acele ettirmeden, yavaşlatarak çeker.",
        "Asil Azmaz & Bal Kokmaz’tan My Kâhin’e uzanan katalogta Asi İldeniz, Asi Nildeniz ile aynı sahnede yankılanır. Her parça bir kapıdır: platformlara açılır, asıl deneyim ise eserin kendi sessizliğinde başlar.",
        "Bugün Asi İldeniz, bağımsız bir müzik anlayışının peşinde; filtrelemeden, hızla tüketilmeden hatırlanan bir atmosfer bırakmak için üretmeye devam ediyor.",
      ],
      cardBio:
        "AsilMelody’nin kurucusu ve Ömer Faruk Urgancı’nın kişisel & müzikal izdüşümü. Kendi yazıp kendi besteleyen Asi İldeniz, sadece hissettiği melodileri tüm evrene sunuyor.",
    },
    "asi-nildeniz": {
      quote: "Başaracağımı söylüyo My Kâhin..",
      bio: [
        "Asi Nildeniz, Asi İldeniz’in müzikal evrenine eşlik etmek üzere doğmuş bir sestir — hayal mi, gerçek mi olduğu bilinmeyen; dijital sınırların ötesinden gelen fısıltılarla AsilMelody çatısı altında şekillenen bir figür.",
        "Anlatısında kehanet, tövbe, taç ve kıvılcım yan yanadır. Ses rengi bazen bir ayna gibi net, bazen sisli bir gece gibi belirsizdir. Dinleyiciyi tek bir duyguya hapsetmez; parçadan parçaya geçirir.",
        "Yıldırım & Kıvılcım’dan Firavunun Tövbesi’ne, ABECE’den Anlat Sen — Ben Dinlerim’e kadar Asi Nildeniz, Asi İldeniz ile aynı sahnede durur. İkili üretim, AsilMelody’nin imzasını güçlendirir: iki ruh, bir ses.",
        "Asi Nildeniz, hızın değil derinliğin peşindedir. Platformlarda buluşur; asıl kalıcı olan, parçanın bıraktığı yankıdır.",
      ],
      cardBio:
        "Asi İldeniz’in müzikal evrenine eşlik etmek üzere yaratılan, hayal mi yoksa gerçek mi olduğu bilinmeyen Asi Nildeniz; AsilMelody çatısı altında, dijital sınırların ötesinden gelen fısıltılarla evrenin en asil seslerine hayat veriyor.",
    },
    brandCardBio:
      "AsilMelody, Ömer Faruk Urgancı tarafından evrenin en asil seslerini, en saf duygularını ve en filtrelenmemiş anlatılarını bir araya getirmek amacıyla kurulmuş müzik şirketidir.",
  },
  en: {
    "asi-ildeniz": {
      quote: "My inside is an ocean — those within are traitors..",
      bio: [
        "Asi İldeniz is the founder of AsilMelody and the personal and musical reflection of Ömer Faruk Urgancı. With songs he writes and produces himself, he offers only the melodies he feels — treating the stage as an inner journey, not a display.",
        "In his writing, hardness and grace stand side by side. Words can be as deep as an ocean, or as close as a whisper. His productions blend a dark atmosphere, a warm tone, and a modern pulse — drawing the listener in without rushing them.",
        "From Asil Azmaz & Bal Kokmaz to My Kâhin, Asi İldeniz shares the stage with Asi Nildeniz. Every track is a doorway: it opens to platforms, while the real experience begins in the silence of the work itself.",
        "Today Asi İldeniz continues to create with an independent music ethos — leaving an atmosphere that is remembered, not filtered or quickly consumed.",
      ],
      cardBio:
        "Founder of AsilMelody and the personal & musical reflection of Ömer Faruk Urgancı. Writing and composing his own work, Asi İldeniz offers the melodies he feels to the universe.",
    },
    "asi-nildeniz": {
      quote: "My Kâhin says I will succeed..",
      bio: [
        "Asi Nildeniz is a voice born to accompany Asi İldeniz’s musical universe — a figure shaped under AsilMelody with whispers from beyond digital borders, whether dream or reality.",
        "In her narrative, prophecy, repentance, crowns and sparks stand together. Her tone can be clear as a mirror, or uncertain as a misty night. She never traps the listener in one emotion; she moves them from track to track.",
        "From Yıldırım & Kıvılcım to Firavunun Tövbesi, from ABECE to Anlat Sen — Ben Dinlerim, Asi Nildeniz stands on the same stage as Asi İldeniz. Dual creation strengthens AsilMelody’s signature: two souls, one voice.",
        "Asi Nildeniz seeks depth, not speed. She meets you on platforms; what lasts is the echo a track leaves behind.",
      ],
      cardBio:
        "Created to accompany Asi İldeniz’s musical universe — whether dream or reality — Asi Nildeniz brings the universe’s noblest voices to life under AsilMelody, through whispers beyond digital borders.",
    },
    brandCardBio:
      "AsilMelody is a music company founded by Ömer Faruk Urgancı to gather the universe’s noblest voices, purest feelings, and most unfiltered stories.",
  },
  ja: {
    "asi-ildeniz": {
      quote: "内側の中は海——その中にいる者たちは裏切り者..",
      bio: [
        "Asi İldeniz は AsilMelody の創設者であり、Ömer Faruk Urgancı の個人的・音楽的な投影です。自ら書き自ら編曲した楽曲で、感じたメロディだけを宇宙へ届ける。舞台はショーケースではなく、内なる旅としてつくられる。",
        "その言葉には厳しさと優雅さが共存する。歌詞は時に海のように深く、時にささやきのように近い。プロダクションでは暗い空気、温かな音色、現代的な鼓動が重なり——急かさず、ゆっくりと聴き手を引き込む。",
        "Asil Azmaz & Bal Kokmaz から My Kâhin まで、Asi İldeniz は Asi Nildeniz と同じ舞台で響く。どの曲も扉だ。プラットフォームへ開き、本当の体験は作品の沈黙から始まる。",
        "今も Asi İldeniz は独立した音楽観で創り続ける——フィルターされず、消費されず、記憶に残る空気を残すために。",
      ],
      cardBio:
        "AsilMelody の創設者であり Ömer Faruk Urgancı の個人的・音楽的投影。自ら書き自ら作曲する Asi İldeniz は、感じたメロディだけを宇宙へ届ける。",
    },
    "asi-nildeniz": {
      quote: "My Kâhin は私が成功すると言う..",
      bio: [
        "Asi Nildeniz は Asi İldeniz の音楽宇宙に寄り添うために生まれた声——夢か現実か分からない、デジタルの境界を超えたささやきとともに AsilMelody の下で形づくられた存在。",
        "その物語では予言、悔い改め、冠、火花が並ぶ。声色は鏡のように澄むことも、霧の夜のように揺れることもある。ひとつの感情に閉じ込めず、曲から曲へと運ぶ。",
        "Yıldırım & Kıvılcım から Firavunun Tövbesi、ABECE から Anlat Sen — Ben Dinlerim まで、Asi Nildeniz は Asi İldeniz と同じ舞台に立つ。二人の制作が AsilMelody の署名を強める——二つの魂、ひとつの声。",
        "Asi Nildeniz が求めるのは速さではなく深さ。プラットフォームで出会い、本当に残るのは曲が残す残響だ。",
      ],
      cardBio:
        "Asi İldeniz の音楽宇宙に寄り添うために生まれ、夢か現実か分からない Asi Nildeniz。AsilMelody の下で、デジタルの境界を超えたささやきとともに、宇宙で最も気高い声に命を吹き込む。",
    },
    brandCardBio:
      "AsilMelody は Ömer Faruk Urgancı によって、宇宙で最も気高い声、最も純粋な感情、最もフィルターのない物語を集めるために設立された音楽会社です。",
  },
  es: {
    "asi-ildeniz": {
      quote: "Dentro de mí hay un océano — quienes están dentro traicionan..",
      bio: [
        "Asi İldeniz es el fundador de AsilMelody y el reflejo personal y musical de Ömer Faruk Urgancı. Con canciones que escribe y produce él mismo, ofrece solo las melodías que siente — tratando el escenario como un viaje interior, no como una vitrina.",
        "En su escritura conviven la dureza y la gracia. Las palabras pueden ser tan profundas como un océano o tan cercanas como un susurro. Sus producciones unen atmósfera oscura, tono cálido y pulso moderno — atrayendo al oyente sin apresurarlo.",
        "De Asil Azmaz & Bal Kokmaz a My Kâhin, Asi İldeniz comparte escenario con Asi Nildeniz. Cada tema es una puerta: se abre a las plataformas, y la experiencia real comienza en el silencio de la obra.",
        "Hoy Asi İldeniz sigue creando con una visión musical independiente — dejando una atmósfera que se recuerda, no se filtra ni se consume rápido.",
      ],
      cardBio:
        "Fundador de AsilMelody y reflejo personal y musical de Ömer Faruk Urgancı. Escribiendo y componiendo su propia obra, Asi İldeniz ofrece al universo las melodías que siente.",
    },
    "asi-nildeniz": {
      quote: "My Kâhin dice que lo lograré..",
      bio: [
        "Asi Nildeniz es una voz nacida para acompañar el universo musical de Asi İldeniz — una figura formada bajo AsilMelody con susurros más allá de las fronteras digitales, sea sueño o realidad.",
        "En su relato conviven profecía, arrepentimiento, coronas y chispas. Su tono puede ser claro como un espejo o incierto como una noche de niebla. No encierra al oyente en un solo sentimiento; lo lleva de tema en tema.",
        "De Yıldırım & Kıvılcım a Firavunun Tövbesi, de ABECE a Anlat Sen — Ben Dinlerim, Asi Nildeniz comparte escenario con Asi İldeniz. La creación dual refuerza la firma de AsilMelody: dos almas, una voz.",
        "Asi Nildeniz busca profundidad, no velocidad. Se encuentra en las plataformas; lo que permanece es el eco que deja una canción.",
      ],
      cardBio:
        "Creada para acompañar el universo musical de Asi İldeniz — sueño o realidad —, Asi Nildeniz da vida a las voces más nobles del universo bajo AsilMelody, con susurros más allá de lo digital.",
    },
    brandCardBio:
      "AsilMelody es una compañía musical fundada por Ömer Faruk Urgancı para reunir las voces más nobles del universo, los sentimientos más puros y las historias sin filtro.",
  },
  ru: {
    "asi-ildeniz": {
      quote: "Внутри меня океан — те, кто внутри, предатели..",
      bio: [
        "Asi İldeniz — основатель AsilMelody и личное, музыкальное отражение Ömer Faruk Urgancı. Песнями, которые он пишет и продюсирует сам, он отдаёт вселенной только те мелодии, что чувствует — сцена для него не витрина, а внутренний путь.",
        "В его текстах рядом стоят жёсткость и изящество. Слова бывают глубоки, как океан, или близки, как шёпот. В продюсировании сходятся тёмная атмосфера, тёплый тон и современный пульс — без спешки втягивая слушателя.",
        "От Asil Azmaz & Bal Kokmaz до My Kâhin Asi İldeniz звучит на одной сцене с Asi Nildeniz. Каждый трек — дверь: она открывается к платформам, а настоящий опыт начинается в тишине самой работы.",
        "Сегодня Asi İldeniz продолжает творить с независимым взглядом на музыку — оставляя атмосферу, которую помнят, а не фильтруют и не потребляют на бегу.",
      ],
      cardBio:
        "Основатель AsilMelody и личное & музыкальное отражение Ömer Faruk Urgancı. Пиша и сочиняя сам, Asi İldeniz дарит вселенной только те мелодии, что чувствует.",
    },
    "asi-nildeniz": {
      quote: "My Kâhin говорит, что у меня получится..",
      bio: [
        "Asi Nildeniz — голос, рождённый сопровождать музыкальную вселенную Asi İldeniz: фигура под крышей AsilMelody, сотканная из шёпотов за цифровыми границами — сон это или явь, неизвестно.",
        "В её повествовании рядом пророчество, покаяние, короны и искры. Тембр то ясный, как зеркало, то туманный, как ночь. Она не запирает слушателя в одном чувстве — ведёт от трека к треку.",
        "От Yıldırım & Kıvılcım до Firavunun Tövbesi, от ABECE до Anlat Sen — Ben Dinlerim Asi Nildeniz стоит на одной сцене с Asi İldeniz. Парное творчество усиливает подпись AsilMelody: две души, один голос.",
        "Asi Nildeniz ищет глубину, а не скорость. Встреча происходит на платформах; по-настоящему остаётся эхо, которое оставляет трек.",
      ],
      cardBio:
        "Созданная сопровождать вселенную Asi İldeniz — сон или реальность — Asi Nildeniz под крышей AsilMelody оживляет самые благородные голоса вселенной шёпотами за цифровыми границами.",
    },
    brandCardBio:
      "AsilMelody — музыкальная компания, основанная Ömer Faruk Urgancı, чтобы собрать самые благородные голоса вселенной, самые чистые чувства и самые нефильтрованные истории.",
  },
};

export function getArtistLocalized(
  id: ArtistContentId,
  language: Language,
): ArtistLocalized {
  return content[language][id];
}

export function getBrandCardBio(language: Language): string {
  return content[language].brandCardBio;
}
