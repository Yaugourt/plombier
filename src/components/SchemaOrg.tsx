export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://cassard-plombier.fr/#organization",
    name: "Cassard Sanitaire et Chauffage",
    alternateName: "Cassard Plombier Nîmes",
    description:
      "Urgence plombier Nîmes Gard - Intervention rapide 24h/24 dans le Gard (30), Hérault (34), Bouches-du-Rhône (13) et Vaucluse (84). Spécialiste plomberie d'urgence, sanitaire et chauffage.",
    url: "https://cassard-plombier.fr",
    telephone: "+33619242556",
    email: "contact@cassard-plombier.fr",
    logo: "https://cassard-plombier.fr/logo.png",
    image: "https://cassard-plombier.fr/og-image.jpg",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nîmes",
      addressRegion: "Occitanie",
      postalCode: "30000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8367,
      longitude: 4.3601,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Gard",
        identifier: "FR-30",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hérault",
        identifier: "FR-34",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bouches-du-Rhône",
        identifier: "FR-13",
      },
      {
        "@type": "AdministrativeArea",
        name: "Vaucluse",
        identifier: "FR-84",
      },
      {
        "@type": "City",
        name: "Nîmes",
      },
      {
        "@type": "City",
        name: "Montpellier",
      },
      {
        "@type": "City",
        name: "Marseille",
      },
      {
        "@type": "City",
        name: "Avignon",
      },
      {
        "@type": "City",
        name: "Alès",
      },
      {
        "@type": "City",
        name: "Sète",
      },
      {
        "@type": "City",
        name: "Béziers",
      },
      {
        "@type": "City",
        name: "Aix-en-Provence",
      },
      {
        "@type": "City",
        name: "Arles",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5014",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      // Ajouter les liens vers les réseaux sociaux si disponibles
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de plomberie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Urgence plombier Nîmes Gard",
            description: "Urgence plombier intervention rapide 24h/24 dans le Gard, Hérault, Bouches-du-Rhône et Vaucluse. Fuites d'eau, canalisations bouchées, pannes chauffage.",
            areaServed: ["Gard", "Hérault", "Bouches-du-Rhône", "Vaucluse"],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation chauffage",
            description:
              "Installation et remplacement de systèmes de chauffage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rénovation sanitaire",
            description: "Rénovation complète de salle de bain et sanitaires",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Détection de fuites",
            description: "Recherche et réparation de fuites d'eau",
          },
        },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cassard Sanitaire et Chauffage",
    url: "https://cassard-plombier.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cassard-plombier.fr/recherche?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}

