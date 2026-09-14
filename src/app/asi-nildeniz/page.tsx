"use client";

import { ArtistProfile } from "@/components/layout/ArtistProfile";
import { getArtistById, toPlatformList } from "@/lib/data";

export default function AsiNildenizPage() {
  const artist = getArtistById("asi-nildeniz");

  if (!artist) return null;

  return (
    <main className="min-h-screen bg-museum-dark">
      <ArtistProfile
        name={artist.name}
        quote={artist.quote}
        imageUrl={artist.profileImage}
        platforms={toPlatformList(artist.platforms)}
        imagePosition="right"
      />
    </main>
  );
}
