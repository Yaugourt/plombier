"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { CONTACT } from "@/lib/constants";
import { ALL_CITIES } from "@/lib/cities";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
  consent: boolean;
  website: string;
};

type Status = "idle" | "sending" | "success" | "error";

const SERVICES = [
  "Urgence fuite",
  "Débouchage",
  "Chauffage",
  "Sanitaire",
  "Rénovation",
  "Autre",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+0-9 .()-]{8,20}$/;

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
  consent: false,
  website: "",
};

const inputClass =
  "w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const validate = (data: FormData): Record<string, string> => {
    const e: Record<string, string> = {};
    if (data.name.trim().length < 2)
      e.name = "Merci d'indiquer votre nom (2 caractères minimum).";
    if (!EMAIL_RE.test(data.email.trim())) e.email = "Email invalide.";
    if (!PHONE_RE.test(data.phone.trim())) e.phone = "Téléphone invalide.";
    if (data.message.trim().length < 10)
      e.message = "Message trop court (10 caractères minimum).";
    if (!data.consent) e.consent = "Vous devez accepter pour continuer.";
    return e;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const localErrors = validate(formData);
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }
    setStatus("sending");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          city: formData.city || undefined,
          service: formData.service || undefined,
          message: formData.message.trim(),
          consent: formData.consent,
          website: formData.website,
        }),
      });
      const data: {
        ok: boolean;
        errors?: Record<string, string>;
        error?: string;
      } = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      setStatus("error");
      setServerMessage(
        data.error ||
          "Une erreur est survenue. Réessayez ou appelez-nous directement."
      );
    } catch {
      setStatus("error");
      setServerMessage("Erreur réseau. Vérifiez votre connexion ou appelez-nous.");
    }
  };

  const reset = () => {
    setFormData(initialData);
    setErrors({});
    setStatus("idle");
    setServerMessage("");
  };

  return (
    <Section
      id="contact"
      spacing="default"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50"
    >
      <div className="absolute -top-40 right-0 w-[28rem] h-[28rem] rounded-full bg-primary-200/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 left-0 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative">
      <SectionHeader
        eyebrow="Contact"
        title={<>Une urgence ou un projet ?</>}
        description="Appelez-nous 24h/24 pour les urgences ou demandez un devis gratuit en remplissant le formulaire — réponse sous 1h."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Colonne gauche : info contact (sombre, claque sur fond clair) */}
        <Card
          variant="default"
          padding="loose"
          className="bg-primary-950! text-white border-0! shadow-2xl shadow-primary-900/20"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-warm shadow-soft-lg flex-shrink-0">
                <Icon name="phone" size={28} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-warm">
                  Urgence 24/7
                </p>
                <a
                  href={CONTACT.phoneTel}
                  className="block text-2xl font-bold hover:text-accent transition"
                >
                  {CONTACT.phone}
                </a>
                <p className="text-sm text-primary-200 mt-1">
                  Disponible 24h/24, 7j/7
                </p>
              </div>
            </div>

            <div className="border-t border-white/10" />

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 flex-shrink-0">
                  <Icon name="mail" size={20} className="text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-primary-200 font-semibold">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-base text-white hover:text-accent transition break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 flex-shrink-0">
                  <Icon name="location" size={20} className="text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-primary-200 font-semibold">
                    Adresse
                  </p>
                  <p className="text-base text-white">
                    {CONTACT.city}, {CONTACT.region}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 flex-shrink-0">
                  <Icon name="clock" size={20} className="text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-primary-200 font-semibold">
                    Horaires
                  </p>
                  <p className="text-base text-white">24h/24, 7j/7</p>
                </div>
              </li>
            </ul>

            <div className="border-t border-white/10" />

            <ul className="grid grid-cols-2 gap-3">
              {[
                "Devis gratuit",
                "Tarif annoncé",
                "Garantie décennale",
                "Paiement après intervention",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-primary-100"
                >
                  <Icon
                    name="check"
                    size={16}
                    className="text-accent flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Colonne droite : formulaire (blanche avec ombre forte) */}
        <Card
          variant="default"
          padding="loose"
          className="bg-white shadow-2xl shadow-primary-900/15 border-slate-200"
        >
          {status === "success" ? (
            <Card
              variant="default"
              padding="loose"
              className="bg-green-50 border-green-200 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                  <Icon
                    name="check-circle"
                    size={32}
                    className="text-green-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Message envoyé !
                </h3>
                <p className="text-slate-700 max-w-md">
                  Nous vous recontactons sous 1 heure (heures ouvrées). Pour
                  une urgence, appelez le{" "}
                  <a
                    href={CONTACT.phoneTel}
                    className="font-semibold text-primary-700 underline"
                  >
                    {CONTACT.phone}
                  </a>
                  .
                </p>
                <Button variant="secondary" size="md" onClick={reset}>
                  Envoyer un autre message
                </Button>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.website}
                onChange={handleChange}
                className="absolute left-[-9999px]"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Nom <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={inputClass}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <p id="err-name" className="text-sm text-red-600 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.fr"
                    className={inputClass}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <p id="err-email" className="text-sm text-red-600 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Téléphone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className={inputClass}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                  />
                  {errors.phone && (
                    <p id="err-phone" className="text-sm text-red-600 mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Ville
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={Boolean(errors.city)}
                  >
                    <option value="">Sélectionnez votre ville</option>
                    {ALL_CITIES.map((c) => (
                      <option key={c.slug} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="Autre">Autre</option>
                  </select>
                  {errors.city && (
                    <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Type d&apos;intervention
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Sélectionnez un service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-sm text-red-600 mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre besoin (panne, devis, projet…)"
                  className={`${inputClass} h-auto min-h-[120px] py-3 resize-y`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "err-message" : undefined
                  }
                />
                {errors.message && (
                  <p id="err-message" className="text-sm text-red-600 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-primary-600 focus:ring-2 focus:ring-primary-500"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? "err-consent" : undefined
                    }
                  />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    J&apos;accepte que mes données soient utilisées pour me
                    recontacter (RGPD). Voir{" "}
                    <a
                      href="/politique-confidentialite"
                      className="text-primary-700 underline hover:text-primary-800"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p id="err-consent" className="text-sm text-red-600 mt-1">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status === "error" && serverMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800"
                >
                  <Icon
                    name="alert"
                    size={18}
                    className="text-red-600 mt-0.5"
                  />
                  <p>{serverMessage}</p>
                </div>
              )}

              <Button
                variant="primary"
                size="lg"
                fullWidth
                type="submit"
                disabled={status === "sending"}
                iconRight={
                  status === "sending" ? (
                    <span
                      className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icon name="send" size={18} />
                  )
                }
              >
                {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
              </Button>

              <p className="text-center text-sm text-slate-500">
                Ou appelez directement :{" "}
                <a
                  href={CONTACT.phoneTel}
                  className="font-semibold text-primary-700 hover:text-primary-800 underline-offset-4 hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </form>
          )}
        </Card>
      </div>
      </div>
    </Section>
  );
}
