import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Réparation Chauffage Gard (30) | Chaudière & Pompe à Chaleur | Cassard",
    description: "Panne de chauffage ? Installation et réparation chaudière, pompe à chaleur dans le Gard. Plombier chauffagiste certifié RGE à Nîmes, Alès, Uzès. Devis gratuit.",
    keywords: [
        "réparation chauffage Gard",
        "chauffagiste Nîmes",
        "panne chaudière Gard",
        "installation pompe à chaleur 30",
        "entretien chauffage Nîmes",
        "remplacement chaudière Alès",
        "chauffagiste RGE Gard",
        "urgence chauffage",
    ],
    alternates: {
        canonical: "https://cassard-plombier.fr/reparation-chauffage-gard",
    },
};

const chauffageServices = [
    {
        title: "Panne Chaudière",
        description: "Diagnostic et réparation rapide de votre chaudière gaz ou fioul. Toutes marques.",
        icon: "🔥",
    },
    {
        title: "Pompe à Chaleur",
        description: "Installation et dépannage de PAC air/air et air/eau. Économisez sur votre facture.",
        icon: "⚡",
    },
    {
        title: "Chauffe-eau",
        description: "Réparation ou remplacement de chauffe-eau électrique et thermodynamique.",
        icon: "🚿",
    },
    {
        title: "Radiateurs",
        description: "Installation, remplacement et désembouage de circuit de chauffage.",
        icon: "🌡️",
    },
];

const zones = [
    "Nîmes",
    "Alès",
    "Uzès",
    "Beaucaire",
    "Saint-Gilles",
    "Vauvert",
    "Marguerittes",
    "Bagnols-sur-Cèze",
    "Le Grau-du-Roi",
    "Villeneuve-lès-Avignon",
];

export default function ReparationChauffageGardPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-950 via-orange-800 to-orange-700 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="mb-6" aria-label="Fil d'ariane">
                            <ol className="flex items-center gap-2 text-sm text-orange-200">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Accueil
                                    </Link>
                                </li>
                                <li>/</li>
                                <li className="text-white font-medium">
                                    Réparation Chauffage Gard
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                            </span>
                            <span className="text-base font-medium text-white">Chauffagiste Certifié RGE</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                            Expert <span className="text-yellow-300">Chauffage</span> Gard
                            <br />
                            Installation & Dépannage
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-xl">
                            Chaudière en panne ? Envie d'une pompe à chaleur ?
                            Nos chauffagistes interviennent à <strong>Nîmes, Alès et tout le Gard</strong> pour votre confort thermique.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:0619242556"
                                className="group relative inline-flex items-center justify-center gap-2 bg-white text-orange-700 px-6 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-xl shadow-black/15"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
                                </span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                06 19 24 25 56
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                            >
                                Découvrir nos services
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Solutions de <span className="gradient-text">chauffage</span> globales
                        </h2>
                        <p className="text-base text-slate-600">
                            De l'installation à l'entretien, nous nous occupons de tout votre système de chauffage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {chauffageServices.map((service) => (
                            <div
                                key={service.title}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RGE Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                                    ÉCONOMIES D'ÉNERGIE
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    Passez à la <span className="text-green-600">pompe à chaleur</span>
                                </h2>
                                <p className="text-base text-slate-700 mb-6">
                                    Remplacez votre ancienne chaudière par une pompe à chaleur performante.
                                    En tant qu'installateur qualifié, nous vous accompagnons dans votre projet de rénovation énergétique.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Jusqu'à 70% d'économies de chauffage
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Installation éligible aux aides de l'État
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Confort thermique toute l'année
                                    </li>
                                </ul>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                                >
                                    Demander une étude gratuite
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                            <div className="relative">
                                {/* Placeholder image RGE */}
                                <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🌿</div>
                                        <div className="text-2xl font-bold text-slate-900">Qualifié RGE</div>
                                        <div className="text-sm text-slate-500">Reconnu Garant de l'Environnement</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zones */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Chauffagiste dans le Gard
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {zones.map((zone) => (
                            <span
                                key={zone}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 shadow-sm"
                            >
                                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {zone}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-16 md:py-24 bg-orange-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Besoin d'un chauffagiste ?
                    </h2>
                    <p className="text-lg text-orange-200 mb-8 max-w-2xl mx-auto">
                        Panne de chauffage ou projet d'installation ? Contactez-nous pour un devis gratuit.
                    </p>
                    <a
                        href="tel:0619242556"
                        className="inline-flex items-center gap-3 bg-white text-orange-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-xl"
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
