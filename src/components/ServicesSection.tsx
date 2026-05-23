import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

type IconName = "drop" | "tools" | "fire" | "bath" | "wrench" | "clock";

type Service = {
  icon: IconName;
  label: string;
  hint: string;
  href?: string;
};

const services: Service[] = [
  {
    icon: "drop",
    label: "Fuite d'eau",
    hint: "Urgence 24h/24",
    href: "/urgence-fuite-eau-gard",
  },
  {
    icon: "tools",
    label: "Débouchage",
    hint: "WC, évier, douche",
    href: "/debouchage-canalisation-nimes",
  },
  {
    icon: "fire",
    label: "Chauffage",
    hint: "Chaudière, radiateurs",
    href: "/reparation-chauffage-gard",
  },
  {
    icon: "bath",
    label: "Salle de bain",
    hint: "Rénovation complète",
    href: "#contact",
  },
  {
    icon: "wrench",
    label: "Sanitaire",
    hint: "Pose & remplacement",
    href: "#contact",
  },
  {
    icon: "clock",
    label: "Chauffe-eau",
    hint: "Ballon, cumulus",
    href: "#contact",
  },
];

function ServiceTile({ service }: { service: Service }) {
  const href = service.href ?? "#contact";

  return (
    <Link href={href} className="block h-full group">
      <Card variant="elevated" hover padding="none" className="h-full overflow-hidden">
        <div className="flex items-center gap-2.5 p-3 sm:p-3.5">
          <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
            <Icon name={service.icon} size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-slate-900 text-sm font-semibold leading-tight">
              {service.label}
            </h3>
            <span className="block text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5 truncate">
              {service.hint}
            </span>
          </div>

          <Icon
            name="arrow-right"
            size={15}
            className="text-primary-400 shrink-0 group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </Card>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <Section id="services" spacing="tight" className="bg-slate-50">
      <SectionHeader
        eyebrow="Nos services"
        title={
          <>
            Interventions les plus <span className="gradient-text">demandées</span>
          </>
        }
        description="Fuites, débouchage, chauffage et rénovation — une équipe pour tout gérer."
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
        {services.map((s) => (
          <li key={s.label}>
            <ServiceTile service={s} />
          </li>
        ))}
      </ul>

      <p className="mt-5 text-center text-sm text-slate-600">
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Demander un devis pour un autre besoin
          <Icon name="arrow-right" size={16} />
        </Link>
      </p>
    </Section>
  );
}
