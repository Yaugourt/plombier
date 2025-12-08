"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi - À remplacer par votre logique d'envoi
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Besoin d&apos;un <span className="gradient-text">plombier</span> ?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Appelez-nous directement ou remplissez le formulaire. 
              Nous vous répondons dans les plus brefs délais.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href="tel:0619242556"
                className="flex items-center gap-4 bg-primary-50 hover:bg-primary-100 rounded-2xl p-5 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-primary-600 font-medium">Appelez-nous</p>
                  <p className="text-2xl font-bold text-slate-900">06 19 24 25 56</p>
                  <p className="text-sm text-slate-500">Disponible 24h/24, 7j/7</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
                <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Zone d&apos;intervention</p>
                  <p className="text-xl font-bold text-slate-900">Nîmes et tout le Gard (30)</p>
                  <p className="text-sm text-slate-500">Intervention rapide garantie</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Horaires</p>
                  <p className="text-xl font-bold text-slate-900">Ouvert 24h/24</p>
                  <p className="text-sm text-green-600 font-medium">Actuellement disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande de devis gratuit</h3>
            <p className="text-slate-600 mb-6">Décrivez-nous votre besoin, nous vous recontactons rapidement.</p>

            {submitStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-green-800 mb-2">Message envoyé !</h4>
                <p className="text-green-600">Nous vous recontactons dans les plus brefs délais.</p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-4 text-green-700 underline hover:no-underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Type d&apos;intervention *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="urgence">🚨 Urgence (fuite, panne...)</option>
                    <option value="plomberie">🔧 Plomberie générale</option>
                    <option value="chauffage">🔥 Chauffage</option>
                    <option value="sanitaire">🚿 Sanitaire / Salle de bain</option>
                    <option value="devis">📋 Demande de devis</option>
                    <option value="autre">❓ Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Décrivez votre besoin *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Décrivez votre problème ou votre projet..."
                  ></textarea>
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté par nos services.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

