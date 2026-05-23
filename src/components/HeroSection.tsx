import ImageWithFallback from "./ImageWithFallback";
import GoogleRatingBadge from "./GoogleRatingBadge";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Icon from "./ui/Icon";
import Card from "./ui/Card";
import { CONTACT, SOCIAL_PROOF } from "@/lib/constants";
import { getReviews } from "@/lib/reviews";

export default async function HeroSection() {
  const { rating, totalRatings } = await getReviews();

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pb-24 relative z-10 safe-pb">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-medium tracking-wide">
                Disponible 24h/24 — 7j/7
              </span>
            </div>

            <div className="animate-fade-in-up stagger-1">
              <h1 className="text-white">
                <span className="text-accent">Plombier</span> d&apos;urgence à Nîmes 24h/24
              </h1>
              <p className="mt-3 text-sm md:text-base font-medium text-primary-100/90">
                Intervention en {SOCIAL_PROOF.interventionTimeMinutes} min — Gard, Hérault, Vaucluse, Bouches-du-Rhône
              </p>
            </div>

            <p className="mt-4 text-sm md:text-base text-primary-100/85 max-w-lg animate-fade-in-up stagger-2">
              Fuites, canalisations bouchées, pannes de chauffage — une équipe locale, joignable maintenant, devis annoncé avant intervention.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm animate-fade-in-up stagger-3">
              <GoogleRatingBadge rating={rating} totalRatings={totalRatings} variant="dark" />
              <span className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-primary-100/90">
                <Icon name="check-circle" size={14} className="text-green-400" />
                <span>Devis gratuit</span>
              </div>
              <span className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-primary-100/90">
                <Icon name="shield" size={14} className="text-green-400" />
                <span>Garantie décennale</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3 animate-fade-in-up stagger-4">
              <Button
                as="a"
                variant="urgence"
                size="md"
                href={CONTACT.phoneTel}
                iconLeft={<Icon name="phone" size={18} />}
                aria-label={`Appeler le ${CONTACT.phone}`}
              >
                Appeler — {CONTACT.phone}
              </Button>
              <Button
                as="a"
                variant="outline"
                size="md"
                href="#contact"
                iconRight={<Icon name="arrow-right" size={16} />}
              >
                Devis gratuit
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up stagger-5">
            <Card
              variant="glass"
              padding="none"
              className="relative w-full aspect-[16/10] md:aspect-[4/3] max-w-md md:max-w-none mx-auto overflow-hidden"
            >
              <ImageWithFallback
                src="/Travaux/IMG_20251208_171110.jpg"
                alt="Plombier Cassard en intervention à Nîmes — réalisation sanitaire"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                className="object-cover"
                priority
                loading="eager"
                fallback={
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 gap-2">
                    <Icon name="tools" size={64} />
                    <span className="text-xs">Nos réalisations</span>
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white rounded-xl shadow-soft-lg p-3 max-w-[calc(100%-1.5rem)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="clock" size={20} className="text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      Intervention &lt;{SOCIAL_PROOF.interventionTimeMinutes} min
                    </p>
                    <p className="text-xs text-slate-500">{totalRatings} avis · {rating.toFixed(1)}/5 Google</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
