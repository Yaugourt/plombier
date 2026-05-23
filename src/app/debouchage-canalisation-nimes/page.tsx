import type { Metadata } from "next";
import ServicePageTemplate, { type ServicePageData } from "@/components/ServicePageTemplate";
import { SOCIAL_PROOF } from "@/lib/constants";

const data: ServicePageData = {
    eyebrow: "Débouchage Nîmes 24h/24",
    breadcrumb: "Débouchage canalisation Nîmes",
    h1: (
        <>
            Débouchage <span className="text-accent">canalisation</span> à Nîmes
        </>
    ),
    subtitle:
        "Évier bouché, WC qui déborde, mauvaises odeurs ? Intervention rapide à Nîmes en 20 à 30 minutes, matériel professionnel, débouchage garanti.",
    intro:
        "Une canalisation bouchée à Nîmes ? Cassard Sanitaire et Chauffage intervient avec du matériel professionnel : furet électrique, hydrocureur haute pression et caméra d'inspection. Que ce soit une simple obstruction d'évier ou un bouchon profond dans les eaux usées, nous résolvons le problème le jour même, dans tous les quartiers (centre historique, Hoche-Université, Pissevin, Costières).",
    processSteps: [
        {
            title: "Diagnostic sur place",
            description:
                "Identification du type de bouchon, localisation et estimation. Devis transparent avant toute intervention.",
        },
        {
            title: "Débouchage adapté",
            description:
                "Furet manuel ou électrique pour les obstructions classiques. Hydrocurage haute pression pour les cas complexes.",
        },
        {
            title: "Inspection caméra",
            description:
                "Vérification de l'état des canalisations après débouchage. Détection d'éventuelles fissures ou racines.",
        },
        {
            title: "Conseils & prévention",
            description:
                "Recommandations d'entretien pour éviter le retour des bouchons. Garantie sur le débouchage.",
        },
    ],
    reasons: [
        {
            title: "Intervention en 20-30 min",
            description: "Couverture rapide de tous les quartiers de Nîmes.",
            icon: "clock",
        },
        {
            title: "Matériel pro",
            description: "Furet électrique, hydrocureur, caméra d'inspection.",
            icon: "wrench",
        },
        {
            title: "Tarif transparent",
            description: "Devis annoncé avant intervention, pas de surprise.",
            icon: "check-circle",
        },
        {
            title: "Disponible 24h/24",
            description: "Week-ends et jours fériés inclus.",
            icon: "shield",
        },
    ],
    faq: [
        {
            q: "Combien coûte un débouchage de canalisation à Nîmes ?",
            a: "Le déplacement et le devis sont gratuits. Le tarif dépend du type d'obstruction et du matériel nécessaire (furet, hydrocureur). Tout est annoncé avant intervention, sans frais cachés.",
        },
        {
            q: "Faut-il utiliser des produits chimiques avant d'appeler ?",
            a: "Nous le déconseillons : les produits déboucheurs chimiques abîment les canalisations (surtout les anciennes en plomb du centre historique de Nîmes) et compliquent notre intervention. Préférez un appel direct.",
        },
        {
            q: "Intervenez-vous dans les copropriétés à Nîmes ?",
            a: "Oui, nous travaillons régulièrement avec les copropriétés et syndics nîmois. Nous fournissons les rapports d'intervention nécessaires à la facturation collective si besoin.",
        },
        {
            q: "Que faire si plusieurs canalisations sont bouchées en même temps ?",
            a: "C'est souvent le signe d'un bouchon profond dans la colonne principale ou d'un problème de tout-à-l'égout. Une inspection caméra est alors nécessaire — nous l'incluons dans nos interventions.",
        },
    ],
    testimonialKey: "nimes",
    ctaTitle: "Canalisation bouchée à Nîmes ?",
    ctaText: "Intervention en 20 à 30 minutes, matériel professionnel, débouchage garanti.",
    canonicalSlug: "debouchage-canalisation-nimes",
};

export const metadata: Metadata = {
    title: "Débouchage canalisation Nîmes 24h/24 | Cassard Plombier",
    description: `Débouchage de canalisation à Nîmes en 20 à 30 minutes. Furet, hydrocurage, caméra. ${SOCIAL_PROOF.totalReviews} avis Google. Devis gratuit.`,
    alternates: { canonical: "https://cassard-plombier.fr/debouchage-canalisation-nimes" },
    openGraph: {
        title: "Débouchage canalisation Nîmes — Cassard",
        description: "Canalisation bouchée à Nîmes ? Intervention en 20 à 30 minutes, 24h/24.",
        url: "https://cassard-plombier.fr/debouchage-canalisation-nimes",
    },
};

export default function Page() {
    return <ServicePageTemplate data={data} />;
}
