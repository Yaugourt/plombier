"use client";

import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

// Liste des photos de travaux (24 photos disponibles)
const travauxPhotos = [
  "/Travaux/IMG_20251208_171110.jpg",
  "/Travaux/IMG_20251208_171113.jpg",
  "/Travaux/IMG_20251208_171115.jpg",
  "/Travaux/IMG_20251208_171117.jpg",
  "/Travaux/IMG_20251208_171118.jpg",
  "/Travaux/IMG_20251208_171120.jpg",
  "/Travaux/IMG_20251208_171121.jpg",
  "/Travaux/IMG_20251208_171122.jpg",
  "/Travaux/IMG_20251208_171124.jpg",
  "/Travaux/IMG_20251208_171125.jpg",
  "/Travaux/IMG_20251208_171126.jpg",
  "/Travaux/IMG_20251208_171128.jpg",
  "/Travaux/IMG_20251208_171129.jpg",
  "/Travaux/IMG_20251208_171130.jpg",
  "/Travaux/IMG_20251208_171132.jpg",
  "/Travaux/IMG_20251208_171133.jpg",
  "/Travaux/IMG_20251208_171134.jpg",
  "/Travaux/IMG_20251208_171136.jpg",
  "/Travaux/IMG_20251208_171137.jpg",
  "/Travaux/IMG_20251208_171138.jpg",
  "/Travaux/IMG_20251208_171139.jpg",
  "/Travaux/IMG_20251208_171140.jpg",
  "/Travaux/IMG_20251208_171141.jpg",
  "/Travaux/IMG_20251208_171141(1).jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Nos réalisations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Galerie de <span className="gradient-text">travaux</span> réalisés
          </h2>
          <p className="text-lg text-slate-600">
            Découvrez nos dernières réalisations en plomberie, sanitaire et chauffage 
            à Nîmes et dans tout le Gard.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {travauxPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <ImageWithFallback
                src={photo}
                alt={`Réalisation plomberie Cassard ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                fallback={
                  <div className="w-full h-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                }
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[90vh] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={selectedImage}
                  alt="Réalisation agrandie"
                  fill
                  className="object-contain"
                  fallback={
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white">
                      Image non disponible
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

