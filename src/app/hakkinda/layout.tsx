import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkında",
  description:
    "Asil's a Melody hakkında — Asi İldeniz & Asi Nildeniz’in ruhundan kopan eserlerin, müziğin sessizlikle buluştuğu yer.",
  alternates: { canonical: "/hakkinda" },
  openGraph: {
    title: "Hakkında | Asil's a Melody",
    description:
      "Asil Melody: notaların ve sessizliğin arasında yankılanan sanatsal bir serüven.",
    url: "/hakkinda",
  },
};

export default function HakkindaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
