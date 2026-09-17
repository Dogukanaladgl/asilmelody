import type { Metadata } from "next";
import { Hero } from "@/components/layout/Hero";
import { FeaturedMusic } from "@/components/home/FeaturedMusic";
import { ArtistPortals } from "@/components/layout/ArtistPortals";
import { PartnerBridge } from "@/components/home/PartnerBridge";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.slogan}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  return (
    <main
      id="main-content"
      className="relative flex-1 overflow-x-clip bg-ink"
    >
      <Hero />
      <FeaturedMusic />
      <ArtistPortals />
      <PartnerBridge />
    </main>
  );
}
