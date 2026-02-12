'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, ShoppingBag, Briefcase, TrendingUp, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    icon: Building2, sector: 'Agence Immobilière', company: 'Merino Immobilier',
    problem: 'Gestion administrative chronophage : mails post-LinkedIn, frais kilométriques, comptes-rendus de visite',
    solution: 'Automatisation complète des processus administratifs avec assistant IA',
    results: ['Automatisation mails post-LinkedIn', 'Gestion automatique frais kilométriques', 'Génération automatique comptes-rendus visite'],
    metric: { value: '6h', label: 'gagnées/semaine' }, color: 'cyan',
  },
  {
    icon: ShoppingBag, sector: 'Commerce Fruits & Légumes', company: 'Marché Local',
    problem: 'Gestion manuelle complexe : stock, prix Rungis, fournisseurs, DLC',
    solution: 'Dashboard IA complet avec gestion automatique du stock et visualisation CA/marges',
    results: ['Stock rentré automatiquement via factures', 'Visualisation temps réel CA, marges et bénéfices', 'Optimisation prix et gestion DLC automatique'],
    metric: { value: '30%', label: 'de productivité' }, color: 'emerald',
  },
  {
    icon: Briefcase, sector: 'Maîtrise d\'œuvre', company: 'Renovie (Nancy)',
    problem: 'Gestion documentaire et suivi client éclatés entre plusieurs outils, avec perte de temps sur la recherche d\'informations.',
    solution: 'Mise en place d\'un RAG intelligent connecté aux documents métier pour accélérer les décisions et le pilotage des projets.',
    results: ['Synthèse financière automatisée', 'Résumé de projet instantané', 'Recherche sémantique sur toute la base documentaire'],
    metric: { value: '2h', label: 'gagnées/semaine' }, color: 'purple',
  },
]

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true) })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
    }
    return colors[color] || colors.cyan
  }

  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cas-clients" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Cas Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Des résultats <span className="text-gradient">concrets</span> pour nos clients</h2>
            <p className="text-lg text-white/60">Découvrez comment nous accompagnons des entreprises de différents secteurs dans leur transformation digitale.</p>
          </div>

          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const colors = getColorClasses(study.color)
                const Icon = study.icon
                return (
                  <div key={study.company} className={`group relative glass rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                    <div className={`p-6 ${colors.bg} border-b ${colors.border}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center"><Icon className={`w-5 h-5 ${colors.text}`} /></div>
                        <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>{study.sector}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div><p className="text-xs text-white/40 uppercase tracking-wider mb-2">Problème initial</p><p className="text-sm text-white/70">{study.problem}</p></div>
                      <div><p className="text-xs text-white/40 uppercase tracking-wider mb-2">Solution mise en place</p><p className="text-sm text-white/70">{study.solution}</p></div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Résultats obtenus</p>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (<li key={i} className="flex items-start gap-2"><Check className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} /><span className="text-sm text-white/70">{result}</span></li>))}
                        </ul>
                      </div>
                      <div className={`${colors.bg} rounded-xl p-4 text-center`}>
                        <p className={`text-3xl font-bold ${colors.text}`}>{study.metric.value}</p>
                        <p className="text-sm text-white/50">{study.metric.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:hidden">
            <div className="flex flex-col gap-6">
              {caseStudies.map((study, index) => {
                const colors = getColorClasses(study.color)
                const Icon = study.icon
                return (
                  <div key={study.company} className={`glass rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                    <div className={`p-4 ${colors.bg} border-b ${colors.border}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center"><Icon className={`w-4 h-4 ${colors.text}`} /></div>
                        <div>
                          <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>{study.sector}</span>
                          <h3 className="text-lg font-bold text-white">{study.company}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-white/70 mb-4">{study.problem}</p>
                      <div className={`${colors.bg} rounded-lg p-3 text-center`}>
                        <p className={`text-2xl font-bold ${colors.text}`}>{study.metric.value}</p>
                        <p className="text-xs text-white/50">{study.metric.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={`mt-16 glass rounded-2xl p-8 lg:p-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Prêt à obtenir des résultats similaires ?</h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Chaque métier est unique. Nous adaptons notre approche à vos spécificités pour vous offrir une solution sur mesure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={scrollToAudit} className="bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-8 py-6 text-base group transition-all duration-300">
                Obtenir mon audit gratuit<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToAudit} className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base">Voir plus de cas clients</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
