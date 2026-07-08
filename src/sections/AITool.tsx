'use client'

import { ArrowRight, Database, FileText, Search, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  { icon: Search, title: 'Recherche intelligente', description: 'Retrouvez une information dans vos documents en quelques secondes.' },
  { icon: FileText, title: 'Synthèses automatiques', description: 'Résumés de dossiers, comptes-rendus et synthèses financières.' },
  { icon: TrendingUp, title: 'Analyse en temps réel', description: 'Indicateurs métier lisibles pour décider plus vite.' },
  { icon: Shield, title: 'Confidentialité', description: 'Une approche pensée pour vos données internes et vos contraintes RGPD.' },
]

export default function AITool() {
  const scrollToAudit = () => {
    const element = document.querySelector('#audit')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="outil-ia" className="atelier-section">
      <div className="atelier-container">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="atelier-eyebrow">Assistant IA interne</p>
            <h2 className="atelier-title mt-3 text-[clamp(2.35rem,4.4vw,4.7rem)]">
              Posez une question. Obtenez une réponse tirée de vos documents.
            </h2>
            <p className="atelier-lead mt-6 max-w-2xl">
              Votre équipe ne fouille plus dans des dossiers, fichiers, emails ou anciens comptes-rendus.
              L’agent retrouve, synthétise et restitue l’information utile avec le contexte métier.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <article key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{feature.description}</p>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="atelier-card min-w-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_0_6px_rgb(190_242_100_/_0.12)]" />
                <p className="font-semibold text-white">Agent documentaire AetherIA</p>
              </div>
              <span className="hidden text-sm text-white/45 sm:inline">connecté CRM + documents</span>
            </div>

            <div className="grid min-h-[34rem] min-w-0 lg:grid-cols-[13rem_1fr]">
              <aside className="min-w-0 border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
                <p className="atelier-eyebrow">Sources</p>
                <div className="mt-4 flex max-w-full gap-2 overflow-x-auto lg:block lg:space-y-2">
                  {['Dossier client', 'Factures', 'Comptes-rendus', 'CRM'].map((source, index) => (
                    <div
                      key={source}
                      className={`min-w-max rounded-lg border px-3 py-2 text-sm ${
                        index === 0
                          ? 'border-cyan-300/30 bg-cyan-300/10 text-white'
                          : 'border-white/10 bg-white/[0.025] text-white/55'
                      }`}
                    >
                      {source}
                    </div>
                  ))}
                </div>
              </aside>

              <div className="flex min-w-0 flex-col justify-center gap-4 p-5 sm:p-8">
                <div className="ml-auto max-w-full rounded-lg bg-white/[0.07] p-4 text-white sm:max-w-[24rem]">
                  Synthétise le dossier Renovie et prépare les points à relancer.
                </div>

                <div className="max-w-full rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4 sm:max-w-[28rem]">
                  <div className="mb-3 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-cyan-200 to-transparent" />
                  <p className="leading-7 text-white/82">
                    3 points critiques trouvés : budget actualisé, prochaine décision client,
                    pièces manquantes. Brouillon de relance prêt.
                  </p>
                </div>

                <div className="grid gap-3 pt-4 sm:grid-cols-3">
                  {[
                    { icon: Database, label: 'Documents lus' },
                    { icon: FileText, label: 'Synthèse générée' },
                    { icon: FileText, label: 'Relance prête' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.025] p-4 text-white/62">
                        <Icon className="mb-4 h-5 w-5 text-cyan-200" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={scrollToAudit}
            className="atelier-button-primary rounded-lg px-7 text-base font-semibold"
          >
            Découvrir l’outil en démo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
