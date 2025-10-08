'use client';
import React from 'react';

export default function ProblemesClients() {
  const problemes = [
    {
      secteur: "Avocats & Juristes",
      probleme: "Emails clients non traités, relances oubliées, planning surchargé",
      impact: "Perte de 30% des dossiers, stress chronique, réputation dégradée",
      solution: "Assistant IA qui trie, répond et planifie automatiquement"
    },
    {
      secteur: "Grossistes & Distribution", 
      probleme: "Prix non optimaux, stock mal géré, clients mécontents",
      impact: "Marges réduites de 15%, rupture de stock, perte de CA",
      solution: "CRM IA qui conseille prix selon Rungis + météo + historique"
    },
    {
      secteur: "Consultants & Freelances",
      probleme: "Prospection manuelle, suivi client chaotique, facturation tardive", 
      impact: "50% du temps perdu en admin, impayés, croissance limitée",
      solution: "Dashboard + chatbot + automatisation client complète"
    },
    {
      secteur: "E-commerce & Retail",
      probleme: "Commandes non suivies, support client saturé, abandons paniers",
      impact: "40% d&apos;abandons, mauvaises reviews, CA en baisse",
      solution: "Système IA multi-canal : WhatsApp + email + relances auto"
    }
  ];

  return (
    <section id="problemes-clients" className="py-20 px-4 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ces problèmes métier vous parlent ?
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto opacity-80">
          Vous n&apos;êtes pas seul. Chaque secteur a ses frustrations. L&apos;IA peut les résoudre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemes.map((item, index) => (
            <div key={index} className="bg-[var(--color-bg)] border border-[var(--color-border)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">{item.secteur}</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold mb-2">Problème actuel</h4>
                  <p className="opacity-80">{item.probleme}</p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold mb-2">Impact sur votre business</h4>
                  <p className="opacity-80">{item.impact}</p>
                </div>
                
                <div className="border-l-4 border-green-400 pl-4 bg-cyan-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Notre solution IA</h4>
                  <p className="opacity-80">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">
            Vous vous reconnaissez dans l&apos;un de ces cas ?
          </h2>
          <p className="text-lg mb-8 opacity-80">
            Nous créons des solutions sur mesure, pas du &quot;plug &amp; play&quot;. Chaque métier a ses spécificités.
          </p>
          <a 
            href="#cas-clients"
            className="button px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition inline-block"
          >
            Voir comment nous résolvons ces problèmes
          </a>
        </div>
      </div>
    </section>
  );
}
