'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true) })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id="faq" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Questions fréquentes sur nos <span className="text-gradient">agents IA</span></h2>
            <p className="text-lg text-white/60">Voici les réponses aux questions les plus fréquentes sur nos agents IA et notre accompagnement.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className={`glass rounded-xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 + index * 50}ms` }}>
                <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-white/5 transition-colors">
                  <span className="text-white font-medium pr-4">{item.question}</span>
                  <div className={`w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-white/70 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/60 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <a href="mailto:agenceaetheria@gmail.com" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              Contactez-nous directement<ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
