import React from "react";
import { TextChange } from "./TextChange";
import Image from "next/image";
import { Pointer } from "lucide-react";
import {PointerHighlightDemo} from "./AcernityComponents/PointerAcernity";

export default function Accueil() {
  return (
    <>
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] border-black z-10 relative overflow-hidden px-4"
      >
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Texte à gauche */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl leading-tight md:leading-snug font-bold mb-4 animate-fade-in">
              Gagnez <span className="text-cyan-700">5h/semaine</span> avec{" "}
              <span className="bg-gradient-to-r from-cyan-700 to-cyan-200 bg-clip-text text-transparent">
                AetherIA
              </span>
            </h1>

            <h2 className="text-2xl text-gray-500 italic mb-6">
              L’IA qui <span><TextChange /></span> 
            </h2>
            <p className="font-roboto text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[var(--color-text)]/80 animate-fade-in-delay">
              Automatisez vos <span className="text-cyan-700 font-semibold">emails, WhatsApp, agenda et CRM</span> avec un seul agent IA multi‑canal. Tout communique enfin ensemble, sans effort. Moins de tâches répétitives, plus de clients.
            </p>

            <div className="mb-4">
              <PointerHighlightDemo />
            </div>
          </div>

          {/* Image à droite */}
          <div className="w-full md:w-3/5  flex justify-center md:justify-end">
            <img
              src="/ArtificialHome.svg"
              alt="Illustration automatisation"
              className="max-w-full md:max-w-lg h-auto animate-floating"
            />
          </div>
        </div>
      </section>
    </>
  );
}
