'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqItems = [
  { question: "Qu'est-ce qu'AetherIA propose concrètement ?", answer: "AetherIA conçoit et déploie des solutions d'automatisation IA sur mesure pour les indépendants et PME. Nous créons des assistants IA métier, automatisons vos processus (CRM, workflows), et développons des tableaux de bord d'analyse de données. Notre approche RAG (Retrieval-Augmented Generation) permet de connecter l'IA à vos documents internes pour des réponses précises et contextualisées." },
  { question: "À qui s'adresse la solution AetherIA ?", answer: "Nos solutions s'adressent principalement aux indépendants, consultants, avocats, agences immobilières, commerçants, et PME qui souhaitent automatiser leurs tâches répétitives et gagner en productivité. Chaque solution est adaptée à votre secteur d'activité et à vos besoins spécifiques." },
  { question: "Dois-je être à l'aise avec la technologie ?", answer: "Pas du tout ! Nos solutions sont conçues pour être utilisées par tous, sans compétences techniques. Nous fournissons une formation personnalisée et un accompagnement complet jusqu'à votre autonomie. L'interface est intuitive et simple d'utilisation, pensée pour les utilisateurs métiers." },
  { question: "Quels résultats puis-je attendre d'AetherIA ?", answer: "Nos clients constatent en moyenne un gain de 5 heures par semaine sur les tâches administratives, une augmentation de 40% de leur productivité, et une réduction significative des erreurs manuelles. Les résultats varient selon votre activité et les processus automatisés. L'audit gratuit permet d'estimer précisément vos gains potentiels." },
  { question: "Comment puis-je obtenir de l'aide si besoin ?", answer: "Nous proposons un accompagnement complet : formation initiale personnalisée, documentation détaillée, support technique par email et téléphone, et suivi post-livraison. Vous n'êtes jamais seul — nous restons disponibles pour répondre à vos questions et vous aider à optimiser l'utilisation de vos outils." },
  { question: "Mes données sont-elles sécurisées ?", answer: "Absolument. La sécurité et la confidentialité sont nos priorités. Vos données sont anonymisées et traitées en local lorsque possible. Nous respectons strictement le RGPD et proposons des options d'hébergement sécurisé. Vous gardez le contrôle total de vos données." },
  { question: "Combien coûte une solution AetherIA ?", answer: "Chaque projet étant sur mesure, les tarifs varient en fonction de la complexité et des besoins. Nous proposons un audit gratuit de 30 minutes pour évaluer vos besoins et vous fournir un devis détaillé. Nos solutions sont conçues pour être rentables rapidement grâce aux gains de temps générés." },
  { question: "Combien de temps prend la mise en place ?", answer: "La durée de mise en place dépend de la complexité du projet. Une solution simple peut être déployée en 1-2 semaines, tandis qu'un projet plus complexe peut prendre 4-8 semaines. L'audit gratuit permet d'établir un calendrier réaliste adapté à vos contraintes." },
]

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Foire aux <span className="text-gradient">questions</span></h2>
            <p className="text-lg text-white/60">Voici les réponses aux questions les plus fréquentes à propos d’AetherIA.</p>
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
