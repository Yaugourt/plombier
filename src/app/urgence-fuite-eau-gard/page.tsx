import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Urgence Fuite d'Eau Gard (30) | Intervention 24h/24 | Cassard Plombier",
    description: "Urgence fuite d'eau dans le Gard ? Intervention rapide 24h/24, 7j/7 à Nîmes, Alès, Uzès et tout le département. Cassard Sanitaire et Chauffage. Appelez le 06 19 24 25 56.",
    keywords: [
        "fuite d'eau Gard",
        "urgence fuite eau Nîmes",
        "fuite d'eau 30",
        "réparation fuite eau",
        "plombier fuite Gard",
        "fuite canalisation Nîmes",
        "recherche fuite eau Gard",
        "dégât des eaux Nîmes",
    ],
    alternates: {
        canonical: "https://cassard-plombier.fr/urgence-fuite-eau-gard",
    },
};

const fuiteTypes = [
    {
        title: "Fuite d'eau visible",
        description: "Robinet qui fuit, WC qui coule, tuyau percé... Intervention immédiate pour stopper la fuite.",
        icon: "💧",
    },
    {
        title: "Fuite cachée",
        description: "Détection de fuites non visibles par des techniques professionnelles (caméra, gaz traceur).",
        icon: "🔍",
    },
    {
        title: "Canalisation percée",
        description: "Réparation ou remplacement de canalisations endommagées en urgence.",
        icon: "🔧",
    },
    {
        title: "Dégât des eaux",
        description: "Intervention d'urgence pour limiter les dégâts et réparer la source de la fuite.",
        icon: "🏠",
    },
];

const zones = [
    "Nîmes",
    "Alès",
    "Uzès",
    "Beaucaire",
    "Bagnols-sur-Cèze",
    "Vauvert",
    "Saint-Gilles",
    "Vergèze",
    "Sommières",
    "Marguerittes",
];

export default function UrgenceFuiteEauGardPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-red-950 via-red-800 to-red-700 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <nav className="mb-6" aria-label="Fil d'ariane">
                            <ol className="flex items-center gap-2 text-sm text-red-200">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Accueil
                                    </Link>
                                </li>
                                <li>/</li>
                                <li className="text-white font-medium">
                                    Urgence Fuite d'Eau Gard
                                </li>
                            </ol>
                        </nav>

                        {/* Badge Urgence */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-pulse">
                            <span className="text-2xl">🚨</span>
                            <span className="text-base font-bold text-white">URGENCE 24H/24</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                            Urgence <span className="text-orange-300">Fuite d'Eau</span> Gard
                            <br />
                            Intervention immédiate
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-red-100 mb-8 max-w-xl">
                            Fuite d'eau urgente à <strong>Nîmes, Alès, Uzès</strong> ou ailleurs dans le Gard ?
                            Nos plombiers interviennent en <strong>moins de 30 minutes</strong> pour stopper votre fuite.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:0619242556"
                                className="group relative inline-flex items-center justify-center gap-2 bg-white text-red-700 px-6 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all hover:scale-105 shadow-xl shadow-black/15"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                                </span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                06 19 24 25 56
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types de fuites */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Tous types de <span className="text-red-600">fuites d'eau</span>
                        </h2>
                        <p className="text-base text-slate-600">
                            Quelle que soit l'origine de votre fuite, nous intervenons rapidement pour la réparer.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fuiteTypes.map((type) => (
                            <div
                                key={type.title}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="text-4xl mb-4">{type.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                                <p className="text-slate-600 text-sm">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pourquoi agir vite */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                Pourquoi agir <span className="text-red-600">rapidement</span> ?
                            </h2>
                            <p className="text-base text-slate-600 mb-8">
                                Une fuite d'eau non traitée peut causer des dégâts considérables en quelques heures seulement.
                                Plus vous attendez, plus les dommages seront importants et coûteux.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Dégâts sur les murs, sols et plafonds",
                                    "Développement de moisissures et champignons",
                                    "Affaiblissement de la structure du bâtiment",
                                    "Facture d'eau qui explose",
                                    "Risques électriques",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">
                                📞 Fuite d'eau en cours ?
                            </h3>
                            <p className="text-slate-600 mb-6">
                                <strong>En attendant notre arrivée :</strong> coupez l'arrivée d'eau générale
                                et essayez de contenir la fuite avec des serpillières.
                            </p>
                            <a
                                href="tel:0619242556"
                                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 w-full"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zones d'intervention */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Intervention dans tout le Gard (30)
                        </h2>
                        <p className="text-base text-slate-600">
                            Nos plombiers interviennent rapidement dans toutes les communes du Gard.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {zones.map((zone) => (
                            <span
                                key={zone}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 shadow-sm"
                            >
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {zone}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-red-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        🚨 Fuite d'eau urgente ? Appelez maintenant !
                    </h2>
                    <p className="text-lg text-red-200 mb-8 max-w-2xl mx-auto">
                        Intervention en moins de 30 minutes dans le Gard.
                        Devis gratuit, travaux garantis.
                    </p>
                    <a
                        href="tel:0619242556"
                        className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all hover:scale-105 shadow-xl"
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
