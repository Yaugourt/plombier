"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#zone", label: "Zone d'intervention" },
  { href: "#avis", label: "Avis clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              {/* Placeholder pour le logo - à remplacer */}
              <ImageWithFallback
                src="/logo.png"
                alt="Cassard Sanitaire et Chauffage"
                width={48}
                height={48}
                className="object-contain"
                fallback={<span className="text-white font-bold text-xl">C</span>}
              />
            </div>
            <div className={`transition-colors ${isScrolled ? "text-primary-900" : "text-white"}`}>
              <span className="font-bold text-lg leading-tight block">Cassard</span>
              <span className="text-xs opacity-80 leading-tight block">Sanitaire & Chauffage</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Téléphone */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`text-right ${isScrolled ? "text-slate-600" : "text-white/80"}`}>
              <span className="text-xs block">Urgence 24h/24</span>
              <span className="font-semibold">Intervention rapide</span>
            </div>
            <a
              href="tel:0619242556"
              className="relative flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary-600/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <svg
                className="w-5 h-5"
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
              <span>06 19 24 25 56</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:0619242556"
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold mt-2 transition-all"
              >
                <svg
                  className="w-5 h-5"
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
                <span>06 19 24 25 56</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

