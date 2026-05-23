"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { COMPANY, CONTACT } from "@/lib/constants";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#zone", label: "Zones" },
  { href: "#avis", label: "Avis clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock + focus + Esc handling
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);

    // Focus first link
    const t = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", handleKey);
      window.clearTimeout(t);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group min-h-[44px]">
            <div className="relative w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <ImageWithFallback
                src="/logo.png"
                alt={COMPANY.name}
                width={40}
                height={40}
                className="object-contain"
                fallback={<span className="text-white font-bold text-lg">C</span>}
              />
            </div>
            <div
              className={`leading-tight transition-colors ${
                isScrolled ? "text-primary-900" : "text-white"
              }`}
            >
              <span className="font-bold text-base block">{COMPANY.shortName}</span>
              <span className="text-xs opacity-80 block">{COMPANY.tagline}</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Téléphone Desktop */}
          <div className="hidden md:block">
            <Button
              as="a"
              href={CONTACT.phoneTel}
              variant={isScrolled ? "urgence" : "white"}
              size="md"
              iconLeft={<Icon name="phone" size={18} />}
              aria-label={`Appeler le ${CONTACT.phone}`}
            >
              {CONTACT.phone}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg transition-colors relative z-[60] ${
              isMobileMenuOpen
                ? "text-white"
                : isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block w-6 h-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 bg-primary-950/95 backdrop-blur-md transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6 safe-pb">
          <nav className="flex-1 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={i === 0 ? firstMobileLinkRef : undefined}
                onClick={closeMenu}
                className="text-2xl font-semibold text-white py-4 border-b border-white/10 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Button
              as="a"
              href={CONTACT.phoneTel}
              variant="urgence"
              size="lg"
              fullWidth
              iconLeft={<Icon name="phone" size={20} />}
              aria-label={`Appeler le ${CONTACT.phone}`}
              onClick={closeMenu}
            >
              Appeler — {CONTACT.phone}
            </Button>
            <p className="text-center text-primary-200/70 text-sm mt-3">
              Disponible 24h/24 — 7j/7
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
