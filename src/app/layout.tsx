import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ViewPathProvider } from "@/components/layout/ViewPathProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Asil's a Melody",
    "AsilMelody",
    "Asi İldeniz",
    "Asi Nildeniz",
    "Türkçe rap",
    "elektronik müzik",
    "diskografi",
    "müzik",
  ],
  category: "music",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — kapak görseli`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/webp" }],
    apple: [{ url: siteConfig.logo }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0908",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${playfair.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-ink font-display text-cream">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:tracking-[0.12em] focus:text-ink focus:uppercase"
        >
          İçeriğe geç
        </a>
        <SmoothScrolling>
          <Providers>
            <ViewPathProvider>
              <Header />
              <div className="flex flex-1 flex-col">{children}</div>
              <Footer />
            </ViewPathProvider>
          </Providers>
        </SmoothScrolling>
      </body>
    </html>
  );
}
