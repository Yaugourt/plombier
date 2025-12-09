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
  "Nîmes",
  "Montpellier",
  "Alès",
  "Avignon",
  "Arles",
  "Uzès",
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
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold">Besoin d&apos;un plombier en urgence ?</p>
              <p className="text-primary-100 text-sm">Intervention 24h/24, 7j/7 • Gard, Hérault, Vaucluse, Bouches-du-Rhône</p>
            </div>
            <a
              href="tel:0619242556"
              className="flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 19 24 25 56
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src="/logo.png"
                  alt="Cassard Sanitaire et Chauffage"
                  width={40}
                  height={40}
                  className="object-contain"
                  fallback={<span className="text-white font-bold text-lg">C</span>}
                />
              </div>
              <div>
                <span className="font-bold block">Cassard</span>
                <span className="text-xs text-primary-300 block">Sanitaire & Chauffage</span>
              </div>
            </Link>
            <p className="text-primary-200 mb-3 text-xs leading-relaxed">
              Votre expert en plomberie, sanitaire et chauffage à Nîmes et dans tout le Gard. 
              Plus de 5000 clients satisfaits.
            </p>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white ml-1 text-xs">{rating.toFixed(1)} ({totalRatings.toLocaleString('fr-FR')} avis)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3 text-sm">Nos services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-primary-200 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h3 className="font-bold mb-3 text-sm">Zones d&apos;intervention</h3>
            <ul className="space-y-1.5">
              {zones.map((zone) => (
                <li key={zone}>
                  <Link
                    href="#zone"
                    className="text-primary-200 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {zone}
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
            <h3 className="font-bold mb-3 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0619242556"
                  className="flex items-start gap-2 text-primary-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="block font-medium text-white text-sm">06 19 24 25 56</span>
                    <span className="text-xs">24h/24, 7j/7</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-200">
                <svg className="w-4 h-4 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block font-medium text-white text-sm">Nîmes et région</span>
                  <span className="text-xs">Intervention rapide</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-primary-200">
                <svg className="w-4 h-4 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-medium text-white text-sm">Ouvert 24h/24</span>
                  <span className="text-xs">Urgences & RDV</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-300">
            <p>© {new Date().getFullYear()} Cassard Sanitaire et Chauffage. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
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
