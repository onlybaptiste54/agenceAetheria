'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, Clock, FileCheck, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  { icon: FileCheck, title: 'Analyse complète', description: 'Vos processus actuels décortiqués pour identifier les points de friction.' },
  { icon: TrendingUp, title: 'Gains identifiés', description: 'Estimation précise du temps et des ressources économisables.' },
  { icon: Calendar, title: 'Roadmap claire', description: 'Plan d\'action personnalisé avec priorités et étapes concrètes.' },
]

export default function Audit() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true) })
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="audit" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Audit Gratuit</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Audit gratuit de vos <span className="text-gradient">processus métier</span></h2>
              <p className="text-lg text-white/60">En 30 minutes, nous identifions vos points de friction et vous proposons une stratégie d&apos;automatisation sur mesure.</p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-cyan-400" /></div>
                      <div><h4 className="text-lg font-semibold text-white mb-1">{benefit.title}</h4><p className="text-white/60">{benefit.description}</p></div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-white/50"><div className="w-2 h-2 rounded-full bg-green-400" /><span className="text-sm">Gratuit</span></div>
                <div className="flex items-center gap-2 text-white/50"><div className="w-2 h-2 rounded-full bg-green-400" /><span className="text-sm">Sans engagement</span></div>
                <div className="flex items-center gap-2 text-white/50"><div className="w-2 h-2 rounded-full bg-green-400" /><span className="text-sm">Résultats concrets</span></div>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="glass rounded-2xl p-8 lg:p-10 border-glow glow-cyan">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6"><Calendar className="w-10 h-10 text-white" /></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Réserver votre créneau</h3>
                    <p className="text-white/60">30 minutes pour transformer votre productivité</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between glass-dark rounded-lg p-4">
                      <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-cyan-400" /><span className="text-white">Durée</span></div>
                      <span className="text-cyan-400 font-semibold">30 minutes</span>
                    </div>
                    <div className="flex items-center justify-between glass-dark rounded-lg p-4">
                      <div className="flex items-center gap-3"><FileCheck className="w-5 h-5 text-cyan-400" /><span className="text-white">Format</span></div>
                      <span className="text-cyan-400 font-semibold">Visio</span>
                    </div>
                  </div>

                  <a href="https://calendly.com/agenceaetheria/30min" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-background font-semibold py-6 text-base group transition-all duration-300">
                      Réserver mon audit gratuit<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <p className="text-center text-white/40 text-sm mt-4">Places limitées — réservez dès maintenant</p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
