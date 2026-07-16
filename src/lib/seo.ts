import type { Metadata } from "next";

/**
 * Central site configuration consumed by SEO metadata, JSON-LD schema,
 * the Contact section and the Footer. Single source of truth.
 */
export const siteConfig = {
  name: "ProSecure",
  legalName: "ProSecure Inh. Niklas Gärtner",
  shortName: "ProSecure",
  url: "https://prosecuresecurity.de",
  locale: "de_DE",
  description:
    "Professioneller Sicherheitsdienst in Dresden und Sachsen. Objektschutz, Baustellenbewachung, Veranstaltungsschutz & Brandwachen — diskret, zuverlässig, gegründet 2026.",
  keywords: [
    "Sicherheitsdienst Dresden",
    "Security Dresden",
    "Sicherheitsdienst Sachsen",
    "Sicherheitsdienst Bad Gottleuba",
    "Objektschutz Dresden",
    "Baustellenbewachung Dresden",
    "Veranstaltungsschutz Dresden",
    "Brandwache Dresden",
  ],
  phone: "+49 172 9820162",
  email: "info@prosecuresecurity.de",
  address: {
    streetAddress: "Königstraße 1",
    postalCode: "01816",
    addressLocality: "Bad Gottleuba",
    addressRegion: "Sachsen",
    addressCountry: "DE",
  },
  geo: { latitude: 50.8554, longitude: 13.9431 },
  openingHours: "Mo-So 10:00-20:00",
  founded: "2026",
  slogan: "Vertrauen in Sicherheit",
  owner: "Niklas Gärtner",
  taxNumber: "21022204685",
  authority: "Landratsamt Sächsische Schweiz-Osterzgebirge",
  certifications: "IHK-Sachkundeprüfung § 34a",
  teamSize: "17",
  clientCount: "23",
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
