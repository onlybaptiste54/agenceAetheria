"use client";

import React, { useState } from "react";
const faqs = [
  {
    question: "Qu'est-ce qu'Aetheria propose concrètement ?",
    answer:
      "Aetheria propose une solution tout-en-un basée sur une IA avancée pour optimiser votre gestion client et votre organisation : automatisation des interactions via WhatsApp, e-mail et formulaires, gestion intelligente des e-mails, prise de rendez-vous autonome, synchronisation de vos outils (CRM, agenda, facturation), gestion automatisée des données et diffusion d’informations personnalisées pour renforcer votre image professionnelle.",
  },
  {
    question: "À qui s’adresse la solution Aetheria ?",
    answer:
      "Aetheria s’adresse à tous ceux qui souhaitent automatiser leur relation client, optimiser leur organisation et projeter une image professionnelle, qu’il s’agisse d’indépendants, d’entrepreneurs ou d’équipes de toute taille.",
  },
  {
    question: "Dois-je être à l’aise avec la technologie ?",
    answer:
      "Non, aucune compétence technique n’est requise. Aetheria offre une installation clé en main, intégrée à vos outils existants (WhatsApp Business, Google Calendar, CRM, etc.), avec une configuration entièrement prise en charge par notre équipe.",
  },
  {
    question: "Quels résultats puis-je attendre d’Aetheria ?",
    answer:
      "Avec Aetheria, vous réduisez les tâches répétitives, répondez instantanément à vos clients, optimisez votre organisation et renforcez votre crédibilité professionnelle, vous permettant de vous concentrer sur l’essentiel de votre activité.",
  },
  {
    question: "Comment puis-je obtenir de l’aide si besoin ?",
    answer:
      "Notre équipe est à votre disposition pour un accompagnement personnalisé. Contactez-nous par e-mail (contact@agenceaetheria.com) ou par téléphone (06 58 21 48 19) pour toute question ou assistance.",
  },
];


export default function FaqSection() {
const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="py-20 px-4 max-w-4xl mx-auto"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Foire aux questions</h2>
        <p className="text-lg text-[var(--color-text)]/70">
          Voici les réponses aux questions les plus fréquentes à propos d’Aetheria.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg transition-all"
            style={{ borderColor: "var(--form-border)", backgroundColor: "var(--form-bg)" }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-[var(--color-text)]/90">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
