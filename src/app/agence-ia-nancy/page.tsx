import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'

export const metadata: Metadata = {
  title: 'Agence IA à Nancy, agents IA et automatisation pour PME | AetherIA',
  description:
    "AetherIA, agence IA à Nancy : agents IA sur mesure et automatisation pour les PME du Grand Est. Cas client nancéien, audit gratuit de 30 minutes, déploiement en 1 à 8 semaines.",
  alternates: { canonical: '/agence-ia-nancy' },
  openGraph: {
    title: 'Agence IA à Nancy, agents IA et automatisation pour PME | AetherIA',
    description:
      "Agents IA sur mesure et automatisation pour les PME de Nancy et du Grand Est. Audit gratuit de 30 minutes.",
    url: 'https://www.agenceaetheria.com/agence-ia-nancy',
  },
}

const CALENDLY = 'https://calendly.com/agenceaetheria/30min'

const faqLocale = [
  {
    q: 'Intervenez-vous en dehors de Nancy ?',
    a: "Oui. Notre agence IA est basée à Nancy, mais nous accompagnons des PME à Metz, Épinal, Thionville et dans tout le Grand Est. Nous travaillons aussi à distance partout en France : la majorité des déploiements se font très bien en visio, avec des points d'avancement réguliers.",
  },
  {
    q: 'Combien coûte un projet avec une agence IA à Nancy ?',
    a: "Chaque projet est sur mesure, donc le tarif dépend de la complexité et du périmètre. L'audit gratuit de 30 minutes permet d'évaluer vos besoins et de vous fournir un devis détaillé. Nos solutions sont conçues pour être rentabilisées rapidement grâce aux heures gagnées chaque semaine.",
  },
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Principalement des PME et des indépendants : agences immobilières, commerçants, experts-comptables, courtiers en assurance, entreprises du bâtiment et de la maîtrise d'œuvre, consultants. Si vos équipes perdent du temps sur des tâches répétitives, un agent IA peut très probablement vous en libérer une partie.",
  },
  {
    q: 'Combien de temps prend un déploiement ?',
    a: "Entre 1 et 8 semaines selon la complexité. Une automatisation simple est en production en 1 à 2 semaines ; un assistant IA interne connecté à l'ensemble de vos documents demande plutôt 4 à 8 semaines. Le calendrier précis est établi dès l'audit gratuit.",
  },
  {
    q: 'Faut-il des compétences techniques en interne ?',
    a: "Non. Nous concevons, déployons et maintenons les agents IA pour vous. Vos équipes reçoivent une formation personnalisée et utilisent des interfaces simples, pensées pour des utilisateurs métiers, sans aucune compétence technique requise.",
  },
  {
    q: 'Mes données restent-elles confidentielles ?',
    a: "Oui. Vos données sont anonymisées et traitées en local lorsque c'est possible, dans le strict respect du RGPD. Vous gardez le contrôle total de vos documents et de vos informations métier.",
  },
]

function CTA({ label = 'Réserver mon audit gratuit (30 min)' }: { label?: string }) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-7 py-3.5 rounded-lg transition-colors"
      >
        {label}
      </a>
      <a href="mailto:agenceaetheria@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
        ou écrivez-nous : agenceaetheria@gmail.com
      </a>
    </div>
  )
}

