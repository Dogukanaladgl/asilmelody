"use client";

import { ArtistProfile } from "@/components/layout/ArtistProfile";
import { getArtistById, toPlatformList } from "@/lib/data";

export default function AsiNildenizPage() {
  const artist = getArtistById("asi-nildeniz");

  if (!artist) return null;

  return (
    <main id="main-content" className="min-h-screen bg-ink">
      <ArtistProfile
        artistId="asi-nildeniz"
        name={artist.name}
        imageUrl={artist.profileImage}
        platforms={toPlatformList(artist.platforms)}
        imagePosition="right"
      />
    </main>
  );
}
