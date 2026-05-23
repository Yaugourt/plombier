import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

type IconName =
  | "drop"
  | "tools"
  | "fire"
  | "bath"
  | "wrench"
  | "clock";

type Service = {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    icon: "drop",
    title: "Recherche & réparation de fuites",
    description:
      "Détection précise sans casse et réparation durable, du joint qui goutte à la fuite encastrée.",
    bullets: [
      "Détection acoustique et caméra thermique",
      "Réparation tuyauterie cuivre, PER, multicouche",
      "Recherche de fuite sous dalle ou en mur",
    ],
    image: "/Travaux/IMG_20251208_171110.jpg",
    alt: "Recherche et réparation de fuite d'eau",
  },
  {
    icon: "tools",
    title: "Débouchage canalisation",
    description:
      "Évier, WC, douche ou colonne d'évacuation : on rétablit le débit rapidement, sans abîmer vos installations.",
    bullets: [
      "Furet électrique et hydrocurage",
      "Inspection caméra des canalisations",
      "Débouchage WC, lavabo, baignoire",
    ],
    image: "/Travaux/IMG_20251208_171117.jpg",
    alt: "Débouchage de canalisation",
  },
  {
    icon: "fire",
    title: "Installation chauffage / chaudière",
    description:
      "Installation, remplacement et entretien de chaudières gaz, fioul ou pompes à chaleur, avec conseils sur les aides.",
    bullets: [
      "Chaudières gaz à condensation",
      "Pompes à chaleur air/eau",
      "Entretien annuel obligatoire",
    ],
    image: "/Travaux/IMG_20251208_171122.jpg",
    alt: "Installation de chaudière",
  },
  {
    icon: "bath",
    title: "Rénovation salle de bain",
    description:
      "De la dépose à la mise en service : plomberie, douche à l'italienne, carrelage et finitions par une seule équipe.",
    bullets: [
      "Douche à l'italienne et receveur extra-plat",
      "Pose de baignoire, vasque, WC suspendu",
      "Coordination plomberie, carrelage, électricité",
    ],
    image: "/Travaux/IMG_20251208_171128.jpg",
    alt: "Rénovation de salle de bain",
  },
  {
    icon: "wrench",
    title: "Sanitaire et robinetterie",
    description:
      "Pose et remplacement de tous équipements sanitaires, mitigeurs thermostatiques et accessoires de marque.",
    bullets: [
      "Mitigeurs et mélangeurs",
      "WC suspendus et bâtis-supports",
      "Lavabos, vasques et éviers",
    ],
    image: "/Travaux/IMG_20251208_171134.jpg",
    alt: "Pose de sanitaire et robinetterie",
  },
  {
    icon: "clock",
    title: "Dépannage chauffe-eau",
    description:
      "Plus d'eau chaude ? On diagnostique et on répare cumulus électriques, ballons gaz et thermodynamiques.",
    bullets: [
      "Remplacement de résistance et thermostat",
      "Détartrage et entretien complet",
      "Installation de chauffe-eau neuf",
    ],
    image: "/Travaux/IMG_20251208_171140.jpg",
    alt: "Dépannage de chauffe-eau",
  },
];

export default function ServicesSection() {
  return (
    <Section id="services" spacing="default" className="bg-slate-50">
      <SectionHeader
        eyebrow="Nos services"
        title={
          <>
            Une équipe pour <span className="gradient-text">tous vos besoins</span>
          </>
        }
        description="De la fuite d'eau au remplacement complet de chaudière, en passant par la rénovation de salle de bain."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <Card
            key={s.title}
            variant="elevated"
            hover
            padding="none"
            className={`overflow-hidden group reveal stagger-${(i % 3) + 1}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-950/70 to-transparent" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary-700 shadow-soft">
                <Icon name={s.icon} size={24} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-pretty">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-0.5 text-primary-600 flex-shrink-0">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-12 md:mt-16 text-center text-slate-600">
        Une autre demande ?{" "}
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Demandez votre devis gratuit
          <Icon name="arrow-right" size={16} />
        </Link>
      </p>
    </Section>
  );
}
