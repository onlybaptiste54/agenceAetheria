'use client';
import React from 'react';

export default function Reassurance() {
  const points = [
    {
      icon: "🔧",
      titre: "Pas besoin d'être développeur",
      description: "Nos solutions sont conçues pour être utilisées par tous. Interface simple, formation incluse."
    },
    {
      icon: "🔒", 
      titre: "Sécurité et confidentialité",
      description: "Vos données restent chez vous. Conformité RGPD, hébergement sécurisé, accès contrôlé."
    },
    {
      icon: "💰",
      titre: "ROI garanti",
      description: "Retour sur investissement visible dès le 1er mois. Si pas satisfait, remboursement intégral."
    },
    {
      icon: "🎯",
      titre: "Approche sur-mesure",
      description: "Chaque solution est adaptée à votre métier. Pas de solutions génériques, que du personnalisé."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous ne sommes pas une agence classique. Nous créons des partenariats durables avec nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{point.titre}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Vous hésitez encore ?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Commencez par un audit gratuit. Aucun engagement, que des conseils pratiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#audit-gratuit"
              className="button px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
            >
              Audit gratuit (30min)
            </a>
            <a 
              href="#cas-clients"
              className="button px-8 py-4 rounded-lg border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold transition"
            >
              Voir nos résultats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
