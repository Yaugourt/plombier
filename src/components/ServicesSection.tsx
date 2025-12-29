import ImageWithFallback from "./ImageWithFallback";

const services = [
  {
    id: "plomberie",
    title: "Plomberie",
    description:
      "Réparation de fuites, débouchage, installation de robinetterie, remplacement de canalisations. Intervention rapide pour tous vos problèmes de plomberie.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    features: ["Réparation de fuites", "Débouchage", "Installation robinetterie", "Canalisations"],
    image: "/Travaux/IMG_20251208_171110.jpg",
  },
  {
    id: "chauffage",
    title: "Chauffage",
    description:
      "Installation, entretien et réparation de tous types de chauffage : chaudières, pompes à chaleur, radiateurs. Optimisez votre confort thermique.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    features: ["Chaudières gaz/fioul", "Pompes à chaleur", "Radiateurs", "Plancher chauffant"],
    image: "/Travaux/IMG_20251208_171115.jpg",
  },
  {
    id: "sanitaire",
    title: "Sanitaire",
    description:
      "Installation et rénovation de salles de bain, WC, douches. Création d'espaces sanitaires modernes et fonctionnels adaptés à vos besoins.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ["Salle de bain", "WC / Toilettes", "Douche à l'italienne", "Baignoire"],
    image: "/Travaux/IMG_20251208_171117.jpg",
  },
  {
    id: "urgence",
    title: "Urgence 24h/24",
    description:
      "Fuite d'eau, canalisation bouchée, panne de chauffage ? Notre équipe intervient 24h/24, 7j/7 pour résoudre vos urgences rapidement.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ["Intervention rapide", "Disponible 24h/24", "Week-end et jours fériés", "Devis sur place"],
    image: "/Travaux/IMG_20251208_171120.jpg",
    highlight: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-primary-600 font-medium text-xs uppercase tracking-wider mb-3">
            Nos expertises
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Des services <span className="gradient-text">complets</span> pour tous vos besoins
          </h2>
          <p className="text-base text-slate-600">
            Que ce soit pour une urgence, une installation ou une rénovation,
            Cassard Sanitaire et Chauffage vous accompagne avec professionnalisme.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${service.highlight ? "ring-2 ring-primary-500 ring-offset-2" : ""
                }`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  24h/24
                </div>
              )}

              {/* Image */}
              <div className="relative h-36 bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fallback={
                    <div className="absolute inset-0 flex items-center justify-center text-primary-300">
                      {service.icon}
                    </div>
                  }
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-sm text-slate-500">
                      <svg className="w-3 h-3 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="tel:0619242556"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-all hover:scale-105 shadow-md shadow-primary-600/25"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appelez-nous : 06 19 24 25 56
          </a>
        </div>
      </div>
    </section>
  );
}

