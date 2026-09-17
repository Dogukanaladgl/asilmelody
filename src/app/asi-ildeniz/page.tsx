"use client";

import { ArtistProfile } from "@/components/layout/ArtistProfile";
import { getArtistById, toPlatformList } from "@/lib/data";

export default function AsiIldenizPage() {
  const artist = getArtistById("asi-ildeniz");

  if (!artist) return null;

  return (
    <main id="main-content" className="min-h-screen bg-ink">
      <ArtistProfile
        name={artist.name}
        quote={artist.quote}
        bio={artist.bio}
        imageUrl={artist.profileImage}
        platforms={toPlatformList(artist.platforms)}
      />
    </main>
  );
}
