'use client'

import { ArrowRight, BriefcaseBusiness, ClipboardList, PlugZap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 lg:pt-28">
      <div className="atelier-container grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="max-w-4xl">
          <p className="atelier-eyebrow mb-5">Agence IA à Nancy pour PME</p>

          <h1 className="atelier-title text-[clamp(2.7rem,5.7vw,5.8rem)]">
            Agents IA sur mesure. Moins de tâches, plus de travail utile.
          </h1>

          <p className="atelier-lead mt-6 max-w-2xl text-base sm:text-lg">
            AetherIA conçoit des agents IA et des automatisations connectés à vos vrais documents,
            vos outils métier et vos process. L’objectif : gagner du temps sans ajouter une couche
            de complexité à votre entreprise.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => scrollToSection('#audit')}
              className="atelier-button-primary h-12 rounded-lg px-6 text-base font-semibold group"
            >
              Audit gratuit 30 min
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#cas-clients')}
              className="atelier-button-ghost h-12 rounded-lg px-6 text-base hover:bg-white/10 hover:text-white"
            >
              Voir les cas clients
            </Button>
          </div>

          <dl className="mt-8 grid max-w-2xl gap-4 border-t border-white/10 pt-5 sm:grid-cols-3">
            <div>
              <dt className="font-display text-3xl text-white lg:text-4xl">5 h</dt>
              <dd className="mt-1 text-sm text-white/50">gagnées par semaine</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-white lg:text-4xl">40%</dt>
              <dd className="mt-1 text-sm text-white/50">de productivité</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-white lg:text-4xl">Nancy</dt>
              <dd className="mt-1 text-sm text-white/50">Grand Est et France</dd>
            </div>
          </dl>
        </div>

        <div className="atelier-card p-5 lg:p-6">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image src="/baptisteImage.webp" alt="Baptiste Beroual, fondateur d'AetherIA" fill className="object-cover" priority />
            </div>
            <div>
              <p className="atelier-eyebrow">Diagnostic live</p>
              <p className="mt-1 font-display text-2xl leading-tight text-white">
                On part de vos tâches répétitives, puis on branche l’agent à vos outils.
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {[
              { icon: ClipboardList, step: '01', title: 'Cartographier les tâches chronophages', text: 'Saisie, relances, recherche documentaire, synthèses, reporting.' },
              { icon: PlugZap, step: '02', title: 'Connecter documents, CRM, factures et emails', text: 'L’agent travaille sur votre contexte réel, pas sur une démo générique.' },
              { icon: BriefcaseBusiness, step: '03', title: 'Lancer un agent testable en conditions réelles', text: 'Un prototype concret, mesurable, puis une feuille de route claire.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-white/90">{item.step}</span>
                      <p className="text-base font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/55">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-5 rounded-lg border border-lime-300/20 bg-lime-300/10 p-4 text-sm text-white/70">
            <span>Direction claire : moins de spectacle IA, plus de livrables utiles.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
