import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Nîmes",
    citySlug: "nimes",
    departement: "Gard",
    departementCode: "30",
    nearbyAreas: [
        "Marguerittes",
        "Caissargues",
        "Milhaud",
        "Bouillargues",
        "Cabrières",
        "Garons",
        "Rodilhan",
        "Saint-Gervasy",
        "Manduel",
        "Redessan",
        "Bezouce",
        "Lédenon",
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

export default function PlombierNimesPage() {
    return <CityPageTemplate {...cityData} />;
}
