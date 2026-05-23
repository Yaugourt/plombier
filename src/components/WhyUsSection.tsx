import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { SOCIAL_PROOF, CERTIFICATIONS } from "@/lib/constants";

export default function WhyUsSection() {
  return (
    <Section id="pourquoi-nous" spacing="default">
      <SectionHeader
        eyebrow="Pourquoi Cassard"
        title="Le sérieux d'un artisan, la réactivité d'une équipe d'urgence"
        description="Plus de 15 ans d'expérience, des milliers d'interventions, et la satisfaction comme priorité absolue."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
            <Icon name="clock" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">
            Intervention en {SOCIAL_PROOF.interventionTimeMinutes} min
          </h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            Sur Nîmes et l&apos;aire urbaine, 24/7. Pas de file d&apos;attente, pas de standard.
          </p>
        </Card>

        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
            <Icon name="shield" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">Garantie décennale</h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            Vos travaux assurés 10 ans. Assurance responsabilité civile pro.
          </p>
        </Card>

        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
            <Icon name="check-circle" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">Devis gratuit, tarif clair</h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            Sans engagement. Le prix vous est annoncé avant tout début d&apos;intervention.
          </p>
        </Card>

        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
            <Icon name="calendar" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">
            {SOCIAL_PROOF.yearsExperience}+ ans d&apos;expérience
          </h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            À votre service à Nîmes et dans le Gard. Une équipe formée au bâti ancien comme au neuf.
          </p>
        </Card>

        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
            <Icon name="tools" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">Toutes marques, toutes pièces</h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            Atlantic, Ariston, Thermor, Saunier Duval… Stock pièces courantes pour réparer sur place.
          </p>
        </Card>

        <Card variant="elevated" hover className="reveal">
          <div className="w-14 h-14 rounded-2xl bg-accent-warm/10 text-accent-warm flex items-center justify-center mb-4">
            <Icon name="phone" size={28} />
          </div>
          <h3 className="text-slate-900 mb-2">Disponible 24/7</h3>
          <p className="text-slate-600 leading-relaxed text-pretty">
            Nuits, week-ends et jours fériés inclus, sans majoration cachée.
          </p>
        </Card>
      </div>

      <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-5">
          Nos engagements
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-700">
          {CERTIFICATIONS.map((c) => (
            <li key={c.name} className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-primary-600" />
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
