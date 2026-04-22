import type { Metadata } from "next";

/**
 * Central site configuration consumed by SEO metadata, JSON-LD schema,
 * the Contact section and the Footer. Single source of truth.
 */
export const siteConfig = {
  name: "ProSecure GmbH",
  shortName: "ProSecure",
  url: "https://prosecure-dresden.de",
  locale: "de_DE",
  description:
    "Premium Sicherheitsdienst in Dresden. Objektschutz, Personenschutz, Veranstaltungsschutz & Alarmaufschaltung — diskret, zuverlässig, seit 2008.",
  keywords: [
    "Sicherheitsdienst Dresden",
    "Objektschutz Dresden",
    "Personenschutz Dresden",
    "Veranstaltungsschutz Dresden",
    "Alarmaufschaltung Dresden",
    "Wachdienst Dresden",
    "Security Dresden",
  ],
  phone: "+49 351 0000000",
  email: "kontakt@prosecure-dresden.de",
  address: {
    streetAddress: "Königstraße 1",
    postalCode: "01097",
    addressLocality: "Dresden",
    addressRegion: "Sachsen",
    addressCountry: "DE",
  },
  geo: { latitude: 51.0615, longitude: 13.7383 },
  openingHours: "Mo-So 00:00-24:00",
  founded: "2008",
  social: {
    linkedin: "https://www.linkedin.com/company/prosecure-dresden",
    xing: "https://www.xing.com/companies/prosecuregmbh",
  },
} as const;

export type SiteConfig = typeof siteConfig;

interface PageMetaInput {
  title?: string;
  description?: string;
  path?: string;
}

/**
 * Build a Next.js `Metadata` object for a given page. Defaults to the
 * homepage when no input is provided. Handles canonical, openGraph,
 * twitter card and robots directives.
 */
export function buildMetadata(page?: PageMetaInput): Metadata {
  const path = page?.path ?? "/";
  const description = page?.description ?? siteConfig.description;
  const fullTitle = page?.title
    ? `${page.title} | ${siteConfig.name}`
    : `${siteConfig.name} — Sicherheitsdienst Dresden`;
  const canonical = path === "/" ? "/" : path;

  return {
    title: {
      default: fullTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: `${siteConfig.url}${canonical === "/" ? "" : canonical}`,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Security Services",
  };
}
