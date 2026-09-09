import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";
import { CITIES } from "@/lib/cities";
import { COMPANY, SOCIAL_PROOF } from "@/lib/constants";

const city = CITIES.nimes;

export const metadata: Metadata = {
    title: `Plombier ${city.name} — Urgence 24h/24 | Cassard`,
    description: `Plombier d'urgence à ${city.name} (${city.postalCodes[0]}). Intervention en ${city.interventionTime}. Fuites, débouchage, chauffage. ${SOCIAL_PROOF.totalReviews} avis Google.`,
    alternates: { canonical: `${COMPANY.url}/${city.slug}` },
    openGraph: {
        title: `Plombier ${city.name} 24h/24 — Cassard`,
        description: `Plombier d'urgence à ${city.name}, intervention en ${city.interventionTime}.`,
        url: `${COMPANY.url}/${city.slug}`,
    },
};

export default function Page() {
    return <CityPageTemplate city={city} />;
}
