export type City = {
  slug: string;
  name: string;
  department: string;
  postalCodes: string[];
  population: string;
  distanceKm: number;
  interventionTime: string;
  intro: string;
  localContext: string;
  faq: { q: string; a: string }[];
  testimonial: { name: string; quartier: string; service: string; text: string };
  nearby: string[];
};

export const CITIES: Record<string, City> = {
  nimes: {
    slug: "plombier-nimes",
    name: "Nîmes",
    department: "Gard",
    postalCodes: ["30000", "30900"],
    population: "150 000 habitants",
    distanceKm: 0,
    interventionTime: "20 à 30 minutes",
    intro:
      "Basés à Nîmes depuis plus de 15 ans, nous connaissons chaque quartier — du centre historique aux Costières, de Jean Jaurès à Pissevin. Notre équipe intervient en 20 à 30 minutes sur toute l'aire urbaine pour les urgences plomberie, fuites d'eau, débouchage et pannes de chauffage.",
    localContext:
      "Le centre ancien de Nîmes pose des défis spécifiques : canalisations en plomb, plomberie d'avant-guerre, accès difficiles. Nos plombiers sont formés au diagnostic du bâti ancien comme aux installations récentes des résidences neuves de Hoche-Université ou du Mas de Mingue.",
    faq: [
      {
        q: "Quel est le temps d'intervention à Nîmes ?",
        a: "Pour une urgence (fuite, dégât des eaux, panne chauffage), nous arrivons sur place en 20 à 30 minutes en moyenne sur l'aire urbaine de Nîmes, 24h/24 et 7j/7.",
      },
      {
        q: "Intervenez-vous dans les bâtiments anciens du centre historique ?",
        a: "Oui, nous sommes spécialisés dans les diagnostics de plomberie ancienne (canalisations plomb, raccords cuivre vieillissants) fréquents dans l'Écusson et autour des Arènes.",
      },
      {
        q: "Quels sont les tarifs d'un dépannage à Nîmes ?",
        a: "Le déplacement et le devis sont gratuits. Les tarifs dépendent de l'intervention : recherche de fuite, débouchage, remplacement de pièce. Tout est annoncé avant intervention.",
      },
      {
        q: "Réparez-vous les chauffe-eau et chaudières à Nîmes ?",
        a: "Oui, nous intervenons sur toutes marques de chauffe-eau (Atlantic, Ariston, Thermor) et chaudières gaz/fioul. Diagnostic, réparation ou remplacement.",
      },
    ],
    testimonial: {
      name: "Sophie M.",
      quartier: "Centre-ville Nîmes",
      service: "Recherche de fuite",
      text: "Fuite découverte un dimanche soir. L'équipe est arrivée en 25 minutes, fuite localisée et réparée dans la nuit. Tarif annoncé, pas de mauvaise surprise.",
    },
    nearby: ["Caissargues", "Marguerittes", "Bouillargues", "Garons", "Saint-Gilles"],
  },
  montpellier: {
    slug: "plombier-montpellier",
    name: "Montpellier",
    department: "Hérault",
    postalCodes: ["34000", "34070", "34080", "34090"],
    population: "300 000 habitants",
    distanceKm: 55,
    interventionTime: "45 à 60 minutes",
    intro:
      "Plombier à Montpellier — nous intervenons dans tous les quartiers : Antigone, Port Marianne, Beaux-Arts, Hôpitaux-Facultés, Mosson. Que vous habitiez en centre-ville historique ou dans les résidences récentes du Nouveau Saint-Roch, nous arrivons sous 1 heure pour les urgences.",
    localContext:
      "Montpellier mélange un centre médiéval avec des constructions ultra-récentes (ZAC Port Marianne, Cambacérès). Nos plombiers maîtrisent autant les installations modernes (planchers chauffants, PER, multicouche) que les réseaux historiques de l'Écusson.",
    faq: [
      {
        q: "Vous déplacez-vous depuis Nîmes jusqu'à Montpellier ?",
        a: "Oui, nous couvrons tout l'Hérault depuis notre base de Nîmes. Comptez 45 à 60 minutes d'intervention sur Montpellier.",
      },
      {
        q: "Intervenez-vous le week-end à Montpellier ?",
        a: "Oui, 24h/24 et 7j/7, week-ends et jours fériés inclus. Pas de majoration cachée — le tarif vous est communiqué avant intervention.",
      },
      {
        q: "Pouvez-vous installer une nouvelle salle de bain à Montpellier ?",
        a: "Absolument. Rénovation complète, installation de douche italienne, raccordement, faïence. Devis gratuit sur place.",
      },
    ],
    testimonial: {
      name: "Julien R.",
      quartier: "Port Marianne, Montpellier",
      service: "Dépannage chauffe-eau",
      text: "Chauffe-eau HS un samedi. Réparation effectuée le jour même, équipe pro et tarif honnête. Je recommande sans hésiter.",
    },
    nearby: ["Lattes", "Pérols", "Castelnau-le-Lez", "Saint-Jean-de-Védas", "Lunel"],
  },
  ales: {
    slug: "plombier-ales",
    name: "Alès",
    department: "Gard",
    postalCodes: ["30100"],
    population: "40 000 habitants",
    distanceKm: 45,
    interventionTime: "40 à 50 minutes",
    intro:
      "Plombier à Alès et dans tout le bassin alésien. De Tamaris à Rochebelle, du centre-ville aux Cévennes, nous intervenons rapidement pour vos urgences plomberie, sanitaire et chauffage.",
    localContext:
      "Alès et son piémont cévenol présentent souvent des installations en mas, anciens corps de ferme rénovés ou maisons en pierre. Nos équipes sont équipées pour ces interventions spécifiques (eau dure, calcaire, isolation).",
    faq: [
      {
        q: "Intervenez-vous dans les Cévennes autour d'Alès ?",
        a: "Oui, nous couvrons tout le piémont cévenol : Anduze, Saint-Jean-du-Gard, La Grand-Combe, Bessèges.",
      },
      {
        q: "Réparez-vous les pompes de surpression et adoucisseurs ?",
        a: "Oui, l'eau calcaire du bassin alésien rend ces équipements indispensables. Nous installons et entretenons toutes marques.",
      },
    ],
    testimonial: {
      name: "Marc D.",
      quartier: "Tamaris, Alès",
      service: "Remplacement chaudière",
      text: "Chaudière remplacée en une journée. Devis clair, équipe ponctuelle, finition impeccable. Très satisfait.",
    },
    nearby: ["Saint-Christol-lez-Alès", "Anduze", "La Grand-Combe", "Salindres"],
  },
  avignon: {
    slug: "plombier-avignon",
    name: "Avignon",
    department: "Vaucluse",
    postalCodes: ["84000"],
    population: "92 000 habitants",
    distanceKm: 50,
    interventionTime: "45 à 55 minutes",
    intro:
      "Plombier à Avignon — intra-muros, île de la Barthelasse, Montfavet, Pontet limitrophe. Nous intervenons rapidement dans toute l'agglomération avignonnaise pour vos urgences.",
    localContext:
      "L'intra-muros d'Avignon impose des contraintes particulières : circulation difficile, bâti classé, copropriétés anciennes. Nos plombiers connaissent les spécificités de la cité des papes et travaillent en respect du patrimoine.",
    faq: [
      {
        q: "Pouvez-vous intervenir intra-muros à Avignon ?",
        a: "Oui, nous gérons les contraintes d'accès et de stationnement de l'intra-muros. Intervention possible 7j/7 dans toute la cité.",
      },
    ],
    testimonial: {
      name: "Hélène B.",
      quartier: "Intra-muros, Avignon",
      service: "Fuite encastrée",
      text: "Fuite dans un mur d'appartement ancien. Détection sans casse grâce à leur matériel. Travail propre et rapide.",
    },
    nearby: ["Le Pontet", "Sorgues", "Villeneuve-lès-Avignon", "Morières-lès-Avignon"],
  },
  arles: {
    slug: "plombier-arles",
    name: "Arles",
    department: "Bouches-du-Rhône",
    postalCodes: ["13200"],
    population: "53 000 habitants",
    distanceKm: 35,
    interventionTime: "35 à 45 minutes",
    intro:
      "Plombier à Arles et dans tout le pays d'Arles. Centre historique, Trinquetaille, Barriol, Trébon — nous intervenons dans toute la commune et les villages alentour.",
    localContext:
      "Arles, ville d'eau et de patrimoine, présente un bâti ancien sensible. La proximité du Rhône et la nappe phréatique élevée demandent une expertise particulière sur les installations enterrées.",
    faq: [
      {
        q: "Travaillez-vous dans le pays d'Arles et en Camargue ?",
        a: "Oui, nous couvrons Arles, Saintes-Maries-de-la-Mer, Salin-de-Giraud, Tarascon et tout le pays d'Arles.",
      },
    ],
    testimonial: {
      name: "Patrick L.",
      quartier: "Trinquetaille, Arles",
      service: "Débouchage canalisation",
      text: "Canalisation bouchée un dimanche. Intervention dans l'heure, problème résolu. Très professionnel.",
    },
    nearby: ["Tarascon", "Saint-Martin-de-Crau", "Fontvieille", "Saintes-Maries-de-la-Mer"],
  },
  uzes: {
    slug: "plombier-uzes",
    name: "Uzès",
    department: "Gard",
    postalCodes: ["30700"],
    population: "8 500 habitants",
    distanceKm: 25,
    interventionTime: "25 à 35 minutes",
    intro:
      "Plombier à Uzès, premier duché de France. Nous intervenons dans la cité ducale et tout l'Uzège : Saint-Quentin-la-Poterie, Vers-Pont-du-Gard, Collias, Argilliers.",
    localContext:
      "Uzès et l'Uzège regorgent de mas, bastides et maisons en pierre. Notre expertise du bâti ancien fait la différence sur ces propriétés patrimoniales.",
    faq: [
      {
        q: "Intervenez-vous dans les mas isolés de l'Uzège ?",
        a: "Oui, nous nous déplaçons dans tous les villages de l'Uzège, y compris les hameaux isolés.",
      },
    ],
    testimonial: {
      name: "Catherine V.",
      quartier: "Centre, Uzès",
      service: "Rénovation salle de bain",
      text: "Rénovation complète d'une salle de bain dans une maison en pierre. Travail soigné, respect des délais.",
    },
    nearby: ["Saint-Quentin-la-Poterie", "Vers-Pont-du-Gard", "Collias", "Remoulins"],
  },
  beaucaire: {
    slug: "plombier-beaucaire",
    name: "Beaucaire",
    department: "Gard",
    postalCodes: ["30300"],
    population: "16 000 habitants",
    distanceKm: 25,
    interventionTime: "25 à 35 minutes",
    intro:
      "Plombier à Beaucaire et dans toute la Beaucairois. Centre historique, bord du Rhône, quartiers résidentiels — intervention rapide pour vos urgences.",
    localContext:
      "Beaucaire, face à Tarascon, présente un bâti ancien et des installations parfois obsolètes. Nous intervenons aussi bien sur le neuf que sur la rénovation.",
    faq: [
      {
        q: "Pouvez-vous remplacer une chaudière fioul à Beaucaire ?",
        a: "Oui, et nous vous conseillons sur les alternatives (gaz, pompe à chaleur, chaudière biomasse) éligibles aux aides MaPrimeRénov'.",
      },
    ],
    testimonial: {
      name: "Bernard T.",
      quartier: "Beaucaire",
      service: "Installation chauffage",
      text: "Installation d'une nouvelle chaudière. Conseils utiles, travail propre, prix correct.",
    },
    nearby: ["Tarascon", "Bellegarde", "Vallabrègues", "Fourques"],
  },
};

export const ALL_CITIES = Object.values(CITIES);
