import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-cabinet",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cassard-plombier.fr"),
  title: {
    default: "Cassard Plombier Nîmes | Sanitaire & Chauffage 24h/24 | Gard (30)",
    template: "%s | Cassard Plombier Nîmes",
  },
  description:
    "Cassard Sanitaire et Chauffage, votre plombier de confiance à Nîmes et dans le Gard. Intervention 24h/24, 7j/7. Plus de 5000 avis clients positifs. Devis gratuit au 06 19 24 25 56.",
  keywords: [
    "plombier Nîmes",
    "plombier Gard",
    "plombier 30",
    "chauffagiste Nîmes",
    "sanitaire Nîmes",
    "dépannage plomberie Nîmes",
    "urgence plombier Gard",
    "fuite d'eau Nîmes",
    "installation chauffage Gard",
    "Cassard plombier",
    "plombier 24h/24 Nîmes",
  ],
  authors: [{ name: "Cassard Sanitaire et Chauffage" }],
  creator: "Cassard Sanitaire et Chauffage",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cassard-plombier.fr",
    siteName: "Cassard Sanitaire et Chauffage",
    title: "Cassard Plombier Nîmes | Sanitaire & Chauffage 24h/24",
    description:
      "Votre plombier de confiance à Nîmes et dans le Gard. Intervention rapide 24h/24. Plus de 5000 avis positifs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cassard Sanitaire et Chauffage - Plombier Nîmes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cassard Plombier Nîmes | Sanitaire & Chauffage 24h/24",
    description:
      "Votre plombier de confiance à Nîmes et dans le Gard. Intervention rapide 24h/24.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cassard-plombier.fr",
  },
  verification: {
    // À remplir avec les vrais codes de vérification
    // google: "xxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${jakarta.variable}`}>
      <head>
        <SchemaOrg />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="geo.region" content="FR-30" />
        <meta name="geo.placename" content="Nîmes" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
