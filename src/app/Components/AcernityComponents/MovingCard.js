"use client";

import React from "react";
import { InfiniteMovingCards } from "./MovingCardComponent";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Grâce à leur assistant IA, nous répondons plus vite aux locataires et centralisons nos demandes. C’est devenu un vrai atout dans notre relation client.",
    name: "Agence Merino",
    title: "Agence immobilière",
  },
  {
    quote:
      "L’intégration automatisée des rendez-vous et du suivi client nous fait gagner du temps tous les jours. Un partenaire sérieux et à l’écoute.",
    name: "Nathan Conseil Patrimoine",
    title: "Conseiller en gestion de patrimoine",
  },
  {
    quote:
      "L'automatisation des messages sur WhatsApp nous a libéré du temps pendant les événements, tout en gardant un lien fluide avec le public.",
    name: "NancyByNight",
    title: "Plateforme événementielle",
  },
  {
    quote:
      "On a réduit de moitié nos tâches manuelles avec leur solution. C’est clair, efficace, et bien intégré à nos outils existants.",
    name: "Charles D.",
    title: "Consultant RH indépendant",
  },
  {
    quote:
      "Je recommande vivement ! En tant que coach, je peux me concentrer sur mes clients sans me soucier de l’organisation ou des relances.",
    name: "Sophie A.",
    title: "Coach en développement personnel",
  },
];
