'use client';
import React from 'react';

export default function CasClients() {
  const casClients = [
    {
      secteur: "Agence Immobilier",
      client: "Merino Immobilier",
      probleme: "Gestion administrative chronophage : mails post-LinkedIn, frais kilométriques, comptes-rendus de visite",
      solution: "Automatisation complète des processus administratifs avec assistant IA",
      resultats: [
        "Automatisation mails post-LinkedIn",
        "Gestion automatique frais kilométriques",
        "Génération automatique comptes-rendus visite",
        "Gain de 6h/semaine sur l'administratif"
      ],
      image: "/automation.png"
    },
    {
      secteur: "Commerce Fruits & Légumes", 
      client: "Marché Local",
      probleme: "Gestion manuelle complexe : stock, prix Rungis, fournisseurs, DLC",
      solution: "Dashboard IA complet avec gestion automatique du stock et visualisation CA/marges",
      resultats: [
        "Stock rentré automatiquement via factures fournisseurs",
        "Visualisation temps réel CA, marges et bénéfices",
        "Optimisation prix et gestion DLC automatique",
        "Cahier des comptes intégré avec alertes stock"
      ],
      image: "/integration.png"
    },
    {
      secteur: "Conseil Patrimonial",
      client: "Conseiller Patrimoine", 
      probleme: "Besoin d'expertise IA spécialisée dans le conseil patrimonial",
      solution: "Agent IA dédié au conseil patrimonial avec expertise sectorielle",
      resultats: [
        "Assistant IA spécialisé domaine patrimonial",
        "Analyse automatique profils clients",
        "Recommandations personnalisées",
        "Optimisation conseils selon réglementation"
      ],
      image: "/chatbot.png"
    }
  ];

  return (
    <section id="cas-clients" className="py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto">
        {/* Application directe du style */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 drop-shadow-lg">
Découvrez les entreprises que nous accompagnons déjà
        </h2>
        <p className="text-xl text-center mb-16 opacity-80 max-w-3xl mx-auto">
       Des solutions IA concrètes, adaptées à chaque métier.
        </p>

        <div className="space-y-16">
          {casClients.map((cas, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={cas.image} 
                  alt={`Solution IA pour ${cas.secteur}`}
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-cyan-200 p-2"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {cas.secteur}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{cas.client}</h3>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold mb-2">Problème initial</h4>
                  <p className="text-gray-600">{cas.probleme}</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold mb-2">Solution IA mise en place</h4>
                  <p className="text-gray-600">{cas.solution}</p>
                </div>

                <div className="border-l-4 border-green-400 pl-4 bg-green-50 p-4 rounded">
                  <h4 className="font-semibold mb-3 text-green-800">Résultats obtenus</h4>
                  <ul className="space-y-2">
                    {cas.resultats.map((resultat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">{resultat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à obtenir des résultats similaires ?
          </h2>
          <p className="text-lg mb-6 opacity-80">
            Chaque métier est unique. Nous adaptons notre approche à vos spécificités.
          </p>
          <a 
            href="#audit-gratuit"
            className="button px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition inline-block"
          >
            Obtenir mon audit gratuit (30min)
          </a>
        </div>
      </div>
    </section>
  );
}
