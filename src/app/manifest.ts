import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0908",
    theme_color: "#0a0908",
    lang: "tr",
    icons: [
      {
        src: siteConfig.logo,
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
