'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Users, Lightbulb, Heart, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const values = [
  { icon: Target, title: 'Approche pragmatique', description: 'Des solutions concrètes, pas de promesses vaines.' },
  { icon: Users, title: 'Accompagnement humain', description: 'À vos côtés de la conception à l\'autonomie.' },
  { icon: Lightbulb, title: 'Innovation accessible', description: 'L\'IA au service de votre métier, pas l\'inverse.' },
  { icon: Heart, title: 'Transparence totale', description: 'Pas de jargon, pas de coûts cachés.' },
]

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Heart className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Notre Histoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Derrière <span className="text-gradient">AetherIA</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="glass rounded-2xl p-8 border-glow">
                <p className="text-lg text-white/80 leading-relaxed mb-6">Trop d’entreprises utilisent encore des outils qui ne leur correspondent pas. Des logiciels rigides, peu d’automatisation, des tâches répétitives, et toujours plus de paperasse.</p>
                <p className="text-lg text-white/80 leading-relaxed mb-6">Je suis <span className="text-cyan-400 font-semibold">Baptiste Beroual</span>, fondateur d’AetherIA.</p>
                <p className="text-lg text-white/80 leading-relaxed mb-6">J’aide les indépendants et les PME à automatiser leurs processus, connecter leurs outils, et gagner en efficacité.</p>
                <p className="text-lg text-white/80 leading-relaxed">Chaque projet est conçu sur mesure, avec une approche claire, pragmatique et transparente.</p>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/baptiste-beroual-27865326b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 transition-colors">
                  <Linkedin className="w-5 h-5 text-cyan-400" /><span className="text-white/70">LinkedIn</span>
                </a>
                <a href="mailto:agenceaetheria@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" /><span className="text-white/70">Email</span>
                </a>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="glass rounded-2xl p-8 border-glow glow-cyan">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-4">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                      <Image
                        src="/baptisteImage.png"
                        alt="Baptiste Beroual"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass rounded-xl p-4 border-glow animate-float">
                  <p className="text-2xl font-bold text-cyan-400">10+</p>
                  <p className="text-xs text-white/50">projets réalisés</p>
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 border-glow animate-float" style={{ animationDelay: '2s' }}>
                  <p className="text-2xl font-bold text-emerald-400">98%</p>
                  <p className="text-xs text-white/50">clients satisfaits</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={value.title} className={`glass rounded-xl p-6 border-glow transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-cyan-400" /></div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-white/60">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
