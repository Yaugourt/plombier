import type { Metadata } from "next";
import CityPageTemplate, { generateCityMetadata } from "@/components/CityPageTemplate";

const cityData = {
    cityName: "Avignon",
    citySlug: "avignon",
    departement: "Vaucluse",
    departementCode: "84",
    nearbyAreas: [
        "Le Pontet",
        "Villeneuve-lès-Avignon",
        "Les Angles",
        "Vedène",
        "Montfavet",
        "Sorgues",
        "Entraigues-sur-la-Sorgue",
        "Morières-lès-Avignon",
        "Saint-Saturnin-lès-Avignon",
        "Châteauneuf-de-Gadagne",
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

export default function PlombierAvignonPage() {
    return <CityPageTemplate {...cityData} />;
}
