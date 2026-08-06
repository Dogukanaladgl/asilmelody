import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Asil Melody — Warm Museum",
  description:
    "Loş, sıcak ve prestijli bir müze atmosferinde müzik sergisi. Evrenin Asil Sesi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-museum-dark font-display text-museum-bone">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
