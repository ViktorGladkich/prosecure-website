import { siteConfig } from "@/lib/seo";

/**
 * JSON-LD schema for the homepage. `SecurityBusiness` is a Schema.org
 * subtype of `LocalBusiness` that precisely describes a private security
 * company — perfect for local SEO.
 *
 * Consumer is expected to JSON.stringify the returned object and embed
 * it inside a <script type="application/ld+json"> tag.
 */
export function localBusinessSchema(): Record<string, unknown> {
  const services: ReadonlyArray<{ name: string; description: string }> = [
    {
      name: "Objektschutz",
      description:
        "Stationäre und mobile Bewachung sensibler Objekte mit lückenloser Dokumentation.",
    },
    {
      name: "Veranstaltungsschutz",
      description:
        "Diskreter und zertifizierter Sicherheitsdienst für Events, Galas und Corporate-Formate.",
    },
    {
      name: "Personenschutz",
      description:
        "Diskreter Personenschutz durch zertifizierte Fachkräfte für Executives und Privatpersonen.",
    },
    {
      name: "Alarmaufschaltung",
      description:
        "24/7-Notrufleitstelle mit Interventionsdienst und zertifizierter Alarmverfolgung.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "SecurityBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/og.jpg`,
    logo: `${siteConfig.url}/logo.svg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "€€€",
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHours: siteConfig.openingHours,
    areaServed: [
      { "@type": "City", name: "Dresden" },
      { "@type": "State", name: "Sachsen" },
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.xing],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sicherheitsdienstleistungen",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: {
            "@type": "SecurityBusiness",
            name: siteConfig.name,
          },
          areaServed: {
            "@type": "City",
            name: "Dresden",
          },
        },
      })),
    },
  };
}
