import type { Metadata } from "next";
import type { City } from "./cities";
import { SOCIAL_PROOF } from "./constants";

export const OG_IMAGE = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: "Cassard Sanitaire et Chauffage — Plombier urgence Nîmes Gard",
} as const;

export function cityMetadata(city: City): Metadata {
  return {
    title: { absolute: `Plombier ${city.name} — Urgence 24h/24 | Cassard` },
    description: `Plombier d'urgence à ${city.name} (${city.postalCodes[0]}). Intervention en ${city.interventionTime}. Fuites, débouchage, chauffage. ${SOCIAL_PROOF.totalReviews} avis Google, note ${SOCIAL_PROOF.rating}/5.`,
    alternates: { canonical: `https://cassard-plombier.fr/${city.slug}` },
    openGraph: {
      title: `Plombier ${city.name} 24h/24 — Cassard`,
      description: `Plombier d'urgence à ${city.name}, intervention en ${city.interventionTime}.`,
      url: `https://cassard-plombier.fr/${city.slug}`,
      images: [OG_IMAGE],
    },
  };
}

export function serviceMetadata(
  title: string,
  description: string,
  slug: string,
  ogTitle: string,
  ogDescription: string
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://cassard-plombier.fr/${slug}` },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://cassard-plombier.fr/${slug}`,
      images: [OG_IMAGE],
    },
  };
}
