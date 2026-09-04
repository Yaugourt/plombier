export const COMPANY = {
  name: "Cassard Sanitaire et Chauffage",
  shortName: "Cassard",
  tagline: "Sanitaire & Chauffage",
  domain: "cassard-plombier.fr",
  url: "https://cassard-plombier.fr",
  // TODO: fill with real SIRET (14 digits). Empty string hides the mention in the footer.
  siret: "",
} as const;

/**
 * Domain actually serving the site in production (Vercel).
 * COMPANY.domain is the brand domain and is not registered yet.
 */
export const LIVE_DOMAIN = "plombiernimesdepannage.com";

export const CONTACT = {
  phone: "06 19 24 25 56",
  phoneRaw: "0619242556",
  phoneTel: "tel:+33619242556",
  email: "cassard.sc@outlook.fr",
  city: "Nîmes",
  postalCode: "30000",
  region: "Occitanie",
} as const;

export const SOCIAL_PROOF = {
  rating: 5.0,
  totalReviews: 31,
  yearsExperience: 15,
  interventionTimeMinutes: 30,
  clientsSatisfied: 31,
} as const;

/** Fiche Google Maps (entreprise de zone de service, sans adresse fixe). */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Cassard+Sanitaire+et+Chauffage/@43.8085283,4.1764951,12z/data=!3m1!4b1!4m6!3m5!1s0x2af559987038bb83:0xb12196b094dd15e6!8m2!3d43.8085283!4d4.1764951!16s%2Fg%2F11sw_bt6kc";

export const SERVICE_AREAS = [
  { name: "Gard", code: "30" },
  { name: "Hérault", code: "34" },
  { name: "Bouches-du-Rhône", code: "13" },
  { name: "Vaucluse", code: "84" },
] as const;

export const CERTIFICATIONS = [
  { name: "Garantie décennale", desc: "Travaux assurés 10 ans" },
  { name: "Devis gratuit", desc: "Sans engagement" },
  { name: "Artisan certifié", desc: "Qualifications reconnues" },
  { name: "Paiement après intervention", desc: "Satisfaction d'abord" },
] as const;
