import { Hero } from "@/components/layout/Hero";
import { GalleryWalk } from "@/components/layout/GalleryWalk";
import { ArtistPortals } from "@/components/layout/ArtistPortals";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-museum-dark">
      {/* Continuous red carpet through the whole museum walk */}
      <div className="carpet-runner hidden md:block" aria-hidden />

      <Hero />
      <GalleryWalk />
      <ArtistPortals />
      <Footer />
    </main>
  );
}
