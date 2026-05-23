import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import GoogleRatingBadge from "./GoogleRatingBadge";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { COMPANY, CONTACT } from "@/lib/constants";
import { ALL_CITIES } from "@/lib/cities";
import { getReviews } from "@/lib/reviews";

const services: { label: string; href: string }[] = [
  { label: "Plomberie générale", href: "/#services" },
  { label: "Dépannage urgence 24h/24", href: "/#services" },
  { label: "Recherche de fuite", href: "/#services" },
  { label: "Débouchage canalisation", href: "/#services" },
  { label: "Chauffage & chaudière", href: "/#services" },
  { label: "Rénovation salle de bain", href: "/#services" },
];

export default async function Footer() {
  const { rating, totalRatings } = await getReviews();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      {/* CTA Band */}
      <div className="bg-primary-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold">Besoin d&apos;un plombier en urgence ?</p>
              <p className="text-primary-100 text-sm">
                Intervention 24h/24, 7j/7 — Gard, Hérault, Vaucluse, Bouches-du-Rhône
              </p>
            </div>
            <Button
              as="a"
              variant="white"
              size="lg"
              href={CONTACT.phoneTel}
              iconLeft={<Icon name="phone" size={20} />}
              aria-label={`Appeler le ${CONTACT.phone}`}
            >
              {CONTACT.phone}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="/logo.png"
                  alt={COMPANY.name}
                  width={40}
                  height={40}
                  className="object-contain"
                  fallback={<span className="text-white font-bold text-lg">C</span>}
                />
              </div>
              <div className="leading-tight">
                <span className="font-bold block text-base">{COMPANY.shortName}</span>
                <span className="text-xs text-primary-300 block">{COMPANY.tagline}</span>
              </div>
            </Link>
            <p className="text-primary-200 mb-4 text-sm leading-relaxed">
              Votre expert en plomberie, sanitaire et chauffage à {CONTACT.city} et dans tout le Gard.
              Plus de 5 000 clients satisfaits.
            </p>
            <GoogleRatingBadge rating={rating} totalRatings={totalRatings} variant="dark" />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-200">
              Nos services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <Icon
                      name="chevron-right"
                      size={14}
                      className="text-primary-400 group-hover:text-accent transition-colors"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-200">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2">
              {ALL_CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <Icon
                      name="location"
                      size={14}
                      className="text-primary-400 group-hover:text-accent transition-colors"
                    />
                    Plombier {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <span className="text-primary-300 text-xs">
                  + tout le Gard, Hérault, Vaucluse, Bouches-du-Rhône
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-primary-200">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phoneTel}
                  aria-label={`Appeler le ${CONTACT.phone}`}
                  className="flex items-start gap-2.5 text-primary-200 hover:text-white transition-colors group"
                >
                  <Icon
                    name="phone"
                    size={18}
                    className="text-primary-400 mt-0.5 group-hover:text-accent transition-colors"
                  />
                  <span>
                    <span className="block font-semibold text-white text-sm">{CONTACT.phone}</span>
                    <span className="text-xs">24h/24, 7j/7</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2.5 text-primary-200 hover:text-white transition-colors group"
                >
                  <Icon
                    name="mail"
                    size={18}
                    className="text-primary-400 mt-0.5 group-hover:text-accent transition-colors"
                  />
                  <span>
                    <span className="block font-semibold text-white text-sm break-all">
                      {CONTACT.email}
                    </span>
                    <span className="text-xs">Réponse sous 24h</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-200">
                <Icon name="location" size={18} className="text-primary-400 mt-0.5" />
                <span>
                  <span className="block font-semibold text-white text-sm">
                    {CONTACT.city} ({CONTACT.postalCode}) et région
                  </span>
                  <span className="text-xs">Intervention rapide</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-primary-200">
                <Icon name="clock" size={18} className="text-primary-400 mt-0.5" />
                <span>
                  <span className="block font-semibold text-white text-sm">Ouvert 24h/24</span>
                  <span className="text-xs">Urgences & RDV</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800/60">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-300">
            <p className="text-center md:text-left">
              © {year} {COMPANY.name} — Plombier {CONTACT.city} — SIRET XXX XXX XXX XXXXX
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
