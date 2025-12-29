import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Arles",
    citySlug: "arles",
    departement: "Bouches-du-Rhône",
    departementCode: "13",
    nearbyAreas: [
        "Saint-Martin-de-Crau",
        "Fontvieille",
        "Maussane-les-Alpilles",
        "Les Baux-de-Provence",
        "Mouriès",
        "Saint-Rémy-de-Provence",
        "Tarascon",
        "Saintes-Maries-de-la-Mer",
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

export default function PlombierArlesPage() {
    return <CityPageTemplate {...cityData} />;
}
