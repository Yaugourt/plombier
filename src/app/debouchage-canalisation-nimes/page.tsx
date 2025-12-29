import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Débouchage Canalisation Nîmes Gard | Urgence 24h/24 | Cassard Plombier",
    description: "Débouchage canalisation à Nîmes et dans le Gard. Intervention 24h/24 pour évier, WC, douche bouchés. Cassard Sanitaire et Chauffage. Appelez le 06 19 24 25 56.",
    keywords: [
        "débouchage canalisation Nîmes",
        "débouchage WC Nîmes",
        "canalisation bouchée Gard",
        "débouchage évier Nîmes",
        "plombier débouchage 30",
        "débouchage urgence Gard",
        "curage canalisation Nîmes",
        "débouchage douche",
    ],
    alternates: {
        canonical: "https://cassard-plombier.fr/debouchage-canalisation-nimes",
    },
};

const debouchageTypes = [
    {
        title: "Évier bouché",
        description: "Débouchage rapide de votre évier de cuisine ou salle de bain avec des techniques professionnelles.",
        icon: "🚰",
        price: "À partir de 80€",
    },
    {
        title: "WC bouché",
        description: "Intervention urgente pour déboucher vos toilettes. Pompe, furet ou hydrocurage selon besoin.",
        icon: "🚽",
        price: "À partir de 90€",
    },
    {
        title: "Douche / Baignoire",
        description: "Élimination des bouchons de cheveux, savon et calcaire dans vos évacuations.",
        icon: "🚿",
        price: "À partir de 80€",
    },
    {
        title: "Canalisation principale",
        description: "Curage haute pression et inspection caméra pour les obstructions importantes.",
        icon: "📹",
        price: "Sur devis",
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
    "Marguerittes",
    "Milhaud",
    "Caissargues",
];

export default function DebouchageCanalisationNimesPage() {
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
                                    Débouchage Canalisation Nîmes
                                </li>
                            </ol>
                        </nav>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            <span className="text-base font-medium text-white">Intervention rapide 24h/24</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                            <span className="text-accent">Débouchage</span> Canalisation
                            <br />
                            Nîmes et Gard
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl">
                            <strong>Évier, WC, douche bouchés</strong> à Nîmes ou dans le Gard ?
                            Nos plombiers interviennent rapidement avec le matériel professionnel adapté.
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
                                href="#tarifs"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                            >
                                Voir nos tarifs
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types de débouchage avec tarifs */}
            <section id="tarifs" className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Nos services de <span className="gradient-text">débouchage</span>
                        </h2>
                        <p className="text-base text-slate-600">
                            Nous intervenons sur tous types de canalisations bouchées avec des tarifs transparents.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {debouchageTypes.map((type) => (
                            <div
                                key={type.title}
                                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100"
                            >
                                <div className="text-4xl mb-4">{type.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{type.description}</p>
                                <div className="bg-primary-50 rounded-lg px-3 py-2 inline-block">
                                    <span className="text-primary-700 font-semibold text-sm">{type.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-8">
                        * Tarifs indicatifs. Devis gratuit et sans engagement sur place.
                    </p>
                </div>
            </section>

            {/* Nos techniques */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                Techniques <span className="gradient-text">professionnelles</span>
                            </h2>
                            <p className="text-base text-slate-600 mb-8">
                                Selon la nature et la gravité du bouchon, nous utilisons différentes techniques adaptées.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { title: "Furet électrique", desc: "Pour les bouchons accessibles" },
                                    { title: "Hydrocurage haute pression", desc: "Pour les obstructions importantes" },
                                    { title: "Inspection caméra", desc: "Pour localiser le problème" },
                                    { title: "Pompe manuelle", desc: "Pour les WC et éviers" },
                                ].map((item) => (
                                    <li key={item.title} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-slate-900">{item.title}</span>
                                            <span className="text-slate-600"> - {item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">
                                🔧 Canalisation bouchée ?
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Ne forcez pas avec des produits chimiques qui peuvent endommager vos canalisations.
                                Faites appel à un professionnel.
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

            {/* Zones */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Débouchage dans tout le Gard
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {zones.map((zone) => (
                            <span
                                key={zone}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white text-slate-700 shadow-sm"
                            >
                                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {zone}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Besoin d'un débouchage urgent ?
                    </h2>
                    <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
                        Intervention rapide à Nîmes et dans le Gard. Devis gratuit sur place.
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
