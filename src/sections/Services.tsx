'use client'

import { useEffect, useRef, useState } from 'react'
import { Bot, Workflow, BarChart3, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TiltCard from '@/components/TiltCard'

const services = [
  {
    icon: Bot, title: 'Assistants IA Métier', subtitle: 'Agents IA',
    description: 'Création d\'agents IA connectés à vos documents internes pour interroger instantanément votre base de connaissances.',
    features: ['Cours, règlements, procédures accessibles instantanément', 'Réponses précises basées sur vos documents', 'Mise à jour automatique des connaissances', 'Interface conversationnelle intuitive'],
    color: 'cyan', gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    icon: Workflow, title: 'Automatisation des processus', subtitle: 'CRM',
    description: 'Suppression des tâches répétitives et gestion automatique des workflows de relance pour plus d\'efficacité.',
    features: ['Élimination de la double saisie', 'Synchronisation automatique des données', 'Workflows de relance intelligents', 'Intégration avec vos outils existants'],
    color: 'purple', gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: BarChart3, title: 'Analyse de Données', subtitle: 'Dashboard',
    description: 'Création de tableaux de bord dynamiques pour visualiser les KPIs et faciliter la prise de décision.',
    features: ['Visualisation temps réel des KPIs', 'Rapports automatisés', 'Prédictions et tendances', 'Export et partage facilités'],
    color: 'emerald', gradient: 'from-emerald-500/20 to-teal-500/20'
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.service-card')
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', shadow: 'shadow-purple-500/20' },
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
    }
    return colors[color] || colors.cyan
  }

  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <span className="text-sm text-cyan-400 font-medium tracking-wide">Nos Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Agents IA et automatisation{' '}
            <span className="text-gradient">sur mesure pour PME</span>
          </h2>
          <p className="text-xl text-white/70">
            Nous concevons des agents IA qui s’intègrent à vos outils existants
            pour éliminer les tâches chronophages et fiabiliser vos opérations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            const Icon = service.icon

            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card transition-all duration-700 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <TiltCard className="h-full">
                  <div className={`relative h-full glass rounded-2xl p-6 lg:p-8 border ${colors.border} backdrop-blur-xl overflow-hidden group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.shadow}`} style={{ boxShadow: 'inset 0 0 60px rgba(6, 182, 212, 0.1)' }} />

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>

                      <div className="mb-4">
                        <span className={`text-sm font-semibold uppercase tracking-wider ${colors.text} mb-2 block`}>
                          {service.subtitle}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                      </div>

                      <p className="text-lg text-white/70 mb-6 leading-relaxed">{service.description}</p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className={`w-3 h-3 ${colors.text}`} />
                            </div>
                            <span className="text-base text-white/80 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="ghost"
                        onClick={scrollToAudit}
                        className={`${colors.text} hover:bg-white/5 p-0 h-auto text-lg font-semibold group/btn`}
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/50 mb-4">Besoin d’une solution personnalisée ?</p>
          <Button
            size="lg"
            onClick={scrollToAudit}
            className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            Discuter de votre projet
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
