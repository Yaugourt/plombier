import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CityPageProps {
    cityName: string;
    citySlug: string;
    departement: string;
    departementCode: string;
    population?: string;
    nearbyAreas: string[];
    specificServices?: string[];
}

export function generateCityMetadata(props: CityPageProps): Metadata {
    const { cityName, departement, departementCode } = props;

    return {
        title: `Urgence Plombier ${cityName} (${departementCode}) | Intervention 24h/24`,
        description: `Urgence plombier ${cityName} - Intervention rapide 24h/24, 7j/7. Cassard Sanitaire et Chauffage, votre plombier d'urgence à ${cityName} et dans le ${departement}. Appelez le 06 19 24 25 56.`,
        keywords: [
            `urgence plombier ${cityName}`,
            `plombier ${cityName}`,
            `plombier urgence ${cityName}`,
            `dépannage plomberie ${cityName}`,
            `fuite d'eau ${cityName}`,
            `débouchage ${cityName}`,
            `plombier ${departementCode}`,
            `plombier ${departement}`,
        ],
        alternates: {
            canonical: `https://cassard-plombier.fr/plombier-${props.citySlug}`,
        },
    };
}

export default function CityPageTemplate({
    cityName,
    citySlug,
    departement,
    departementCode,
    nearbyAreas,
    specificServices = ["Fuite d'eau", "Débouchage", "Chauffage", "Sanitaire"],
}: CityPageProps) {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="mb-6" aria-label="Fil d'ariane">
                            <ol className="flex items-center gap-2 text-sm text-primary-200">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Accueil
                                    </Link>
                                </li>
                                <li>/</li>
                                <li className="text-white font-medium">
                                    Plombier {cityName}
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            <span className="text-base font-medium text-white">Disponible 24h/24 - 7j/7</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                            Urgence <span className="text-accent">Plombier {cityName}</span>
                            <br />
                            Intervention rapide 24h/24
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl">
                            Besoin d'un <strong>plombier en urgence à {cityName}</strong> ?
                            Cassard Sanitaire et Chauffage intervient rapidement dans tout le {departement} ({departementCode}).
                            <strong> Plus de 5000 clients satisfaits.</strong>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:0619242556"
                                className="group relative inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-6 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all hover:scale-105 shadow-xl shadow-black/15"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
                                </span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                06 19 24 25 56
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                            >
                                Demander un devis gratuit
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-3">
                            Nos services à {cityName}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Plombier <span className="gradient-text">{cityName}</span> : tous nos services
                        </h2>
                        <p className="text-base text-slate-600">
                            Intervention rapide pour tous vos besoins en plomberie, chauffage et sanitaire à {cityName} et ses environs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specificServices.map((service) => (
                            <div
                                key={service}
                                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{service}</h3>
                                <p className="text-slate-600 text-sm">
                                    {service} à {cityName} ? Intervention rapide 24h/24 par nos plombiers qualifiés.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-3">
                                Pourquoi nous choisir
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                Votre plombier de confiance à <span className="gradient-text">{cityName}</span>
                            </h2>
                            <p className="text-base text-slate-600 mb-8">
                                Cassard Sanitaire et Chauffage est votre partenaire de confiance pour tous vos travaux de plomberie à {cityName}.
                                Avec plus de 5000 clients satisfaits, nous garantissons un service professionnel et rapide.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Intervention en moins de 30 minutes à " + cityName,
                                    "Disponible 24h/24, 7j/7 y compris jours fériés",
                                    "Devis gratuit et transparent",
                                    "Techniciens qualifiés et expérimentés",
                                    "Garantie sur tous nos travaux",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">
                                Besoin d'un plombier à {cityName} ?
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Appelez-nous maintenant pour une intervention rapide dans le {departement}.
                            </p>
                            <a
                                href="tel:0619242556"
                                className="flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 w-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                06 19 24 25 56
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Areas */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Intervention aussi dans les environs de {cityName}
                        </h2>
                        <p className="text-base text-slate-600">
                            Nous couvrons également les communes voisines pour vos urgences plomberie.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {nearbyAreas.map((area) => (
                            <span
                                key={area}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 shadow-sm hover:shadow-md transition-all"
                            >
                                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-16 md:py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Urgence plombier {cityName} ? Appelez maintenant !
                    </h2>
                    <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
                        Intervention rapide 24h/24 à {cityName} et dans tout le {departement}.
                        Devis gratuit, travaux garantis.
                    </p>
                    <a
                        href="tel:0619242556"
                        className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all hover:scale-105 shadow-xl"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        06 19 24 25 56
                    </a>
                </div>
            </section>
        </>
    );
}
