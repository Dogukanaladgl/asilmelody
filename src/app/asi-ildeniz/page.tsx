"use client";

import { ArtistProfile } from "@/components/layout/ArtistProfile";
import { getArtistById, toPlatformList } from "@/lib/data";

export default function AsiIldenizPage() {
  const artist = getArtistById("asi-ildeniz");

  if (!artist) return null;

  return (
    <main className="min-h-screen bg-museum-dark">
      <ArtistProfile
        name={artist.name}
        quote={artist.quote}
        imageUrl={artist.profileImage}
        platforms={toPlatformList(artist.platforms)}
      />
    </main>
  );
}
