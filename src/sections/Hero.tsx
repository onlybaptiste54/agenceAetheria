'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Clock, TrendingUp, Users, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/hero-ai.jpg" alt="AI Background" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 4}s` }} />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Solutions d’automatisation IA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Gagnez <span className="text-gradient">5h/semaine</span><br />avec <span className="text-white">AetherIA</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              L’IA qui automatise vos tâches répétitives - pas ce qui vous définit. Systèmes IA sur mesure qui centralisent vos données et automatisent vos décisions métier.
            </p>

            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center"><Clock className="w-5 h-5 text-cyan-400" /></div>
                <div><p className="text-2xl font-bold text-white">5h+</p><p className="text-sm text-white/50">gagnées/semaine</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-cyan-400" /></div>
                <div><p className="text-2xl font-bold text-white">40%</p><p className="text-sm text-white/50">de productivité</p></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" onClick={() => scrollToSection('#audit')} className="bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-9 py-6 text-lg group transition-all duration-300">
                Audit gratuit (30min)<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('#cas-clients')} className="border-white/20 text-white hover:bg-white/5 px-9 py-6 text-lg transition-all duration-300">Voir nos cas clients</Button>
            </div>
          </div>

          <div ref={imageRef} className="relative hidden lg:block animate-slide-in-right" style={{ transition: 'transform 0.3s ease-out' }}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-[400px] h-[400px] rounded-full border border-cyan-500/20 animate-pulse-glow" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-[350px] h-[350px] rounded-full border border-cyan-500/10" /></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 flex items-center justify-center glow-cyan">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-xl bg-cyan-500/20 flex items-center justify-center"><Sparkles className="w-10 h-10 text-cyan-400" /></div>
                    <p className="text-cyan-400 font-semibold">Assistant IA</p>
                    <p className="text-white/50 text-sm">Automatisation intelligente</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -left-10 glass rounded-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-green-400" /></div>
                  <div><p className="text-xs text-white/50">Productivité</p><p className="text-sm font-semibold text-white">+40%</p></div>
                </div>
              </div>
              <div className="absolute bottom-20 -right-5 glass rounded-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center"><Clock className="w-4 h-4 text-cyan-400" /></div>
                  <div><p className="text-xs text-white/50">Temps économisé</p><p className="text-sm font-semibold text-white">5h/semaine</p></div>
                </div>
              </div>
              <div className="absolute top-10 right-6 glass rounded-xl p-3 animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center"><Users className="w-4 h-4 text-cyan-400" /></div>
                  <p className="text-xs font-medium text-white">Suivi client</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-8 glass rounded-xl p-3 animate-float" style={{ animationDelay: '2.8s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center"><Database className="w-4 h-4 text-cyan-400" /></div>
                  <p className="text-xs font-medium text-white">Centralisation des données</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
