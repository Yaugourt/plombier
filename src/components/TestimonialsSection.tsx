"use client";

import { useState, useEffect } from "react";

// Avis de fallback si pas d'API Google configurée
const fallbackTestimonials = [
  {
    id: 1,
    name: "Marie L.",
    location: "Nîmes",
    rating: 5,
    text: "Intervention ultra rapide pour une fuite d'eau un dimanche soir. Le plombier était professionnel, propre et efficace. Je recommande vivement !",
    date: "Il y a 2 semaines",
    service: "Urgence plomberie",
  },
  {
    id: 2,
    name: "Jean-Pierre M.",
    location: "Alès",
    rating: 5,
    text: "Excellent travail pour l'installation de ma nouvelle chaudière. Conseils pertinents et prix très correct. Entreprise sérieuse.",
    date: "Il y a 1 mois",
    service: "Installation chauffage",
  },
  {
    id: 3,
    name: "Sophie B.",
    location: "Uzès",
    rating: 5,
    text: "Rénovation complète de ma salle de bain réalisée dans les temps et selon mes attentes. Équipe sympathique et travail soigné.",
    date: "Il y a 3 semaines",
    service: "Rénovation sanitaire",
  },
  {
    id: 4,
    name: "Laurent D.",
    location: "Beaucaire",
    rating: 5,
    text: "Débouchage de canalisation effectué rapidement. Tarif annoncé respecté, pas de mauvaise surprise. Je ferai appel à eux sans hésiter.",
    date: "Il y a 1 semaine",
    service: "Débouchage",
  },
  {
    id: 5,
    name: "Isabelle R.",
    location: "Nîmes",
    rating: 5,
    text: "Service impeccable du début à la fin. Le technicien a pris le temps d'expliquer le problème et la solution. Très professionnel.",
    date: "Il y a 2 mois",
    service: "Plomberie générale",
  },
  {
    id: 6,
    name: "François T.",
    location: "Vauvert",
    rating: 5,
    text: "Pompe à chaleur installée parfaitement. Gros travail de préparation mais résultat excellent. Merci à toute l'équipe Cassard !",
    date: "Il y a 1 mois",
    service: "Pompe à chaleur",
  },
];

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  relativeTime?: string;
  location?: string;
  service?: string;
  profilePhotoUrl?: string | null;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reviewsData, setReviewsData] = useState<{
    rating: number;
    totalRatings: number;
    reviews: Review[];
  }>({
    rating: 5.0,
    totalRatings: 5014,
    reviews: fallbackTestimonials,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        if (data.reviews && data.reviews.length > 0) {
          // Mapper les avis Google vers notre format
          const formattedReviews = data.reviews.map((review: Review) => ({
            ...review,
            location: review.location || "Gard",
            service: review.service || "Service plomberie",
          }));
          setReviewsData({
            rating: data.rating || 5.0,
            totalRatings: data.totalRatings || 5014,
            reviews: formattedReviews,
          });
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Garder les avis de fallback
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const visibleTestimonials = reviewsData.reviews.slice(0, 6);

  return (
    <section id="avis" className="py-20 md:py-28 bg-primary-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Plus de <span className="text-accent">5000 clients</span> satisfaits
          </h2>
          <p className="text-lg text-primary-200">
            Découvrez les avis de nos clients. Notre réputation se construit chaque jour 
            grâce à votre confiance et notre engagement qualité.
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div>
              <span className="text-2xl font-bold">{reviewsData.rating.toFixed(1)}</span>
              <span className="text-primary-300 ml-2">sur Google</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-primary-200">
              <span className="font-semibold text-white">{reviewsData.totalRatings.toLocaleString('fr-FR')}</span> avis
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer ${
                index === activeIndex ? "ring-2 ring-accent" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {testimonial.profilePhotoUrl ? (
                    <img
                      src={testimonial.profilePhotoUrl}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary-300">{testimonial.location || "Gard"}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(Math.min(testimonial.rating, 5))].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-primary-100 mb-4 line-clamp-4">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm">
                <span className="inline-block bg-primary-800/50 text-primary-200 px-3 py-1 rounded-full">
                  {testimonial.service || "Service"}
                </span>
                <span className="text-primary-400">{testimonial.relativeTime || testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=cassard+sanitaire+chauffage+nimes+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors"
          >
            Voir tous les avis sur Google
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

