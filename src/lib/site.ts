import { companyInfo } from "@/lib/data";

const fallbackUrl = "https://asilmelody.com";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/\/$/, "")}`;

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) return `https://${preview.replace(/\/$/, "")}`;

  return fallbackUrl;
}

export const siteConfig = {
  name: "Asil's a Melody",
  shortName: "AsilMelody",
  slogan: companyInfo.slogan,
  description:
    "Asi İldeniz & Asi Nildeniz. Asil's a Melody resmi müzik sitesi — diskografi, sanatçılar, klipler ve iletişim.",
  url: resolveSiteUrl(),
  locale: "tr_TR",
  language: "tr",
  email: companyInfo.email,
  phone: companyInfo.phone,
  phoneE164: companyInfo.whatsapp.replace(/\s/g, ""),
  address: companyInfo.address,
  ogImage: "/images/exhibits/asil-azmaz-bal-kokmaz.webp",
  logo: "/images/logo/logo.webp",
  sameAs: [
    "https://www.instagram.com/asilmelody/",
    "https://www.youtube.com/@Asilmelody",
    "https://www.tiktok.com/@asilmelody",
    "https://x.com/asilmelody",
    "https://www.facebook.com/people/Asil-Melody/61574901124501/",
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}
