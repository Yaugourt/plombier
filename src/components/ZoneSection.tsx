const zonesGard = [
  { name: "Nîmes", highlight: true, departement: "30" },
  { name: "Alès", highlight: false, departement: "30" },
  { name: "Uzès", highlight: false, departement: "30" },
  { name: "Beaucaire", highlight: false, departement: "30" },
  { name: "Bagnols-sur-Cèze", highlight: false, departement: "30" },
  { name: "Vauvert", highlight: false, departement: "30" },
  { name: "Saint-Gilles", highlight: false, departement: "30" },
  { name: "Vergèze", highlight: false, departement: "30" },
  { name: "Sommières", highlight: false, departement: "30" },
];

const zonesHerault = [
  { name: "Montpellier", highlight: false, departement: "34" },
  { name: "Sète", highlight: false, departement: "34" },
  { name: "Béziers", highlight: false, departement: "34" },
  { name: "Lunel", highlight: false, departement: "34" },
  { name: "Agde", highlight: false, departement: "34" },
];

const zonesBDR = [
  { name: "Marseille", highlight: false, departement: "13" },
  { name: "Aix-en-Provence", highlight: false, departement: "13" },
  { name: "Arles", highlight: false, departement: "13" },
  { name: "Martigues", highlight: false, departement: "13" },
  { name: "Salon-de-Provence", highlight: false, departement: "13" },
];

const zonesVaucluse = [
  { name: "Avignon", highlight: false, departement: "84" },
  { name: "Orange", highlight: false, departement: "84" },
  { name: "Carpentras", highlight: false, departement: "84" },
  { name: "Cavaillon", highlight: false, departement: "84" },
];

const stats = [
  { value: "4", label: "Départements" },
  { value: "<30min", label: "Temps d'intervention*" },
  { value: "5014", label: "Clients satisfaits" },
  { value: "24/7", label: "Disponibilité" },
];

export default function ZoneSection() {
  return (
    <section id="zone" className="py-14 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary-600 font-medium text-xs uppercase tracking-wider mb-3">
              Notre zone d&apos;intervention
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Urgence plombier <span className="gradient-text">Nîmes Gard</span> et régions limitrophes
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Cassard Sanitaire et Chauffage intervient en <strong>urgence 24h/24</strong> dans le Gard (30), 
              l&apos;Hérault (34), les Bouches-du-Rhône (13) et le Vaucluse (84). 
              Intervention rapide pour toutes vos urgences plomberie.
            </p>

            {/* Gard */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                Gard (30)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {zonesGard.map((zone) => (
                  <span
                    key={zone.name}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                      zone.highlight
                        ? "bg-primary-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-primary-100 hover:text-primary-700"
                    }`}
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {zone.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Hérault */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                Hérault (34)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {zonesHerault.map((zone) => (
                  <span
                    key={zone.name}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {zone.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Bouches-du-Rhône */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Bouches-du-Rhône (13)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {zonesBDR.map((zone) => (
                  <span
                    key={zone.name}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {zone.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Vaucluse */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                Vaucluse (84)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {zonesVaucluse.map((zone) => (
                  <span
                    key={zone.name}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {zone.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-xl md:text-2xl font-bold text-primary-600 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder pour carte Google Maps ou image du Gard */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-300 p-6">
                <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-primary-500 font-medium text-center text-sm">
                  Zone d&apos;intervention
                  <br />
                  <span className="text-xs text-primary-400">(Gard - 30)</span>
                </span>
              </div>
              
              {/* Decorative pins */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    <span className="text-white text-[10px] font-bold">N</span>
                  </div>
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-primary-600"></div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md p-3 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Intervention garantie</p>
                  <p className="text-[10px] text-slate-500">4 départements couverts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 mt-6 text-center">
          * Temps d&apos;intervention moyen pour les urgences plomberie en zone urbaine. 
          Peut varier selon la localisation.
        </p>
      </div>
    </section>
  );
}

