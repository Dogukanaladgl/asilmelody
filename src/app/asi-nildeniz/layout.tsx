import type { Metadata } from "next";
import { getArtistById } from "@/lib/data";

const artist = getArtistById("asi-nildeniz");

export const metadata: Metadata = {
  title: artist?.name ?? "Asi Nildeniz",
  description:
    artist?.bio[0] ??
    "Asi Nildeniz — Asil's a Melody sanatçısı. Biyografi, platformlar ve seçili parçalar.",
  alternates: { canonical: "/asi-nildeniz" },
  openGraph: {
    title: `${artist?.name ?? "Asi Nildeniz"} | Asil's a Melody`,
    description: artist?.quote
      ? `“${artist.quote}”`
      : "Asi Nildeniz resmi sanatçı sayfası.",
    url: "/asi-nildeniz",
    images: artist?.profileImage
      ? [{ url: artist.profileImage, alt: artist.name }]
      : undefined,
  },
};

export default function AsiNildenizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
