'use client'

import { ArrowRight, Briefcase, Building2, Check, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    icon: Building2,
    sector: 'Agence immobilière',
    company: 'Merino Immobilier',
    problem: 'Gestion administrative chronophage : mails post-LinkedIn, frais kilométriques, comptes-rendus de visite.',
    results: ['Mails post-LinkedIn automatisés', 'Frais kilométriques structurés', 'Comptes-rendus générés plus vite'],
    metric: { value: '6h', label: 'gagnées / semaine' },
  },
  {
    icon: ShoppingBag,
    sector: 'Commerce fruits et légumes',
    company: 'Marché local',
    problem: 'Stock, prix Rungis, fournisseurs et DLC suivis trop manuellement.',
    results: ['Stock alimenté via factures', 'CA et marges visibles', 'Suivi DLC automatisé'],
    metric: { value: '30%', label: 'de productivité' },
  },
  {
    icon: Briefcase,
    sector: 'Maîtrise d’œuvre',
    company: 'Renovie Nancy',
    problem: 'Documents et suivi client dispersés, avec perte de temps sur la recherche d’informations.',
    results: ['Synthèse financière', 'Résumé projet instantané', 'Recherche sémantique documentaire'],
    metric: { value: '2h', label: 'gagnées / semaine' },
  },
]

export default function CaseStudies() {
  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cas-clients" className="atelier-section border-y border-white/5">
      <div className="atelier-container">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="atelier-eyebrow">Cas clients</p>
            <h2 className="atelier-title mt-3 text-[clamp(2.35rem,4.5vw,4.8rem)]">
              Les résultats passent avant les effets.
            </h2>
          </div>
          <p className="atelier-lead max-w-2xl lg:justify-self-end">
            Immobilier, commerce, maîtrise d’œuvre : chaque projet part d’un irritant opérationnel,
            puis se mesure en heures gagnées, tâches supprimées ou décisions accélérées.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => {
            const Icon = study.icon
            return (
              <article key={study.company} className="atelier-card flex min-h-[34rem] flex-col p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="atelier-eyebrow">{study.sector}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{study.company}</h3>
                    </div>
                  </div>
                </div>

                <div className="my-8 border-y border-white/10 py-8">
                  <p className="font-display text-[5.5rem] leading-none text-cyan-100">{study.metric.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.08em] text-white/45">{study.metric.label}</p>
                </div>

                <p className="leading-7 text-white/62">{study.problem}</p>

                <ul className="mt-6 space-y-3">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                      <Check className="mt-1 h-4 w-4 flex-none text-lime-200" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-12 atelier-card p-6 text-center lg:p-9">
          <h3 className="font-display text-4xl text-white lg:text-5xl">Votre métier a ses contraintes. L’agent doit les comprendre.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Le premier rendez-vous sert à identifier les tâches où l’IA peut vraiment produire un gain mesurable.
          </p>
          <Button
            size="lg"
            onClick={scrollToAudit}
            className="atelier-button-primary mt-7 rounded-lg px-7 text-base font-semibold"
          >
            Obtenir mon audit gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
