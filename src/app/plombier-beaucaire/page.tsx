import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Beaucaire",
    citySlug: "beaucaire",
    departement: "Gard",
    departementCode: "30",
    nearbyAreas: [
        "Tarascon",
        "Saint-Gilles",
        "Bellegarde",
        "Fourques",
        "Jonquières-Saint-Vincent",
        "Vallabrègues",
        "Comps",
        "Montfrin",
        "Aramon",
        "Théziers",
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

export default function PlombierBeaucairePage() {
    return <CityPageTemplate {...cityData} />;
}
