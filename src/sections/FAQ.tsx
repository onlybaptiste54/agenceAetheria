'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqItems } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id="faq" className="atelier-section">
      <div className="atelier-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-cyan-200" />
            <span className="atelier-eyebrow">FAQ</span>
          </div>
          <h2 className="atelier-title mt-4 text-[clamp(2.35rem,4.3vw,4.5rem)]">
            Questions fréquentes sur les agents IA.
          </h2>
          <p className="atelier-lead mx-auto mt-5 max-w-2xl">
            Les réponses essentielles avant de lancer un audit ou un premier agent IA dans votre entreprise.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqItems.map((item, index) => (
            <article key={item.question} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-5 p-5 text-left transition-colors hover:bg-white/[0.035] lg:p-6"
              >
                <span className="font-semibold text-white">{item.question}</span>
                <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-5 pb-5 leading-7 text-white/65 lg:px-6 lg:pb-6">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/55">Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="mailto:agenceaetheria@gmail.com" className="mt-3 inline-flex items-center gap-2 font-semibold text-cyan-200 transition-colors hover:text-white">
            Contactez-nous directement
            <ChevronDown className="h-4 w-4 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  )
}
