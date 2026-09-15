import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ViewPathProvider } from "@/components/layout/ViewPathProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asil's a Melody — Evrenin Asil Sesi",
  description:
    "Asi İldeniz & Asi Nildeniz. Asil's a Melody resmi müzik sitesi — diskografi, sanatçılar ve iletişim.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${playfair.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-ink font-display text-cream">
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
