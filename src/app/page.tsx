import { Hero } from "@/components/layout/Hero";
import { ArtistPortals } from "@/components/layout/ArtistPortals";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <ArtistPortals />
    </main>
  );
}
