import { siteConfig } from "@/lib/site";
import { artists } from "@/lib/data";

export function JsonLd() {
  const orgId = `${siteConfig.url}/#organization`;

  const graph = [
    {
      "@type": "MusicGroup",
      "@id": orgId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Modesa Sanayi Sitesi, Fevziçakmak, 10740. Sk. No:1",
        addressLocality: "Karatay",
        addressRegion: "Konya",
        postalCode: "42050",
        addressCountry: "TR",
      },
      sameAs: [...siteConfig.sameAs],
      member: artists.map((artist) => ({
        "@type": "Person",
        name: artist.name,
        url: `${siteConfig.url}/${artist.id}`,
        image: `${siteConfig.url}${artist.profileImage}`,
        description: artist.bio[0],
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "tr-TR",
      publisher: { "@id": orgId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
