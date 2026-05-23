import type { Metadata } from "next";
import ServicePageTemplate, { type ServicePageData } from "@/components/ServicePageTemplate";
import { SOCIAL_PROOF } from "@/lib/constants";

const data: ServicePageData = {
    eyebrow: "Chauffage Gard 24h/24",
    breadcrumb: "Réparation chauffage Gard",
    h1: (
        <>
            Réparation <span className="text-accent">chauffage</span> dans le Gard
        </>
    ),
    subtitle:
        "Panne de chaudière, radiateur froid, chauffe-eau HS ? Dépannage chauffage rapide à Nîmes, Alès, Uzès et tout le Gard. Toutes marques, gaz, fioul, PAC.",
    intro:
        "Cassard Sanitaire et Chauffage est votre spécialiste du dépannage chauffage dans le Gard. Nos techniciens interviennent sur toutes les marques (Atlantic, Ariston, Thermor, De Dietrich, Frisquet, ELM Leblanc, Saunier Duval) et toutes les énergies : gaz, fioul, pompe à chaleur, électrique. Diagnostic précis, réparation immédiate quand c'est possible, ou remplacement avec accompagnement aux aides MaPrimeRénov'.",
    processSteps: [
        {
            title: "Diagnostic complet",
            description:
                "Identification de la panne (allumage, circulation, pression, brûleur). Devis transparent.",
        },
        {
            title: "Réparation immédiate",
            description:
                "Pièces courantes en stock dans le véhicule. Remise en service le jour même dans la majorité des cas.",
        },
        {
            title: "Entretien annuel",
            description:
                "Contrat d'entretien chaudière conforme à l'obligation légale. Attestation fournie pour votre assurance.",
        },
        {
            title: "Remplacement & aides",
            description:
                "Conseils sur le remplacement (gaz, PAC, biomasse) et accompagnement MaPrimeRénov', CEE, éco-PTZ.",
        },
    ],
    reasons: [
        {
            title: "Toutes marques",
            description: "Atlantic, Ariston, Frisquet, ELM Leblanc, De Dietrich.",
            icon: "fire",
        },
        {
            title: "Toutes énergies",
            description: "Gaz, fioul, pompe à chaleur, électrique.",
            icon: "tools",
        },
        {
            title: "Pièces en stock",
            description: "Réparation le jour même dans la majorité des cas.",
            icon: "wrench",
        },
        {
            title: "Aides à la rénovation",
            description: "MaPrimeRénov', CEE, éco-PTZ : on s'occupe de tout.",
            icon: "shield",
        },
    ],
    faq: [
        {
            q: "Combien coûte une réparation de chaudière dans le Gard ?",
            a: "Le déplacement et le devis sont gratuits. Le tarif dépend de la panne et des pièces. Tout est annoncé avant intervention. L'entretien annuel obligatoire est facturé en forfait.",
        },
        {
            q: "Intervenez-vous en urgence en cas de panne de chauffage l'hiver ?",
            a: "Oui, 24h/24 et 7j/7 dans tout le Gard. Une panne de chauffage en hiver est traitée en priorité, surtout en présence de personnes fragiles ou de jeunes enfants.",
        },
        {
            q: "Faut-il remplacer ma vieille chaudière fioul ?",
            a: "Depuis juillet 2022, l'installation de chaudières fioul neuves est interdite. Le remplacement par une PAC, chaudière gaz ou biomasse est éligible aux aides MaPrimeRénov' et CEE — nous étudions votre dossier gratuitement.",
        },
        {
            q: "Faites-vous l'entretien annuel obligatoire des chaudières ?",
            a: "Oui, l'entretien annuel est obligatoire pour les chaudières gaz, fioul et bois. Nous fournissons l'attestation d'entretien à conserver pour votre assurance.",
        },
    ],
    ctaTitle: "Panne de chauffage dans le Gard ?",
    ctaText: "Intervention rapide, toutes marques, toutes énergies. Devis gratuit.",
    canonicalSlug: "reparation-chauffage-gard",
};

export const metadata: Metadata = {
    title: "Réparation chauffage Gard 24h/24 | Cassard Plombier",
    description: `Dépannage chauffage dans le Gard : chaudière, radiateur, PAC, chauffe-eau. Toutes marques. Aides MaPrimeRénov'. ${SOCIAL_PROOF.totalReviews} avis Google.`,
    alternates: { canonical: "https://cassard-plombier.fr/reparation-chauffage-gard" },
    openGraph: {
        title: "Réparation chauffage Gard — Cassard",
        description: "Dépannage chauffage dans le Gard, toutes marques, 24h/24.",
        url: "https://cassard-plombier.fr/reparation-chauffage-gard",
    },
};

export default function Page() {
    return <ServicePageTemplate data={data} />;
}
