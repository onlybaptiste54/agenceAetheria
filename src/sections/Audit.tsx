'use client'

import { ArrowRight, Calendar, Clock, FileCheck, Route, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  { icon: FileCheck, title: 'Analyse complète', description: 'Vos processus actuels décortiqués pour identifier les points de friction.' },
  { icon: TrendingUp, title: 'Gains identifiés', description: 'Une estimation réaliste du temps et des ressources économisables.' },
  { icon: Route, title: 'Roadmap claire', description: 'Un plan d’action priorisé, lisible, avec les premières automatisations à lancer.' },
]

export default function Audit() {
  return (
    <section id="audit" className="atelier-section">
      <div className="atelier-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="atelier-eyebrow">Audit gratuit</p>
            <h2 className="atelier-title mt-3 text-[clamp(2.45rem,4.8vw,5rem)]">
              Trente minutes pour trouver le premier gain utile.
            </h2>
            <p className="atelier-lead mt-6 max-w-2xl">
              On ne commence pas par “quelle IA utiliser ?”. On commence par vos tâches :
              ce qui prend du temps, ce qui se répète, ce qui bloque vos équipes.
            </p>

            <div className="mt-9 grid gap-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <article key={benefit.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-1 leading-6 text-white/58">{benefit.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="atelier-card p-6 lg:p-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-display mt-6 text-4xl leading-none text-white">Réserver votre créneau</h3>
              <p className="mt-3 text-white/55">Visio de 30 minutes, gratuite et sans engagement.</p>
            </div>

            <div className="my-8 space-y-3 border-y border-white/10 py-6">
              <div className="flex items-center justify-between rounded-lg bg-white/[0.035] p-4">
                <div className="flex items-center gap-3 text-white/72">
                  <Clock className="h-5 w-5 text-cyan-200" />
                  <span>Durée</span>
                </div>
                <span className="font-semibold text-white">30 minutes</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/[0.035] p-4">
                <div className="flex items-center gap-3 text-white/72">
                  <FileCheck className="h-5 w-5 text-cyan-200" />
                  <span>Sortie</span>
                </div>
                <span className="font-semibold text-white">Plan d’action</span>
              </div>
            </div>

            <a href="https://calendly.com/agenceaetheria/30min" target="_blank" rel="noopener noreferrer" className="block">
              <Button size="lg" className="atelier-button-primary w-full rounded-lg py-6 text-base font-semibold">
                Réserver mon audit gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="mt-4 text-center text-sm text-white/42">Places limitées selon les créneaux disponibles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
