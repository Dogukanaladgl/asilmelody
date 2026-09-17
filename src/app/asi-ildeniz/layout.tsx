import type { Metadata } from "next";
import { getArtistById } from "@/lib/data";

const artist = getArtistById("asi-ildeniz");

export const metadata: Metadata = {
  title: artist?.name ?? "Asi İldeniz",
  description:
    artist?.bio[0] ??
    "Asi İldeniz — Asil's a Melody sanatçısı. Biyografi, platformlar ve seçili parçalar.",
  alternates: { canonical: "/asi-ildeniz" },
  openGraph: {
    title: `${artist?.name ?? "Asi İldeniz"} | Asil's a Melody`,
    description: artist?.quote
      ? `“${artist.quote}”`
      : "Asi İldeniz resmi sanatçı sayfası.",
    url: "/asi-ildeniz",
    images: artist?.profileImage
      ? [{ url: artist.profileImage, alt: artist.name }]
      : undefined,
  },
};

export default function AsiIldenizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
