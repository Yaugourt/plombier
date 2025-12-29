import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Montpellier",
    citySlug: "montpellier",
    departement: "Hérault",
    departementCode: "34",
    nearbyAreas: [
        "Castelnau-le-Lez",
        "Lattes",
        "Pérols",
        "Mauguio",
        "Juvignac",
        "Saint-Jean-de-Védas",
        "Grabels",
        "Jacou",
        "Le Crès",
        "Clapiers",
        "Castries",
        "Vendargues",
    ],
    specificServices: [
        "Fuite d'eau",
        "Débouchage canalisation",
        "Réparation chauffage",
        "Installation sanitaire",
        "Chauffe-eau",
        "Pompe à chaleur",
        "Salle de bain",
        "Urgence 24h",
    ],
};

export const metadata: Metadata = generateCityMetadata(cityData);

export default function PlombierMontpellierPage() {
    return <CityPageTemplate {...cityData} />;
}
