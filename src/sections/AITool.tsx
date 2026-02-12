'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, FileText, TrendingUp, Shield, Zap, Database, ArrowRight, Terminal, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrambleText from '@/components/ScrambleText'

const features = [
  { icon: Search, title: 'Recherche Intelligente', description: 'Moteur de recherche rapide capable de retrouver n\'importe quel document en quelques secondes.' },
  { icon: FileText, title: 'Synthèses Automatiques', description: 'Génération de résumés de documents, synthèses financières et comptes-rendus de projet.' },
  { icon: TrendingUp, title: 'Analyse en Temps Réel', description: 'Agents IA connectés en temps réel aux données de votre entreprise pour des insights instantanés.' },
  { icon: Shield, title: 'Confidentialité Totale', description: 'Données anonymisées et traitées en local. Conformité RGPD garantie.' },
]

const codeLines = [
  'import { RAG } from "@aetheria/engine"',
  'const agent = new Agent({ model: "gpt-4" })',
  'await agent.connect(corpus)',
  'const result = await agent.query("Synthèse Q4")',
]

export default function AITool() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeLine, setActiveLine] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true) }) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Typing animation for code
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % codeLines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [isVisible])

  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="outil-ia" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Code stream background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none overflow-hidden hidden lg:block">
        <div className="space-y-2 p-8 font-mono text-xs text-cyan-400/50">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {`> Processing data_chunk_${String(i).padStart(3, '0')}.json...`}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium tracking-wide">Notre Outil IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Classeur centralisé avec{' '}
              <ScrambleText text="moteur RAG" delay={300} className="text-cyan-400" />
            </h2>
            <p className="text-lg text-white/60">
              Un système de recherche et d’analyse intelligent qui transforme 
              la façon dont vous accédez à vos données d’entreprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                {[
                  { icon: Database, title: 'Centralisation complète', desc: 'Je crée un classeur centralisé de l’entreprise où tous vos documents sont organisés et accessibles instantanément.' },
                  { icon: Search, title: 'Recherche ultra-rapide', desc: 'Moteur de recherche intelligent capable de retrouver n’importe quel document et d’en produire un résumé en quelques secondes.' },
                  { icon: FileText, title: 'Synthèses intelligentes', desc: 'Génération automatique de synthèses financières et de projets (dernier compte rendu, e-mails de l’équipe, tâches en cours).' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-6 border border-white/10">
                <p className="text-sm text-white/50 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Code className="w-4 h-4" /> Technologie
                </p>
                <div className="flex flex-wrap gap-3">
                  {['RAG', 'Agents IA', 'Temps réel', 'Local', 'RGPD'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:scale-105 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Terminal-style card */}
                <div className="glass rounded-2xl overflow-hidden border border-cyan-500/30 backdrop-blur-xl">
                  {/* Terminal header */}
                  <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-white/40 font-mono">aetheria-engine — zsh</span>
                    </div>
                  </div>

                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                        <Terminal className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white font-sans">AetherIA Engine</h4>
                        <p className="text-cyan-400">v2.4.0 • Système RAG Avancé</p>
                      </div>
                    </div>

                    {/* Animated code */}
                    <div className="space-y-2 bg-black/30 rounded-lg p-4">
                      {codeLines.map((line, i) => (
                        <div 
                          key={i} 
                          className={`transition-all duration-300 ${i === activeLine ? 'text-cyan-400 opacity-100' : 'text-white/30 opacity-50'}`}
                        >
                          <span className="text-purple-400 mr-2">{i + 1}</span>
                          {line}
                        </div>
                      ))}
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-green-400">➜</span>
                        <span className="text-white/60">_</span>
                        <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass rounded-lg px-4 py-2 border border-cyan-500/30 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/70">En temps réel</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 border border-cyan-500/30 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">&lt; 10s</p>
                      <p className="text-xs text-white/50">Temps de réponse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`glass rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-white/10 backdrop-blur-xl">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-white/70">
                Vos données restent <span className="text-white font-medium">chez vous</span> — 
                traitement local et conforme RGPD
              </span>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              size="lg"
              onClick={scrollToAudit}
              className="bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-8 py-6 text-base group transition-all duration-300 hover:scale-105"
            >
              Découvrir l’outil en démo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
