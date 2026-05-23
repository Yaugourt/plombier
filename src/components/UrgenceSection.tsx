import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { CONTACT, SOCIAL_PROOF } from "@/lib/constants";

type Reflex = {
  icon: "drop" | "alert" | "phone";
  title: string;
  description: string;
};

const reflexes: Reflex[] = [
  {
    icon: "drop",
    title: "Coupez l'arrivée d'eau",
    description: "Localisez la vanne principale ou le compteur pour stopper la fuite.",
  },
  {
    icon: "alert",
    title: "Coupez l'électricité",
    description: "Si l'eau s'approche de prises ou du compteur, coupez le disjoncteur.",
  },
  {
    icon: "phone",
    title: "Appelez-nous",
    description: "On arrive en moins de 30 min pour stopper le sinistre.",
  },
];

const reassurance = [
  "Devis gratuit",
  "Tarif annoncé",
  "Paiement après intervention",
  "Garantie décennale",
];

export default function UrgenceSection() {
  return (
    <Section
      spacing="default"
      className="bg-primary-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />

      <SectionHeader
        invert
        eyebrow="Urgence 24/7"
        title={
          <>
            Une urgence ? <span className="text-accent">3 réflexes</span> avant qu&apos;on arrive
          </>
        }
        description="Quelques gestes simples, à faire maintenant, pour limiter les dégâts en attendant notre intervention."
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {reflexes.map((r, i) => (
          <Card
            key={r.title}
            variant="glass"
            hover
            className={`reveal stagger-${i + 1}`}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-accent mb-5">
              <Icon name={r.icon} size={26} />
            </div>
            <h3 className="text-white mb-2">{r.title}</h3>
            <p className="text-primary-100 text-pretty leading-relaxed">
              {r.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 md:mt-16 flex flex-col items-center text-center gap-4">
        <Button
          variant="urgence"
          size="xl"
          as="a"
          href={CONTACT.phoneTel}
          iconLeft={<Icon name="phone" size={22} />}
        >
          Appeler maintenant — {CONTACT.phone}
        </Button>
        <div className="inline-flex items-center gap-2 text-sm text-primary-100">
          <Icon name="clock" size={16} />
          <span>
            Intervention en moins de {SOCIAL_PROOF.interventionTimeMinutes} minutes*
          </span>
        </div>
        <p className="text-xs text-primary-300">
          *sur l&apos;aire urbaine de Nîmes
        </p>
      </div>

      <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-200">
          {reassurance.map((label) => (
            <li key={label} className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-accent" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
