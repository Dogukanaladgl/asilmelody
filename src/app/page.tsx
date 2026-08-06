import { Hero } from "@/components/layout/Hero";
import { ArtistPortals } from "@/components/layout/ArtistPortals";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <ArtistPortals />
      <Footer />
    </main>
  );
}
