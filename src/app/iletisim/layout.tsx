import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Asil's a Melody ile iletişime geçin — iş birliği, organizasyon ve sorularınız için WhatsApp veya konum bilgisi.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Asil's a Melody",
    description: `${companyInfo.address} — ${companyInfo.phone}`,
    url: "/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
