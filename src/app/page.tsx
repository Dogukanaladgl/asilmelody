import { Hero } from "@/components/layout/Hero";
import { FeaturedMusic } from "@/components/home/FeaturedMusic";
import { ArtistPortals } from "@/components/layout/ArtistPortals";
import { PartnerBridge } from "@/components/home/PartnerBridge";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-ink">
      <Hero />
      <FeaturedMusic />
      <ArtistPortals />
      <PartnerBridge />
    </main>
  );
}