export default function AgenceIaNancyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 font-medium">Agence IA à Nancy et Grand Est</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Agence IA à Nancy : des <span className="text-gradient">agents IA sur mesure</span> pour les PME du Grand Est
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              AetherIA est une agence IA basée à Nancy. Nous concevons des agents IA et des automatisations sur mesure
              qui font gagner à nos clients 5 heures par semaine en moyenne sur leurs tâches répétitives :
              administratif, relances, comptes-rendus, recherche d&apos;informations. Tout commence par un audit gratuit de 30 minutes.
            </p>
            <CTA />
          </header>

          {/* Pourquoi local */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Pourquoi choisir une agence IA locale à Nancy ?</h2>
            <p className="text-white/70 leading-relaxed">
              Une agence IA à Nancy comprend la réalité des PME lorraines : des équipes réduites, des journées
              déjà pleines, et aucun temps à perdre avec des projets technologiques qui n&apos;aboutissent pas.
              Nous privilégions des déploiements courts (1 à 8 semaines), des résultats mesurables en heures
              gagnées, et un accompagnement de proximité.
            </p>
            <p className="text-white/70 leading-relaxed">
              Être basés à Nancy nous permet de rencontrer nos clients de Meurthe-et-Moselle et du Grand Est en
              personne quand c&apos;est utile : audit initial dans vos locaux, formation de vos équipes sur place,
              points d&apos;avancement en face à face. Et pour les entreprises de Metz, de Lorraine ou du reste de la
              France, tout fonctionne aussi très bien à distance.
            </p>
          </section>

          {/* Services */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Nos services d&apos;automatisation IA à Nancy</h2>
            <p className="text-white/70 leading-relaxed">
              Trois piliers, toujours construits sur mesure autour de votre métier et de vos outils existants.
            </p>
            <div className="grid sm:grid-cols-1 gap-6">
              <div className="glass rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Assistants IA internes connectés à vos documents</h3>
                <p className="text-white/70 leading-relaxed">
                  Un assistant IA qui connaît vos contrats, procédures, devis et comptes-rendus. Vos équipes posent
                  une question en langage naturel et obtiennent la réponse tirée de vos propres documents en
                  quelques secondes, au lieu de fouiller des dossiers pendant de longues minutes.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Automatisation des processus et du CRM</h3>
                <p className="text-white/70 leading-relaxed">
                  Fin de la double saisie, relances automatiques, synchronisation entre vos outils : les agents IA
                  exécutent les tâches répétitives à votre place. Emails post-rendez-vous, notes de frais,
                  comptes-rendus de visite, tout ce qui vous vole des heures chaque semaine.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-white mb-3">Tableaux de bord et analyse de données</h3>
                <p className="text-white/70 leading-relaxed">
                  Chiffre d&apos;affaires, marges, stocks, activité commerciale : des tableaux de bord alimentés
                  automatiquement pour piloter votre PME en temps réel, sans ressaisie et sans export Excel du vendredi soir.
                </p>
              </div>
            </div>
          </section>

          {/* Cas client Renovie */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Cas client à Nancy : Renovie, 2h gagnées chaque semaine</h2>
            <div className="glass rounded-2xl p-6 lg:p-8 border border-cyan-500/20 space-y-4">
              <p className="text-white/70 leading-relaxed">
                Renovie, entreprise de maîtrise d&apos;œuvre à Nancy, perdait du temps à chercher l&apos;information :
                documents éclatés entre plusieurs outils, suivi client dispersé, synthèses financières fastidieuses.
              </p>
              <p className="text-white/70 leading-relaxed">
                Nous avons déployé un assistant IA interne connecté à leurs documents métier : synthèse financière
                automatisée, résumé de projet instantané, recherche sur toute la base documentaire en langage naturel.
              </p>
              <p className="text-2xl font-bold text-cyan-400">
                Résultat : 2 heures gagnées par semaine<span className="text-white/60 text-base font-normal"> sur la seule recherche et synthèse d&apos;informations.</span>
              </p>
            </div>
            <p className="text-white/70 leading-relaxed">
              Nous obtenons des résultats comparables ailleurs en France : 6h/semaine gagnées chez Merino Immobilier
              (automatisation administrative), 30% de productivité en plus chez Marché Local (gestion de stock et pilotage).{' '}
              <Link href="/#cas-clients" className="text-cyan-400 hover:text-cyan-300">Voir tous nos cas clients</Link>.
            </p>
          </section>

          {/* Secteurs */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Les secteurs que nous accompagnons</h2>
            <p className="text-white/70 leading-relaxed">
              Nos agents IA sont déjà à l&apos;œuvre dans l&apos;immobilier, le commerce et la maîtrise d&apos;œuvre,
              et s&apos;adaptent naturellement aux cabinets d&apos;expertise comptable, aux courtiers en assurance et
              à tous les dirigeants de PME qui croulent sous l&apos;administratif.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/70">
              <li><Link href="/secteurs#expert-comptable" className="text-cyan-400 hover:text-cyan-300">Experts-comptables</Link> : saisie, pré-compta, relances</li>
              <li><Link href="/secteurs#assurance" className="text-cyan-400 hover:text-cyan-300">Assurance et courtage</Link> : analyse de contrats, demandes clients</li>
              <li><Link href="/secteurs#immobilier" className="text-cyan-400 hover:text-cyan-300">Immobilier</Link> : administratif, comptes-rendus de visite</li>
              <li><Link href="/secteurs#commerce" className="text-cyan-400 hover:text-cyan-300">Commerce</Link> : stock, marges, fournisseurs</li>
            </ul>
          </section>

          {/* Méthode */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Notre méthode : de l&apos;audit gratuit au déploiement</h2>
            <ol className="space-y-4">
              {[
                ['1. Audit gratuit de 30 minutes', "On identifie ensemble les tâches qui vous coûtent le plus d'heures et on estime le gain potentiel. Sans engagement, en visio ou à Nancy."],
                ['2. Proposition sur mesure', "Vous recevez un plan concret : quels agents IA, quels outils connectés, quel calendrier, quel budget."],
                ['3. Déploiement en 1 à 8 semaines', "Nous construisons, testons et mettons en production. Une automatisation simple est livrée en 1 à 2 semaines, un assistant IA complet en 4 à 8 semaines."],
                ['4. Formation et suivi', "Vos équipes sont formées jusqu'à l'autonomie. Nous restons disponibles après la livraison pour ajuster et optimiser."],
              ].map(([title, desc]) => (
                <li key={title} className="glass rounded-xl p-5">
                  <p className="text-white font-semibold mb-1">{title}</p>
                  <p className="text-white/70">{desc}</p>
                </li>
              ))}
            </ol>
            <CTA />
          </section>

          {/* FAQ locale */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Questions fréquentes sur notre agence IA à Nancy</h2>
            <div className="space-y-4">
              {faqLocale.map((item) => (
                <div key={item.q} className="glass rounded-xl p-5 lg:p-6">
                  <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                  <p className="text-white/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="glass rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Parlons de votre projet IA à Nancy</h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              30 minutes pour identifier les heures que vous pouvez récupérer chaque semaine.
              Gratuit, sans engagement, et vous repartez avec des pistes concrètes même si nous ne travaillons pas ensemble.
            </p>
            <div className="flex justify-center">
              <CTA />
            </div>
            <p className="text-white/50 text-sm">
              Vous voulez d&apos;abord comprendre ce qu&apos;un agent IA peut faire pour vous ?{' '}
              <Link href="/agents-ia-pme" className="text-cyan-400 hover:text-cyan-300">Lisez notre guide des agents IA pour PME</Link>.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
