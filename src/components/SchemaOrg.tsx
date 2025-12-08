export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": "https://cassard-plombier.fr/#organization",
    name: "Cassard Sanitaire et Chauffage",
    alternateName: "Cassard Plombier Nîmes",
    description:
      "Plombier professionnel à Nîmes et dans le Gard. Spécialiste en plomberie, sanitaire et chauffage. Intervention d'urgence 24h/24, 7j/7.",
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
        "@type": "City",
        name: "Nîmes",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gard",
      },
      {
        "@type": "City",
        name: "Alès",
      },
      {
        "@type": "City",
        name: "Uzès",
      },
      {
        "@type": "City",
        name: "Beaucaire",
      },
      {
        "@type": "City",
        name: "Bagnols-sur-Cèze",
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
            name: "Dépannage plomberie urgent",
            description: "Intervention rapide 24h/24 pour tout type de panne",
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

