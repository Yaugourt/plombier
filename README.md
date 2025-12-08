# Site Cassard Sanitaire et Chauffage

Site vitrine moderne pour plombier à Nîmes et dans le Gard.

## 🚀 Déploiement sur Vercel

1. Push le code sur GitHub
2. Connecter le repo à Vercel
3. Ajouter les variables d'environnement (voir ci-dessous)
4. Deploy !

## 📸 Photos de travaux

Les photos sont dans `/public/Travaux/` et sont automatiquement utilisées dans :
- Section Hero (image principale)
- Section Services (une photo par service)
- Galerie de travaux (toutes les photos)

## ⭐ Configuration des avis Google

Pour afficher les **vrais avis Google** au lieu des avis de fallback :

### 1. Obtenir une clé API Google

1. Va sur [Google Cloud Console](https://console.cloud.google.com/)
2. Crée un projet ou sélectionne-en un
3. Active l'API "Places API"
4. Va dans "Identifiants" → "Créer des identifiants" → "Clé API"
5. Copie ta clé API

### 2. Trouver le Place ID

1. Va sur [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Recherche "Cassard Sanitaire et Chauffage Nîmes"
3. Copie le **Place ID** (ex: `ChIJ...`)

### 3. Configurer les variables d'environnement

**Sur Vercel :**
1. Va dans Settings → Environment Variables
2. Ajoute :
   - `GOOGLE_API_KEY` = ta clé API
   - `GOOGLE_PLACE_ID` = ton Place ID

**En local (`.env.local`) :**
```env
GOOGLE_API_KEY=ta_cle_api_ici
GOOGLE_PLACE_ID=ton_place_id_ici
```

### 4. Sécuriser la clé API (important !)

⚠️ **Ne jamais exposer ta clé API côté client !**

- L'API route `/api/reviews` s'exécute côté serveur uniquement
- La clé API n'est jamais visible dans le navigateur
- Limite les restrictions sur ta clé API dans Google Cloud Console :
  - Restreindre à "Places API" uniquement
  - Ajouter des restrictions HTTP (domaine Vercel uniquement)

## 📝 Structure du projet

```
src/
├── app/
│   ├── api/reviews/     # API route pour récupérer les avis Google
│   ├── layout.tsx       # SEO + metadata
│   └── page.tsx         # Page d'accueil
└── components/
    ├── Header.tsx       # Navigation sticky
    ├── HeroSection.tsx  # Accroche principale
    ├── ServicesSection.tsx
    ├── GallerySection.tsx # Galerie travaux
    ├── ZoneSection.tsx
    ├── WhyUsSection.tsx
    ├── TestimonialsSection.tsx # Avis clients (Google)
    ├── ContactSection.tsx
    ├── Footer.tsx
    └── GoogleRatingBadge.tsx # Badge note Google dynamique
```

## 🎨 Images à ajouter

Place ces images dans `/public/` :
- `logo.png` - Logo Cassard
- `og-image.jpg` - Image pour partage social (1200x630px)
- `favicon.ico`
- `apple-touch-icon.png`

## 🔧 Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start
```

## 📞 Support

Pour toute question sur la configuration des avis Google, consulte la [doc Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview).
