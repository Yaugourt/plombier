import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { SERVICE_AREAS, SOCIAL_PROOF } from "@/lib/constants";
import { ALL_CITIES, CITIES, type City } from "@/lib/cities";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=N%C3%AEmes,France&z=8&output=embed";

const STATS: { value: string; label: string }[] = [
  { value: "4", label: "départements" },
  { value: "150+", label: "communes desservies" },
  { value: "<30 min", label: "sur Nîmes" },
  {
    value: SOCIAL_PROOF.totalReviews.toLocaleString("fr-FR"),
    label: "avis Google",
  },
];

const MAIN_CITIES_ORDER: City[] = [
  CITIES.nimes,
  CITIES.montpellier,
  CITIES.ales,
  CITIES.avignon,
  CITIES.arles,
  CITIES.uzes,
  CITIES.beaucaire,
];

export default function ZoneSection() {
  const citiesByDept = SERVICE_AREAS.map((dept) => ({
    ...dept,
    cities: ALL_CITIES.filter((c) => c.department === dept.name),
  }));

  return (
    <Section id="zone" spacing="default" className="bg-slate-50">
      <SectionHeader
        eyebrow="Zone d'intervention"
        title={
          <>
            On intervient dans{" "}
            <span className="gradient-text">tout le sud-est</span>
          </>
        }
        description="Gard, Hérault, Bouches-du-Rhône, Vaucluse — basés à Nîmes, on rayonne jusqu'à Montpellier, Avignon, Arles et au-delà."
      />

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="relative rounded-2xl overflow-hidden shadow-soft-lg aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Zone d'intervention Cassard Sanitaire et Chauffage"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-soft pointer-events-none">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Icon name="location" size={16} className="text-primary-700" />
              Basés à Nîmes
            </p>
            <p className="text-xs text-slate-600 mt-0.5">
              Intervention 4 départements
            </p>
          </div>
        </div>

        {/* Departments + maillage */}
        <div className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {citiesByDept.map((dept) => {
              const top = dept.cities.slice(0, 4);
              return (
                <Card
                  key={dept.code}
                  variant="elevated"
                  hover
                  padding="default"
                  className="reveal"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex-shrink-0">
                      <Icon name="location" size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900">
                          {dept.name}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-primary-100 text-primary-800">
                          {dept.code}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-0.5">
                        Intervention sous 30-60 min
                      </p>
                    </div>
                  </div>
                  {top.length > 0 && (
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                      {top.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/${c.slug}`}
                            className="text-slate-700 hover:text-primary-700 underline-offset-4 hover:underline"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              );
            })}
          </div>

          <div className="text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-800">
              Villes principales :{" "}
            </span>
            {MAIN_CITIES_ORDER.map((c, i) => (
              <span key={c.slug}>
                <Link
                  href={`/${c.slug}`}
                  className="hover:text-primary-600 underline-offset-4 hover:underline"
                >
                  {c.name}
                </Link>
                {i < MAIN_CITIES_ORDER.length - 1 && (
                  <span className="mx-1.5 text-slate-400">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-6 text-center shadow-soft border border-slate-200/60"
          >
            <p className="font-display text-3xl md:text-4xl font-bold text-primary-700 whitespace-nowrap">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
