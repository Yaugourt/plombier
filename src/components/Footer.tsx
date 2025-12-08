"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

const services = [
  "Plomberie générale",
  "Chauffage",
  "Sanitaire",
  "Dépannage urgent",
  "Installation",
  "Rénovation",
];

  const zones = [
  "Nîmes (30)",
  "Montpellier (34)",
  "Marseille (13)",
  "Avignon (84)",
  "Alès (30)",
  "Aix-en-Provence (13)",
  "Sète (34)",
  "Béziers (34)",
  "Orange (84)",
  "Arles (13)",
  "Uzès (30)",
  "Beaucaire (30)",
];

export default function Footer() {
  const [rating, setRating] = useState(5.0);
  const [totalRatings, setTotalRatings] = useState(5014);

  useEffect(() => {
    async function fetchRating() {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        if (data.rating) setRating(data.rating);
        if (data.totalRatings) setTotalRatings(data.totalRatings);
      } catch (error) {
        console.error("Error fetching rating:", error);
      }
    }

    fetchRating();
  }, []);
  return (
    <footer className="bg-primary-950 text-white">
      {/* CTA Band */}
      <div className="bg-primary-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold">Besoin d&apos;un plombier en urgence ?</p>
              <p className="text-primary-100">Intervention 24h/24, 7j/7 dans tout le Gard</p>
            </div>
            <a
              href="tel:0619242556"
              className="flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all hover:scale-105 shadow-xl"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              06 19 24 25 56
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="/logo.png"
                  alt="Cassard Sanitaire et Chauffage"
                  width={48}
                  height={48}
                  className="object-contain"
                  fallback={<span className="text-white font-bold text-xl">C</span>}
                />
              </div>
              <div>
                <span className="font-bold text-lg block">Cassard</span>
                <span className="text-xs text-primary-300 block">Sanitaire & Chauffage</span>
              </div>
            </Link>
            <p className="text-primary-200 mb-4 text-sm leading-relaxed">
              Votre expert en plomberie, sanitaire et chauffage à Nîmes et dans tout le Gard. 
              Plus de 5000 clients satisfaits nous font confiance.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white ml-2 text-sm">{rating.toFixed(1)} ({totalRatings.toLocaleString('fr-FR')} avis)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zone d&apos;intervention</h3>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone}>
                  <Link
                    href="#zone"
                    className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {zone}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#zone"
                  className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2 font-semibold"
                >
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  + Gard, Hérault, Bouches-du-Rhône, Vaucluse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0619242556"
                  className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="block font-semibold text-white">06 19 24 25 56</span>
                    <span className="text-sm">24h/24, 7j/7</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block font-semibold text-white">Nîmes et Gard (30)</span>
                  <span className="text-sm">Intervention rapide</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-semibold text-white">Ouvert 24h/24</span>
                  <span className="text-sm">Urgences & rendez-vous</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-300">
            <p>© {new Date().getFullYear()} Cassard Sanitaire et Chauffage. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

