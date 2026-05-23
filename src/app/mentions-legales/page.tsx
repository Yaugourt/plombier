import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales | Cassard Sanitaire et Chauffage" },
  description: "Mentions légales du site cassard-plombier.fr — Cassard Sanitaire et Chauffage, plombier urgence Nîmes et Gard.",
  alternates: { canonical: "https://cassard-plombier.fr/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <Section spacing="loose" className="pt-28 md:pt-32">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Mentions légales</h1>
        <p>
          Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
          pour la confiance dans l&apos;économie numérique (LCEN).
        </p>

        <h2>Éditeur du site</h2>
        <ul>
          <li>
            <strong>Raison sociale :</strong> {COMPANY.name}
          </li>
          <li>
            <strong>Activité :</strong> Plomberie, sanitaire et chauffage — dépannage et urgence
          </li>
          <li>
            <strong>Zone d&apos;intervention :</strong> Nîmes, Gard et départements limitrophes
          </li>
          <li>
            <strong>Téléphone :</strong>{" "}
            <a href={CONTACT.phoneTel}>{CONTACT.phone}</a>
          </li>
          <li>
            <strong>E-mail :</strong>{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
        </ul>

        <h2>Directeur de la publication</h2>
        <p>{COMPANY.name}</p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logos, structure) est la propriété de{" "}
          {COMPANY.name} ou de ses partenaires. Toute reproduction, même partielle, sans autorisation
          écrite préalable est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          {COMPANY.name} s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site.
          Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou
          conséquences liées à l&apos;utilisation de ces informations.
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
