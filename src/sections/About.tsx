'use client'

import { Heart, Lightbulb, Linkedin, Mail, Target, Users } from 'lucide-react'
import Image from 'next/image'

const values = [
  { icon: Target, title: 'Approche pragmatique', description: 'Des solutions concrètes, pas de promesses vagues.' },
  { icon: Users, title: 'Accompagnement humain', description: 'À vos côtés de la conception à l’autonomie.' },
  { icon: Lightbulb, title: 'Innovation accessible', description: 'L’IA au service de votre métier, pas l’inverse.' },
  { icon: Heart, title: 'Transparence totale', description: 'Pas de jargon, pas de coûts cachés.' },
]

export default function About() {
  return (
    <section id="about" className="atelier-section border-t border-white/5">
      <div className="atelier-container">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="atelier-card p-5 lg:p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <Image src="/baptisteImage.webp" alt="Baptiste Beroual, fondateur d'AetherIA" fill className="object-cover" />
            </div>
          </div>

          <div>
            <p className="atelier-eyebrow">Derrière AetherIA</p>
            <h2 className="atelier-title mt-3 text-[clamp(2.45rem,4.6vw,4.9rem)]">
              Une agence IA qui part du terrain.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-white/72">
              <p>
                Je suis <span className="font-semibold text-cyan-100">Baptiste Beroual</span>, fondateur d’AetherIA,
                agence IA basée à Nancy.
              </p>
              <p>
                J’aide les indépendants et les PME, dans le Grand Est et partout en France,
                à automatiser leurs processus, connecter leurs outils et gagner en efficacité
                grâce à des agents IA sur mesure.
              </p>
              <p>
                Chaque projet est conçu autour d’un problème concret : une tâche répétitive,
                une recherche d’information trop lente, un suivi client dispersé ou une donnée mal exploitée.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/baptiste-beroual-27865326b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-white/72 transition-colors hover:text-white">
                <Linkedin className="h-4 w-4 text-cyan-200" />
                LinkedIn
              </a>
              <a href="mailto:agenceaetheria@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-white/72 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-cyan-200" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <article key={value.title} className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                <Icon className="h-5 w-5 text-cyan-200" />
                <h3 className="mt-4 font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{value.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
