import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { ALL_CITIES, type City } from "@/lib/cities";
import { COMPANY, CONTACT, SOCIAL_PROOF } from "@/lib/constants";

type Props = { city: City };

function slugify(input: string): string {
    return input
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .replace(/[‘’']/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function nearbySlug(name: string): string {
    return `plombier-${slugify(name)}`;
}

const CITY_SLUGS = new Set(ALL_CITIES.map((c) => c.slug));

const SERVICES_TEMPLATE: { name: string; icon: React.ComponentProps<typeof Icon>["name"]; describe: (c: City) => string }[] = [
    {
        name: "Recherche de fuite",
        icon: "drop",
        describe: (c) =>
            `Détection de fuite à ${c.name} sans casse : caméra thermique, gaz traceur, électroacoustique. Diagnostic gratuit, intervention en ${c.interventionTime}.`,
    },
    {
        name: "Débouchage canalisation",
        icon: "wrench",
        describe: (c) =>
            `Canalisation bouchée à ${c.name} ? Furet, hydrocurage et caméra d'inspection. Intervention 24h/24 dans tout le ${c.department}.`,
    },
    {
        name: "Chauffage & chaudière",
        icon: "fire",
        describe: (c) =>
            `Panne chaudière, radiateur froid, pompe à chaleur : dépannage chauffage à ${c.name} toutes marques (gaz, fioul, PAC, électrique).`,
    },
    {
        name: "Sanitaire & robinetterie",
        icon: "bath",
        describe: (c) =>
            `Installation et réparation WC, lavabo, douche, mitigeur à ${c.name}. Pièces de qualité, garantie sur la pose.`,
    },
    {
        name: "Rénovation salle de bain",
        icon: "tools",
        describe: (c) =>
            `Rénovation complète de salle de bain à ${c.name} : douche italienne, faïence, plomberie. Devis gratuit sur place.`,
    },
    {
        name: "Chauffe-eau",
        icon: "drop",
        describe: (c) =>
            `Dépannage et remplacement de chauffe-eau à ${c.name} (Atlantic, Ariston, Thermor, De Dietrich). Intervention le jour même.`,
    },
];

const GUARANTEES = [
    "Devis gratuit et transparent",
    "Garantie décennale sur tous les travaux",
    "Tarifs annoncés avant intervention",
    "Disponible 24h/24, 7j/7 et jours fériés",
];

export default function CityPageTemplate({ city }: Props) {
    const otherCities = ALL_CITIES.filter((c) => c.slug !== city.slug);

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: `${COMPANY.name} — ${city.name}`,
        url: `${COMPANY.url}/${city.slug}`,
        telephone: `+33${CONTACT.phoneRaw.slice(1)}`,
        priceRange: "€€",
        areaServed: {
            "@type": "City",
            name: city.name,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            postalCode: city.postalCodes[0],
            addressRegion: city.department,
            addressCountry: "FR",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: SOCIAL_PROOF.rating,
            reviewCount: SOCIAL_PROOF.totalReviews,
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* 1. Hero local */}
            <section className="relative bg-gradient-hero text-white pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-[0.08]" aria-hidden="true" />
                <div className="absolute inset-0 bg-grain opacity-[0.04]" aria-hidden="true" />
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <nav className="mb-6 text-sm text-primary-200" aria-label="Fil d'ariane">
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li aria-hidden="true">
                                <Icon name="chevron-right" size={14} />
                            </li>
                            <li className="text-white font-medium">Plombier {city.name}</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/10 text-accent border border-white/15">
                        <Icon name="location" size={14} />
                        Plombier {city.department} — {city.postalCodes[0]}
                    </div>

                    <h1 className="font-display font-bold tracking-tight text-balance leading-[1.05] text-[clamp(2.25rem,1.2rem+4vw,4rem)] max-w-4xl">
                        Plombier d&apos;urgence à {city.name}{" "}
                        <span className="text-accent">24h/24</span>
                    </h1>

                    <p className="mt-6 text-pretty text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                        {city.population} • Intervention en {city.interventionTime} • Zone {city.department}
                    </p>

                    {/* Trust strip */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-100">
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-0.5 text-accent">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <Icon key={i} name="star-fill" size={16} />
                                ))}
                            </span>
                            <span className="font-semibold text-white">{SOCIAL_PROOF.rating.toFixed(1)}/5</span>
                            <span>({SOCIAL_PROOF.totalReviews} avis Google)</span>
                        </div>
                        <span className="hidden md:inline text-white/30">•</span>
                        <div className="flex items-center gap-2">
                            <Icon name="shield" size={16} className="text-accent" />
                            Garantie décennale
                        </div>
                        <span className="hidden md:inline text-white/30">•</span>
                        <div className="flex items-center gap-2">
                            <Icon name="check-circle" size={16} className="text-accent" />
                            Devis gratuit
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button
                            as="a"
                            href={CONTACT.phoneTel}
                            variant="urgence"
                            size="lg"
                            iconLeft={<Icon name="phone" size={20} />}
                            aria-label={`Appeler le plombier d'urgence à ${city.name}`}
                        >
                            Appeler {CONTACT.phone}
                        </Button>
                        <Button
                            as="link"
                            href="/#contact"
                            variant="outline"
                            size="lg"
                            iconRight={<Icon name="arrow-right" size={18} />}
                        >
                            Devis gratuit
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Plombier à {city.name} - contenu unique */}
            <Section spacing="default" className="bg-white">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                    <div className="lg:col-span-8">
                        <h2 className="font-display font-bold tracking-tight text-balance leading-[1.1] text-[clamp(1.75rem,0.8rem+3vw,2.75rem)] text-slate-900">
                            Votre plombier à {city.name}
                        </h2>
                        <p className="mt-6 text-slate-700 leading-relaxed text-lg max-w-prose">
                            {city.intro}
                        </p>

                        <h3 className="mt-10 text-2xl font-display font-bold text-slate-900">
                            Notre expertise locale
                        </h3>
                        <p className="mt-4 text-slate-700 leading-relaxed text-lg max-w-prose">
                            {city.localContext}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {city.postalCodes.map((cp) => (
                                <span
                                    key={cp}
                                    className="inline-flex items-center gap-1.5 px-3 h-8 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium"
                                >
                                    <Icon name="location" size={12} />
                                    {cp}
                                </span>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <Card variant="elevated" padding="loose" className="lg:sticky lg:top-24">
                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 mb-5">
                                <Icon name="clock" size={28} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900">
                                Intervention rapide à {city.name}
                            </h3>
                            <p className="mt-2 text-slate-600 text-sm">
                                Temps moyen sur place :{" "}
                                <span className="font-semibold text-slate-900">{city.interventionTime}</span>
                            </p>

                            <ul className="mt-6 space-y-3">
                                {GUARANTEES.map((g) => (
                                    <li key={g} className="flex items-start gap-3">
                                        <Icon name="check" size={18} className="text-primary-600 mt-0.5" />
                                        <span className="text-slate-700 text-sm">{g}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-7">
                                <Button
                                    as="a"
                                    href={CONTACT.phoneTel}
                                    variant="urgence"
                                    size="lg"
                                    fullWidth
                                    iconLeft={<Icon name="phone" size={18} />}
                                >
                                    Appeler maintenant
                                </Button>
                            </div>
                        </Card>
                    </aside>
                </div>
            </Section>

            {/* 3. Services locaux */}
            <Section spacing="default" className="bg-slate-50">
                <SectionHeader
                    eyebrow={`Services • ${city.name}`}
                    title={<>Nos services à {city.name}</>}
                    description={`Plomberie, chauffage, sanitaire : tous nos services adaptés aux spécificités de ${city.name} et du ${city.department}.`}
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES_TEMPLATE.map((s) => (
                        <Card key={s.name} variant="elevated" hover padding="default">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 mb-4">
                                <Icon name={s.icon} size={22} />
                            </div>
                            <h3 className="text-lg font-display font-bold text-slate-900">{s.name}</h3>
                            <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                                {s.describe(city)}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 4. Témoignage local */}
            <Section spacing="tight" className="bg-white" containerSize="narrow">
                <Card variant="elevated" padding="loose" className="relative overflow-hidden">
                    <Icon
                        name="quote"
                        size={80}
                        className="absolute -top-2 -right-2 text-accent/20"
                    />
                    <div className="relative">
                        <div className="flex items-center gap-0.5 text-accent">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <Icon key={i} name="star-fill" size={18} />
                            ))}
                        </div>
                        <blockquote className="mt-5 text-xl md:text-2xl text-slate-800 leading-relaxed font-medium text-balance">
                            « {city.testimonial.text} »
                        </blockquote>
                        <footer className="mt-6 text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">
                                {city.testimonial.name}
                            </span>{" "}
                            — {city.testimonial.quartier} • {city.testimonial.service}
                        </footer>
                    </div>
                </Card>
            </Section>

            {/* 5. FAQ locale */}
            <Section spacing="default" className="bg-slate-50" containerSize="narrow">
                <SectionHeader
                    eyebrow="FAQ"
                    title={<>Questions fréquentes — Plombier {city.name}</>}
                />
                <div className="space-y-4">
                    {city.faq.map((item, idx) => (
                        <Card key={idx} padding="default" className="reveal">
                            <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer list-none gap-4 [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {item.q}
                                    </h3>
                                    <Icon
                                        name="plus"
                                        size={20}
                                        className="text-primary-600 transition-transform duration-300 group-open:rotate-45 flex-shrink-0"
                                    />
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
                            </details>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 6. Maillage interne */}
            <Section spacing="tight" className="bg-white" containerSize="narrow">
                <SectionHeader
                    title={<>On intervient aussi près de {city.name}</>}
                    description={`Nos plombiers se déplacent dans toutes les communes autour de ${city.name}.`}
                />
                <div className="flex flex-wrap justify-center gap-2.5">
                    {city.nearby.map((n) => {
                        const targetSlug = nearbySlug(n);
                        const hasPage = CITY_SLUGS.has(targetSlug);
                        const href = hasPage ? `/${targetSlug}` : "/#zones";
                        return (
                            <Link
                                key={n}
                                href={href}
                                className="px-4 h-11 inline-flex items-center gap-1.5 rounded-full border border-slate-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition text-sm text-slate-700"
                            >
                                <Icon name="location" size={14} className="text-primary-500" />
                                {n}
                            </Link>
                        );
                    })}
                </div>

                {otherCities.length > 0 && (
                    <p className="mt-10 text-center text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        <span className="font-semibold text-slate-900">
                            Découvrez nos autres villes :
                        </span>{" "}
                        {otherCities.map((c, i) => (
                            <span key={c.slug}>
                                <Link
                                    href={`/${c.slug}`}
                                    className="text-primary-700 hover:text-primary-900 underline-offset-2 hover:underline"
                                >
                                    Plombier {c.name}
                                </Link>
                                {i < otherCities.length - 1 ? " • " : ""}
                            </span>
                        ))}
                    </p>
                )}
            </Section>

            {/* 7. CTA final urgence */}
            <Section
                spacing="default"
                className="bg-primary-950 text-white relative overflow-hidden"
                containerSize="narrow"
            >
                <div className="absolute inset-0 bg-grain opacity-[0.04]" aria-hidden="true" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
                    aria-hidden="true"
                />
                <div className="relative text-center">
                    <SectionHeader
                        eyebrow="Urgence 24h/24"
                        invert
                        title={<>Une urgence à {city.name} ?</>}
                        description={`Fuite, dégât des eaux, panne chauffage — appelez-nous, intervention en ${city.interventionTime}.`}
                    />
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            as="a"
                            href={CONTACT.phoneTel}
                            variant="urgence"
                            size="xl"
                            iconLeft={<Icon name="phone" size={22} />}
                        >
                            Appeler {CONTACT.phone}
                        </Button>
                        <Button
                            as="link"
                            href="/#contact"
                            variant="outline"
                            size="xl"
                            iconRight={<Icon name="arrow-right" size={20} />}
                        >
                            Demander un devis
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}

