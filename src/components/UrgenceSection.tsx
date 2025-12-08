export default function UrgenceSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-red-100 text-red-700 font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6 animate-pulse">
              🚨 URGENCE 24H/24
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Urgence plombier <span className="text-red-600">Nîmes Gard</span>
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
              Fuite d&apos;eau, canalisation bouchée, panne de chauffage ? 
              <strong> Intervention rapide 24h/24, 7j/7</strong> dans le Gard, l&apos;Hérault, 
              les Bouches-du-Rhône et le Vaucluse.
            </p>
          </div>

          {/* Urgence CTA */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-red-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Besoin d&apos;un plombier en urgence ?
                </h3>
                <p className="text-lg text-slate-600 mb-4">
                  Appelez-nous maintenant pour une intervention rapide dans tout le Gard, 
                  l&apos;Hérault, les Bouches-du-Rhône et le Vaucluse.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intervention sous 30 min*
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Disponible week-end et jours fériés
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Devis gratuit sur place
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="tel:0619242556"
                  className="group relative inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-red-600/50"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                  </span>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Appelez maintenant</div>
                    <div className="text-2xl">06 19 24 25 56</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Types d'urgences */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fuite d&apos;eau</h3>
              <p className="text-slate-600">
                Fuite d&apos;eau urgente à Nîmes, Montpellier, Marseille ou Avignon ? 
                Intervention immédiate pour stopper les dégâts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Canalisation bouchée</h3>
              <p className="text-slate-600">
                Évier, WC ou douche bouchés ? Débouchage d&apos;urgence dans tout le Gard, 
                l&apos;Hérault, les Bouches-du-Rhône et le Vaucluse.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Panne de chauffage</h3>
              <p className="text-slate-600">
                Plus de chauffage en hiver ? Réparation d&apos;urgence chaudière, pompe à chaleur 
                ou radiateur dans toute la région.
              </p>
            </div>
          </div>

          {/* Zones d'intervention urgence */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Urgence plombier : zones d&apos;intervention
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Gard (30)</div>
                <p className="text-sm text-slate-600">Nîmes, Alès, Uzès, Beaucaire...</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Hérault (34)</div>
                <p className="text-sm text-slate-600">Montpellier, Sète, Béziers, Lunel...</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Bouches-du-Rhône (13)</div>
                <p className="text-sm text-slate-600">Marseille, Aix, Arles, Martigues...</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Vaucluse (84)</div>
                <p className="text-sm text-slate-600">Avignon, Orange, Carpentras, Cavaillon...</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-8 text-center">
            * Temps d&apos;intervention moyen en zone urbaine. Peut varier selon la localisation exacte et la disponibilité.
          </p>
        </div>
      </div>
    </section>
  );
}

