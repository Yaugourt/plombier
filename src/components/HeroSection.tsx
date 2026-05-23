import ImageWithFallback from "./ImageWithFallback";
import GoogleRatingBadge from "./GoogleRatingBadge";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import Card from "./ui/Card";
import { CONTACT, SOCIAL_PROOF } from "@/lib/constants";
import { getReviews } from "@/lib/reviews";

export default async function HeroSection() {
  const { rating, totalRatings } = await getReviews();

  return (
    <section className="relative min-h-[88svh] md:min-h-[88vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.07] pointer-events-none" />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Subtle blur orbs */}
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-primary-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-28 pb-16 md:pb-12 relative z-10 safe-pb">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm font-medium tracking-wide">
                Disponible 24h/24 — 7j/7
              </span>
            </div>

            {/* Title */}
            <div className="animate-fade-in-up stagger-1">
              <h1 className="text-white">
                <span className="text-accent">Plombier</span> d&apos;urgence à Nîmes 24h/24
              </h1>
              <p className="mt-4 text-base md:text-lg font-medium text-primary-100/90">
                Intervention en {SOCIAL_PROOF.interventionTimeMinutes} min — Gard, Hérault, Vaucluse, Bouches-du-Rhône
              </p>
            </div>

            {/* Sub-headline */}
            <p className="mt-6 text-primary-100/90 max-w-xl animate-fade-in-up stagger-2">
              Fuites, canalisations bouchées, pannes de chauffage — une équipe locale, joignable maintenant, devis annoncé avant intervention.
            </p>

            {/* Trust strip */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm animate-fade-in-up stagger-3">
              <GoogleRatingBadge rating={rating} totalRatings={totalRatings} variant="dark" />
              <span className="hidden sm:block h-5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-primary-100/90">
                <Icon name="check-circle" size={16} className="text-green-400" />
                <span>Devis gratuit</span>
              </div>
              <span className="hidden sm:block h-5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-primary-100/90">
                <Icon name="shield" size={16} className="text-green-400" />
                <span>Garantie décennale</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up stagger-4">
              <Button
                as="a"
                variant="urgence"
                size="lg"
                href={CONTACT.phoneTel}
                iconLeft={<Icon name="phone" size={20} />}
                aria-label={`Appeler le ${CONTACT.phone}`}
              >
                Appeler — {CONTACT.phone}
              </Button>
              <Button
                as="a"
                variant="outline"
                size="lg"
                href="#contact"
                iconRight={<Icon name="arrow-right" size={18} />}
              >
                Devis gratuit
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-up stagger-5">
            <Card
              variant="glass"
              padding="none"
              className="relative w-full aspect-[4/5] sm:aspect-square max-w-lg mx-auto overflow-hidden"
            >
              <ImageWithFallback
                src="/Travaux/IMG_20251208_171110.jpg"
                alt="Plombier Cassard en intervention à Nîmes — réalisation sanitaire"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
                className="object-cover"
                priority
                fallback={
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 gap-3">
                    <Icon name="tools" size={96} />
                    <span className="text-sm">Nos réalisations</span>
                  </div>
                }
              />
              {/* Subtle gradient overlay for legibility of floating cards */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent pointer-events-none" />
            </Card>

            {/* Floating cards */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white rounded-xl shadow-soft-lg p-3 sm:p-4 animate-float">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="clock" size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Intervention &lt;{SOCIAL_PROOF.interventionTimeMinutes} min
                  </p>
                  <p className="text-xs text-slate-500">Sur l&apos;agglo nîmoise</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl shadow-soft-lg p-3 sm:p-4 animate-float-delayed">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                  <Icon name="star-fill" size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {totalRatings.toLocaleString("fr-FR")} avis {rating.toFixed(1)}/5
                  </p>
                  <p className="text-xs text-slate-500">Note Google moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block opacity-60">
          <a
            href="#services"
            aria-label="Faire défiler vers les services"
            className="text-white/70 hover:text-white transition-colors block animate-bounce"
          >
            <Icon name="arrow-down" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
