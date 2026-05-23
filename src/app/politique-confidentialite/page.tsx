import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Politique de confidentialité | Cassard Sanitaire et Chauffage" },
  description:
    "Politique de confidentialité et protection des données personnelles — Cassard Sanitaire et Chauffage, plombier Nîmes Gard.",
  alternates: { canonical: "https://cassard-plombier.fr/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section spacing="loose" className="pt-28 md:pt-32">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Politique de confidentialité</h1>
        <p>
          {COMPANY.name} accorde une grande importance à la protection de vos données personnelles.
          La présente politique décrit quelles données nous collectons et comment nous les utilisons.
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          {COMPANY.name}
          <br />
          Téléphone : <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
          <br />
          E-mail : <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>

        <h2>Données collectées</h2>
        <p>Via le formulaire de contact ou un appel, nous pouvons collecter :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse e-mail</li>
          <li>Adresse d&apos;intervention et description de la demande</li>
        </ul>
        <p>
          Des données de navigation anonymisées (pages visitées, type d&apos;appareil) peuvent être
          collectées à des fins statistiques si des outils de mesure d&apos;audience sont activés.
        </p>

        <h2>Finalités</h2>
        <ul>
          <li>Répondre à vos demandes de devis ou d&apos;intervention</li>
          <li>Assurer le suivi commercial et technique de nos prestations</li>
          <li>Améliorer l&apos;expérience utilisateur du site</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Le traitement repose sur l&apos;exécution de mesures précontractuelles (demande de devis),
          l&apos;exécution du contrat de prestation, ou votre consentement le cas échéant.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données liées à une demande sont conservées le temps nécessaire au traitement de la
          demande, puis archivées conformément aux obligations légales applicables aux artisans
          (comptabilité, garanties).
        </p>

        <h2>Destinataires</h2>
        <p>
          Vos données sont destinées exclusivement à {COMPANY.name} et à ses prestataires techniques
          strictement nécessaires (hébergement, envoi d&apos;e-mails transactionnels). Elles ne sont
          ni vendues ni cédées à des tiers à des fins commerciales.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
          de limitation, d&apos;opposition et de portabilité de vos données. Pour exercer ces droits,
          contactez-nous à{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank">
            www.cnil.fr
          </a>
          ).
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie
          publicitaire n&apos;est déposé sans votre consentement préalable.
        </p>

        <p>
          <Link href="/" className="text-primary-700 font-semibold hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </div>
    </Section>
  );
}
