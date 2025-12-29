import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Alès",
    citySlug: "ales",
    departement: "Gard",
    departementCode: "30",
    nearbyAreas: [
        "Saint-Christol-lez-Alès",
        "Saint-Martin-de-Valgalgues",
        "Saint-Privat-des-Vieux",
        "Bagard",
        "Cendras",
        "Salindres",
        "Saint-Hilaire-de-Brethmas",
        "Anduze",
        "Vézénobres",
        "Lézan",
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

export default function PlombierAlesPage() {
    return <CityPageTemplate {...cityData} />;
}
