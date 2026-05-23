import type { Metadata } from "next";
import ServicePageTemplate, { type ServicePageData } from "@/components/ServicePageTemplate";
import { SOCIAL_PROOF } from "@/lib/constants";

const data: ServicePageData = {
    eyebrow: "Urgence Gard 24h/24",
    breadcrumb: "Urgence fuite d'eau Gard",
    h1: (
        <>
            Urgence <span className="text-accent">fuite d&apos;eau</span> dans le Gard
        </>
    ),
    subtitle:
        "Fuite d'eau, dégât des eaux ou canalisation percée dans le Gard ? Intervention en moins de 30 minutes à Nîmes, Alès, Uzès et toute l'agglomération.",
    intro:
        "Une fuite d'eau non traitée peut causer des dégâts considérables en quelques heures : infiltration des murs, moisissures, facture qui explose. Cassard Sanitaire et Chauffage intervient 24h/24 dans tout le Gard pour localiser et réparer toute fuite, visible ou cachée. Nous utilisons du matériel professionnel (caméra thermique, gaz traceur, électroacoustique) pour détecter sans casse.",
    processSteps: [
        {
            title: "Appel & diagnostic",
            description:
                "Vous appelez, nous vous guidons immédiatement (couper l'arrivée d'eau, contenir la fuite). Estimation de l'intervention au téléphone.",
        },
        {
            title: "Intervention sous 30 min",
            description:
                "Notre plombier arrive avec le matériel adapté. Localisation précise de la fuite avec ou sans casse selon les cas.",
        },
        {
            title: "Réparation immédiate",
            description:
                "Devis transparent annoncé avant travaux. Réparation le jour même dans la majorité des cas.",
        },
        {
            title: "Garantie & assurance",
            description:
                "Travaux couverts par notre garantie décennale. Nous fournissons les justificatifs pour votre assurance habitation.",
        },
    ],
    reasons: [
        {
            title: "Intervention 24h/24",
            description: "Week-ends, jours fériés, nuit. Pas de majoration cachée.",
            icon: "clock",
        },
        {
            title: "Détection sans casse",
            description: "Caméra thermique, gaz traceur, électroacoustique.",
            icon: "drop",
        },
        {
            title: "Garantie décennale",
            description: "Tous nos travaux sont couverts pendant 10 ans.",
            icon: "shield",
        },
        {
            title: `${SOCIAL_PROOF.totalReviews} avis Google`,
            description: `Note de ${SOCIAL_PROOF.rating}/5 sur Google.`,
            icon: "star-fill",
        },
    ],
    faq: [
        {
            q: "Que faire en attendant le plombier en cas de fuite d'eau ?",
            a: "Coupez immédiatement l'arrivée d'eau générale (vanne au compteur), coupez l'électricité si l'eau s'approche d'une prise, et essayez de contenir l'eau avec des serpillières. Photographiez les dégâts pour votre assurance.",
        },
        {
            q: "Combien coûte une recherche de fuite dans le Gard ?",
            a: "Le déplacement et le devis sont gratuits. Le tarif d'une recherche de fuite dépend de la technique utilisée (visuelle, thermique, gaz traceur). Tout est annoncé avant intervention, sans surprise.",
        },
        {
            q: "Intervenez-vous le week-end et les jours fériés ?",
            a: "Oui, 24h/24 et 7j/7 dans tout le Gard, sans majoration cachée. Nuit, week-end, jours fériés : même tarif annoncé en clair.",
        },
        {
            q: "L'assurance prend-elle en charge la recherche de fuite ?",
            a: "Oui, dans la majorité des contrats multirisques habitation. Nous vous fournissons un rapport d'intervention détaillé pour votre déclaration de sinistre.",
        },
    ],
    ctaTitle: "Fuite d'eau en cours dans le Gard ?",
    ctaText: "Coupez l'arrivée d'eau et appelez-nous. Intervention en moins de 30 minutes.",
    canonicalSlug: "urgence-fuite-eau-gard",
};

export const metadata: Metadata = {
    title: "Urgence fuite d'eau Gard 24h/24 | Cassard Plombier",
    description: `Urgence fuite d'eau dans le Gard : intervention en moins de 30 minutes à Nîmes, Alès, Uzès. Détection sans casse, garantie décennale. ${SOCIAL_PROOF.totalReviews} avis Google.`,
    alternates: { canonical: "https://cassard-plombier.fr/urgence-fuite-eau-gard" },
    openGraph: {
        title: "Urgence fuite d'eau Gard 24h/24 — Cassard",
        description: "Fuite d'eau dans le Gard ? Intervention en moins de 30 minutes, 24h/24.",
        url: "https://cassard-plombier.fr/urgence-fuite-eau-gard",
    },
};

export default function Page() {
    return <ServicePageTemplate data={data} />;
}
