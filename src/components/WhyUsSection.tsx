import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { SOCIAL_PROOF } from "@/lib/constants";

type Pillar = {
  icon: "clock" | "shield" | "check-circle" | "phone";
  title: string;
  subtitle: string;
};

const pillars: Pillar[] = [
  {
    icon: "clock",
    title: `<${SOCIAL_PROOF.interventionTimeMinutes} min sur Nîmes`,
    subtitle: "Équipe d'urgence locale",
  },
  {
    icon: "shield",
    title: "Garantie décennale",
    subtitle: "Travaux assurés 10 ans",
  },
  {
    icon: "check-circle",
    title: "Devis gratuit",
    subtitle: "Tarif annoncé avant",
  },
  {
    icon: "phone",
    title: "24h/24 · 7j/7",
    subtitle: "Joignable maintenant",
  },
];

export default function WhyUsSection() {
  return (
    <Section id="pourquoi-nous" spacing="tight">
      <SectionHeader
        eyebrow="Pourquoi Cassard"
        title="4 raisons de nous appeler"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            variant="elevated"
            padding="none"
            className="h-full"
          >
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <Icon name={pillar.icon} size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-snug">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
