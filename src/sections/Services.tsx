'use client'

import { ArrowRight, BarChart3, Check, FileText, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: FileText,
    title: 'Assistants IA métier',
    subtitle: 'Agents IA',
    description: 'Création d’agents IA connectés à vos documents internes pour interroger instantanément votre base de connaissances.',
    features: ['Procédures accessibles instantanément', 'Réponses basées sur vos documents', 'Mise à jour des connaissances', 'Interface conversationnelle claire'],
  },
  {
    icon: Workflow,
    title: 'Automatisation des processus',
    subtitle: 'CRM et workflows',
    description: 'Suppression des tâches répétitives et gestion automatique des relances pour gagner du temps sans changer toute votre organisation.',
    features: ['Élimination de la double saisie', 'Synchronisation des données', 'Relances intelligentes', 'Intégration avec vos outils existants'],
  },
  {
    icon: BarChart3,
    title: 'Analyse de données',
    subtitle: 'Dashboard',
    description: 'Création de tableaux de bord dynamiques pour visualiser les KPIs importants et accélérer la prise de décision.',
    features: ['KPIs en temps réel', 'Rapports automatisés', 'Tendances et alertes', 'Export et partage facilités'],
  },
]

export default function Services() {
  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="atelier-section border-t border-white/5">
      <div className="atelier-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="atelier-eyebrow">Services</p>
            <h2 className="atelier-title mt-3 text-[clamp(2.35rem,4.6vw,4.9rem)]">
              Des agents IA construits autour de votre métier.
            </h2>
          </div>
          <p className="atelier-lead max-w-2xl lg:justify-self-end">
            On ne vend pas un outil magique. On transforme un process précis en système fiable :
            documents, relances, reporting, recherche interne, CRM ou factures.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="atelier-card group flex min-h-[32rem] flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-4xl text-white/20">0{index + 1}</span>
                </div>

                <div className="mt-8">
                  <p className="atelier-eyebrow">{service.subtitle}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/62">{service.description}</p>
                </div>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                      <Check className="mt-1 h-4 w-4 flex-none text-cyan-200" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToAudit}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
                >
                  Cadrer ce besoin
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-white/65">
            Besoin d’une solution personnalisée ? On part de votre quotidien, pas d’un catalogue figé.
          </p>
          <Button
            size="lg"
            onClick={scrollToAudit}
            className="atelier-button-primary rounded-lg px-6 text-base font-semibold"
          >
            Discuter du projet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
