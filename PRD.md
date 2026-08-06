# Product Requirements Document (PRD): Asil Melody

## 1. Proje Vizyonu ve Konsepti
**Konsept:** "Sıcak Müze" (Warm Museum)
Asil Melody, sıradan bir müzik platformu değil; ziyaretçiyi loş, sıcak ve prestijli bir müze ortamına sokan işitsel ve görsel bir sergi alanıdır. Ziyaretçi, müzede sergilenen sanat eserlerini (şarkıları/albümleri) lüks bir galeri edasıyla incelerken, bu eserleri dinlemek için kusursuz bir arayüzle dış platformlara (Spotify, Apple Music, YouTube vb.) yönlendirilir.

## 2. Tasarım Sistemi (Design System)
*   **Aydınlatma ve Atmosfer:** Karanlık ama soğuk olmayan, loş ve davetkar bir ortam. Sayfada odak noktası yaratmak için "spot ışığı" efektleri (radial gradients) kullanılacaktır.
*   **Renk Paleti:**
    *   `museum-dark`: Koyu, sıcak ve loş ana arka plan (Örn: `#1A1817` veya çok koyu acı kahve tonları).
    *   `museum-bone`: Metinler ve aydınlık detaylar için kırık beyaz/kemik rengi (Örn: `#EBE6E0`).
    *   `museum-brown`: Vurgular, interaktif öğeler ve tipografi detayları için sıcak ahşap/kahve tonları.
*   **Tipografi:** Sanat galerisi hissiyatını verecek, premium ve zarif fontlar. Metinler arası geniş boşluklar (tracking-widest) ve minimalist okunabilirlik.
*   **Estetik:** Minimalist, yumuşak geçişli, karmaşadan uzak, premium bir "sanat eseri" hissiyatı.

## 3. Teknoloji Yığını ve Mühendislik (Tech Stack)
*   **Core:** Next.js (App Router), React, TypeScript.
*   **Styling:** Tailwind CSS.
*   **State Management:** Zustand (Performanslı ve temiz mimari yapısı için).
*   **Animasyon ve Etkileşim:**
    *   Framer Motion (Sayfa geçişleri, UI mount/unmount işlemleri ve mikro etkileşimler).
    *   GSAP & ScrollTrigger (Kompleks scroll animasyonları, timeline yönetimi ve parallax efektleri).
    *   Lenis (Kusursuz ve fiziksel bir hissiyat veren "smooth scroll" deneyimi).
    *   Three.js / React Three Fiber (İlerleyen aşamalarda 3D interaktif elementler ve scroll tabanlı derinlik efektleri için mimari hazırlık).

## 4. Temel Özellikler ve Sayfa Mimarisi
### Ana Sayfa (Sergi Alanı)
*   **Hero Section:** Müzenin giriş kapısı. Loş bir arka plan, merkezde spot ışığı ile aydınlatılmış ikonik bir görsel. Minimalist bir karşılama metni ve ziyaretçiyi aşağıya davet eden yumuşak bir animasyon.
*   **Müzik Sergisi (Koleksiyonlar):** Eserlerin lüks bir müze duvarında sergileniyormuş gibi (belki yatay bir scroll veya geniş aralıklı grid yapısıyla) asimetrik olarak sunulduğu alan.
*   **Dış Medya Yönlendirmesi (External Media Redirects):** Proje non-transactional ve non-player bir yapıdadır. Ziyaretçi bir esere tıkladığında şık bir detay penceresi açılır ve eserleri kendi platformlarında dinlemeleri için pürüzsüz dış bağlantılar sunulur.

### Global Bileşenler
*   **Navigasyon (Header):** Ziyaretçiyi yormayan, gizlenebilir veya çok minimalist bir üst menü. "Asilsa World"e (kardeş/partner proje) geri dönüş için özel ve zarif bir dış bağlantı.
*   **Görsel Efektler:** Ziyaretçinin fare imleci (cursor) bir müze feneri gibi çalışarak karanlık bölgeleri aydınlatan etkileşimli bir ışık huzmesi yaratabilir.

## 5. Mimari Kurallar
*   **Mühendislik Derinliği:** Yüzeysel kod yazılmayacak; GSAP, Zustand ve veri akışı gibi yapıların temel mantığı ve mimarisi sağlam bir temele oturtulacaktır.
*   **Performans:** Yüksek kaliteli görseller ve yoğun animasyonlar içerdiği için, rendering stratejilerine, görsel optimizasyonlarına ve Cumulative Layout Shift (CLS) engellemelerine maksimum özen gösterilecektir.