const zones = [
  { name: "Nîmes", highlight: true },
  { name: "Alès", highlight: false },
  { name: "Uzès", highlight: false },
  { name: "Beaucaire", highlight: false },
  { name: "Bagnols-sur-Cèze", highlight: false },
  { name: "Vauvert", highlight: false },
  { name: "Saint-Gilles", highlight: false },
  { name: "Vergèze", highlight: false },
  { name: "Sommières", highlight: false },
  { name: "Marguerittes", highlight: false },
  { name: "Milhaud", highlight: false },
  { name: "Bouillargues", highlight: false },
];

const stats = [
  { value: "30+", label: "Communes desservies" },
  { value: "<30min", label: "Temps d'intervention*" },
  { value: "5014", label: "Clients satisfaits" },
  { value: "24/7", label: "Disponibilité" },
];

export default function ZoneSection() {
  return (
    <section id="zone" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Notre zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Plombier à <span className="gradient-text">Nîmes</span> et dans tout le <span className="gradient-text">Gard</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Cassard Sanitaire et Chauffage intervient rapidement dans toute la région nîmoise 
              et le département du Gard (30). Où que vous soyez, nous sommes là pour vous.
            </p>

            {/* Zones tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {zones.map((zone) => (
                <span
                  key={zone.name}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    zone.highlight
                      ? "bg-primary-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-primary-100 hover:text-primary-700"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {zone.name}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-slate-800 text-white">
                + Tout le Gard (30)
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder pour carte Google Maps ou image du Gard */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-300 p-8">
                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-primary-500 font-medium text-center">
                  Carte de la zone d&apos;intervention
                  <br />
                  <span className="text-sm text-primary-400">(Gard - 30)</span>
                </span>
              </div>
              
              {/* Decorative pins */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary-600"></div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Intervention garantie</p>
                  <p className="text-xs text-slate-500">Dans tout le département du Gard</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-8 text-center">
          * Temps d&apos;intervention moyen en zone urbaine nîmoise. Peut varier selon la localisation et la disponibilité.
        </p>
      </div>
    </section>
  );
}

