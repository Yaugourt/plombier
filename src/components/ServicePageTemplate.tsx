import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { COMPANY, CONTACT, SOCIAL_PROOF } from "@/lib/constants";
import { CITIES } from "@/lib/cities";

type IconName = React.ComponentProps<typeof Icon>["name"];

export type ServicePageData = {
    eyebrow: string;
    h1: React.ReactNode;
    subtitle: string;
    breadcrumb: string;
    intro: string;
    processSteps: { title: string; description: string }[];
    reasons: { title: string; description: string; icon: IconName }[];
    faq: { q: string; a: string }[];
    testimonialKey?: keyof typeof CITIES;
    ctaTitle: string;
    ctaText: string;
    canonicalSlug: string;
};

type Props = { data: ServicePageData };

export default function ServicePageTemplate({ data }: Props) {
    const testimonial = CITIES[data.testimonialKey ?? "nimes"].testimonial;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: COMPANY.name,
        url: `${COMPANY.url}/${data.canonicalSlug}`,
        telephone: `+33${CONTACT.phoneRaw.slice(1)}`,
        priceRange: "€€",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: SOCIAL_PROOF.rating,
            reviewCount: SOCIAL_PROOF.totalReviews,
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
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

            {/* Hero */}
            <section className="relative bg-gradient-hero text-white pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-[0.08]" aria-hidden="true" />
                <div className="absolute inset-0 bg-grain opacity-[0.04]" aria-hidden="true" />
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-warm/20 rounded-full blur-3xl" aria-hidden="true" />
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
                            <li className="text-white font-medium">{data.breadcrumb}</li>
                        </ol>
                    </nav>

                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-accent-warm/20 text-white border border-accent-warm/30">
                        <Icon name="alert" size={14} />
                        {data.eyebrow}
                    </div>

                    <h1 className="font-display font-bold tracking-tight text-balance leading-[1.05] text-[clamp(2.25rem,1.2rem+4vw,4rem)] max-w-4xl">
                        {data.h1}
                    </h1>

                    <p className="mt-6 text-pretty text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed">
                        {data.subtitle}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button
                            as="a"
                            href={CONTACT.phoneTel}
                            variant="urgence"
                            size="lg"
                            iconLeft={<Icon name="phone" size={20} />}
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

            {/* Le service */}
            <Section spacing="default" className="bg-white" containerSize="narrow">
                <p className="text-lg text-slate-700 leading-relaxed text-pretty">{data.intro}</p>

                <h2 className="mt-14 font-display font-bold tracking-tight text-[clamp(1.75rem,0.8rem+3vw,2.5rem)] text-slate-900 text-center">
                    Notre processus en {data.processSteps.length} étapes
                </h2>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {data.processSteps.map((step, idx) => (
                        <Card key={step.title} variant="elevated" padding="default" hover>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-600 text-white text-lg font-bold font-display">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg font-display font-bold text-slate-900">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Pourquoi nous */}
            <Section spacing="default" className="bg-slate-50">
                <SectionHeader
                    eyebrow="Pourquoi nous"
                    title="L'expertise Cassard"
                    description={`${SOCIAL_PROOF.yearsExperience} ans d'expérience, ${SOCIAL_PROOF.totalReviews} avis Google et une équipe disponible 24h/24.`}
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.reasons.map((r) => (
                        <Card key={r.title} variant="elevated" hover padding="default">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 mb-4">
                                <Icon name={r.icon} size={22} />
                            </div>
                            <h3 className="text-lg font-display font-bold text-slate-900">
                                {r.title}
                            </h3>
                            <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                                {r.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Témoignage */}
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
                            « {testimonial.text} »
                        </blockquote>
                        <footer className="mt-6 text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">{testimonial.name}</span>{" "}
                            — {testimonial.quartier} • {testimonial.service}
                        </footer>
                    </div>
                </Card>
            </Section>

            {/* FAQ */}
            <Section spacing="default" className="bg-slate-50" containerSize="narrow">
                <SectionHeader eyebrow="FAQ" title="Questions fréquentes" />
                <div className="space-y-4">
                    {data.faq.map((item, idx) => (
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

            {/* CTA final */}
            <Section
                spacing="default"
                className="bg-primary-950 text-white relative overflow-hidden"
                containerSize="narrow"
            >
                <div className="absolute inset-0 bg-grain opacity-[0.04]" aria-hidden="true" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-warm/15 rounded-full blur-3xl"
                    aria-hidden="true"
                />
                <div className="relative text-center">
                    <SectionHeader
                        eyebrow="Urgence 24h/24"
                        invert
                        title={data.ctaTitle}
                        description={data.ctaText}
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
