import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Uzès",
    citySlug: "uzes",
    departement: "Gard",
    departementCode: "30",
    nearbyAreas: [
        "Saint-Quentin-la-Poterie",
        "Arpaillargues-et-Aureillac",
        "Montaren-et-Saint-Médiers",
        "Blauzac",
        "Sanilhac-Sagriès",
        "Collias",
        "Vers-Pont-du-Gard",
        "Remoulins",
        "Saint-Siffret",
        "Garrigues-Sainte-Eulalie",
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

export default function PlombierUzesPage() {
    return <CityPageTemplate {...cityData} />;
}
