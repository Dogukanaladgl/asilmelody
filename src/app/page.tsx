import { Hero } from "@/components/home/Hero";
import { Collection } from "@/components/home/Collection";
import { ArtworkDetail } from "@/components/artwork/ArtworkDetail";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <Collection />
      <ArtworkDetail />
    </main>
  );
}
