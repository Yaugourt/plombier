import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";

type Reflex = {
  icon: "drop" | "alert" | "phone";
  title: string;
  description: string;
};

const reflexes: Reflex[] = [
  {
    icon: "drop",
    title: "Coupez l'arrivée d'eau",
    description: "Vanne principale ou compteur.",
  },
  {
    icon: "alert",
    title: "Coupez l'électricité",
    description: "Si l'eau touche prises ou compteur.",
  },
  {
    icon: "phone",
    title: "Appelez-nous",
    description: "On arrive en moins de 30 min.",
  },
];

export default function UrgenceSection() {
  return (
    <Section
      id="urgence"
      spacing="tight"
      className="relative z-20 bg-primary-950 text-white overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />

      <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-5">
          <div className="shrink-0 lg:w-44 xl:w-48 lg:flex lg:flex-col lg:justify-center">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-primary-200">
              Urgence 24/7
            </p>
            <h2 className="text-white text-base sm:text-lg font-bold leading-snug mt-1 text-balance">
              3 réflexes avant qu&apos;on arrive
            </h2>
            <p className="mt-1.5 text-xs text-primary-200/90 leading-snug hidden sm:block">
              Gestes simples pour limiter les dégâts en attendant l&apos;équipe.
            </p>
          </div>

          <ol className="flex-1 grid sm:grid-cols-3 gap-2 sm:gap-2.5 min-w-0 list-none">
            {reflexes.map((r, i) => (
              <li
                key={r.title}
                className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/10 p-3 sm:p-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-accent shrink-0">
                  <Icon name={r.icon} size={17} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {r.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-primary-200 leading-snug mt-0.5">
                    {r.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-base sm:text-lg font-display font-bold text-white/20 shrink-0 tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] sm:text-xs text-primary-300">
        Devis gratuit · Tarif annoncé · Garantie décennale
      </p>
    </Section>
  );
}
