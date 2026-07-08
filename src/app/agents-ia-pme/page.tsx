import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'

export const metadata: Metadata = {
  title: 'Agent IA pour PME : le guide complet 2026 (avec cas réels) | AetherIA',
  description:
    "Qu'est-ce qu'un agent IA, que peut-il automatiser dans une PME, combien ça coûte et combien de temps pour le déployer ? Le guide complet, avec 3 cas clients réels et chiffrés.",
  alternates: { canonical: '/agents-ia-pme' },
  openGraph: {
    title: 'Agent IA pour PME : le guide complet 2026 (avec cas réels) | AetherIA',
    description:
      "Définition, cas d'usage, coûts, délais de déploiement et 3 cas réels chiffrés : tout ce qu'un dirigeant de PME doit savoir sur les agents IA.",
    url: 'https://www.agenceaetheria.com/agents-ia-pme',
  },
}

const CALENDLY = 'https://calendly.com/agenceaetheria/30min'

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

const useCases: [string, string[]][] = [
  ['Administratif', [
    'Tri et réponse aux emails entrants récurrents',
    'Génération de comptes-rendus (réunions, visites, chantiers)',
    'Saisie et classement automatique des factures et notes de frais',
    'Préparation de documents à partir de modèles (devis, courriers)',
  ]],
  ['Commercial', [
    'Relances automatiques des prospects et devis sans réponse',
    'Mise à jour du CRM après chaque échange (fin de la double saisie)',
    'Emails de suivi personnalisés après un rendez-vous ou un contact LinkedIn',
    'Qualification des demandes entrantes avant transmission au commercial',
  ]],
  ['Support & relation client', [
    'Réponses aux questions récurrentes à partir de vos documents',
    'Suivi des demandes et escalade des cas complexes vers un humain',
    'Notifications proactives aux clients (avancement, échéances)',
  ]],
  ['Comptabilité & pilotage', [
    'Pré-comptabilité : extraction des données de factures, rapprochements',
    'Relances de factures impayées',
    'Tableaux de bord automatiques : CA, marges, trésorerie en temps réel',
    'Synthèses financières générées à la demande',
  ]],
]

export default function AgentsIaPmePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 font-medium">Guide 2026 · Agents IA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Agents IA pour PME : le guide pour <span className="text-gradient">automatiser sans vous perdre</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Un agent IA est un logiciel qui exécute des tâches à votre place : il lit vos documents, répond,
              relance, met à jour vos outils. Dans une PME, il fait typiquement gagner 2 à 6 heures par semaine
              et par personne sur les tâches répétitives. Ce guide répond aux questions concrètes : ce que c&apos;est,
              ce que ça automatise, ce que ça coûte, et par où commencer — avec 3 cas réels chiffrés.
            </p>
          </header>

          {/* Définition */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Qu&apos;est-ce qu&apos;un agent IA ? (et en quoi ce n&apos;est pas un chatbot)</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Le chatbot répond, l&apos;agent IA agit.</strong> Un chatbot se limite
              à une conversation : vous posez une question, il donne une réponse. Un agent IA, lui, exécute des
              tâches de bout en bout : il lit un email entrant, retrouve le dossier client concerné, rédige la
              réponse, met à jour le CRM et programme la relance si nécessaire.
            </p>
            <p className="text-white/70 leading-relaxed">
              Concrètement, un agent IA est connecté à vos outils (boîte mail, CRM, documents, facturation) et
              suit des règles métier que vous définissez. Il travaille en continu, sans erreur de saisie, et
              transmet à un humain tout ce qui sort de son périmètre. C&apos;est cette capacité à agir — pas
              seulement à discuter — qui explique pourquoi les PME s&apos;équipent d&apos;agents IA plutôt que de
              simples chatbots en 2026.
            </p>
          </section>

          {/* Que peut automatiser */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Que peut automatiser un agent IA dans une PME ?</h2>
            <p className="text-white/70 leading-relaxed">
              Un agent IA automatise toutes les tâches répétitives qui suivent une logique identifiable :
              traitement d&apos;emails, relances, saisie, comptes-rendus, reporting. Voici les cas d&apos;usage les
              plus rentables, fonction par fonction :
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {useCases.map(([title, items]) => (
                <div key={title} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-white/70 text-sm leading-relaxed flex gap-2">
                        <span className="text-cyan-400 flex-shrink-0">›</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed">
              La règle simple : si une tâche vous prend plus d&apos;une heure par semaine et suit toujours à peu
              près le même schéma, elle est probablement automatisable. Les cas d&apos;usage varient selon votre
              métier — nous les détaillons par secteur sur{' '}
              <Link href="/secteurs" className="text-cyan-400 hover:text-cyan-300">notre page dédiée aux secteurs</Link>.
            </p>
          </section>

          {/* Coût */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Combien coûte un agent IA pour une PME ?</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Le coût dépend du périmètre : une automatisation simple coûte
              nettement moins cher qu&apos;un assistant IA connecté à tout votre système d&apos;information.</strong>{' '}
              Il n&apos;existe pas de prix catalogue sérieux pour du sur mesure, mais les facteurs qui font varier
              le budget sont toujours les mêmes :
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex gap-2"><span className="text-cyan-400">›</span>Le nombre d&apos;outils à connecter (boîte mail seule vs mail + CRM + facturation + documents)</li>
              <li className="flex gap-2"><span className="text-cyan-400">›</span>Le volume et l&apos;état de vos données (documents bien organisés ou éparpillés)</li>
              <li className="flex gap-2"><span className="text-cyan-400">›</span>Le niveau d&apos;autonomie souhaité (suggestion validée par un humain vs exécution automatique)</li>
              <li className="flex gap-2"><span className="text-cyan-400">›</span>Les exigences de confidentialité (traitement local, hébergement dédié)</li>
            </ul>
            <p className="text-white/70 leading-relaxed">
              Le bon raisonnement n&apos;est pas le prix, mais le retour sur investissement : 5 heures gagnées par
              semaine représentent plus de 30 jours de travail récupérés par an et par personne. C&apos;est
              précisément ce que l&apos;audit gratuit chiffre pour votre situation, avant tout engagement.
            </p>
          </section>

          {/* Délais */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Combien de temps pour déployer un agent IA ?</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Entre 1 et 8 semaines.</strong> Une automatisation ciblée (relances,
              tri d&apos;emails, génération de comptes-rendus) est en production en 1 à 2 semaines. Un assistant IA
              interne connecté à l&apos;ensemble de vos documents et de vos outils demande 4 à 8 semaines, le temps
              de connecter les sources, tester avec vos équipes et former les utilisateurs.
            </p>
            <p className="text-white/70 leading-relaxed">
              Notre conseil : commencez petit. Un premier agent IA sur un irritant précis, mesurez les heures
              gagnées, puis étendez. C&apos;est le chemin qu&apos;ont suivi tous nos clients.
            </p>
          </section>

          {/* Cas réels */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">3 cas réels d&apos;agents IA en PME (résultats chiffrés)</h2>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 lg:p-8 border border-cyan-500/20">
                <p className="text-sm text-cyan-400 uppercase tracking-wider mb-2">Immobilier</p>
                <h3 className="text-xl font-semibold text-white mb-3">Merino Immobilier — 6h gagnées par semaine</h3>
                <p className="text-white/70 leading-relaxed">
                  L&apos;agence perdait des heures sur l&apos;administratif : emails après chaque contact LinkedIn,
                  frais kilométriques, comptes-rendus de visite. Un agent IA gère désormais ces trois flux
                  automatiquement. Résultat : 6 heures récupérées chaque semaine, réinvesties dans les visites et
                  la relation client.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 lg:p-8 border border-emerald-500/20">
                <p className="text-sm text-emerald-400 uppercase tracking-wider mb-2">Commerce</p>
                <h3 className="text-xl font-semibold text-white mb-3">Marché Local — +30% de productivité</h3>
                <p className="text-white/70 leading-relaxed">
                  Ce commerce de fruits et légumes gérait manuellement stock, prix Rungis, fournisseurs et DLC.
                  Le stock est maintenant alimenté automatiquement depuis les factures, avec un tableau de bord
                  temps réel du chiffre d&apos;affaires, des marges et des bénéfices. Résultat : 30% de productivité
                  en plus sur la gestion quotidienne.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 lg:p-8 border border-purple-500/20">
                <p className="text-sm text-purple-400 uppercase tracking-wider mb-2">Maîtrise d&apos;œuvre · Nancy</p>
                <h3 className="text-xl font-semibold text-white mb-3">Renovie — 2h gagnées par semaine</h3>
                <p className="text-white/70 leading-relaxed">
                  Documents éclatés entre plusieurs outils, informations difficiles à retrouver. Un assistant IA
                  interne connecté aux documents métier fournit désormais synthèses financières, résumés de projet
                  et recherche instantanée. Résultat : 2 heures gagnées par semaine sur la seule recherche
                  d&apos;informations.
                </p>
              </div>
            </div>
            <CTA label="Obtenir des résultats similaires — audit gratuit" />
          </section>

          {/* Pièges */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Les pièges à éviter avec les agents IA</h2>
            <ul className="space-y-4">
              {[
                ["Vouloir tout automatiser d'un coup", "Le projet devient long, cher et flou. Commencez par un irritant précis et mesurable, étendez ensuite."],
                ["Choisir l'outil avant le problème", "Un abonnement à une plateforme IA générique ne sert à rien si personne ne l'adapte à vos processus. Partez de la tâche qui vous coûte des heures."],
                ["Négliger la qualité des données", "Un agent IA connecté à des documents obsolètes ou mal rangés donnera des réponses médiocres. Le nettoyage des sources fait partie du projet."],
                ["Oublier l'humain dans la boucle", "Les meilleures automatisations gardent une validation humaine sur les actions sensibles (envois clients, engagements financiers), au moins au début."],
                ["Ignorer le RGPD", "Vos données clients ne doivent pas partir n'importe où. Exigez un traitement conforme, local quand c'est possible."],
              ].map(([title, desc]) => (
                <li key={title} className="glass rounded-xl p-5">
                  <p className="text-white font-semibold mb-1">{title}</p>
                  <p className="text-white/70">{desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Par où commencer */}
          <section className="glass rounded-2xl p-8 lg:p-12 space-y-6">
            <h2 className="text-3xl font-bold text-white">Par où commencer ?</h2>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Par un audit de 30 minutes, gratuit et sans engagement.</strong>{' '}
              On liste ensemble vos tâches les plus chronophages, on identifie celles qu&apos;un agent IA peut
              prendre en charge, et on estime les heures récupérables. Vous repartez avec des pistes concrètes,
              que vous travailliez avec nous ou non.
            </p>
            <CTA />
            <p className="text-white/50 text-sm">
              Basés à Nancy, nous intervenons dans tout le Grand Est et à distance partout en France.{' '}
              <Link href="/agence-ia-nancy" className="text-cyan-400 hover:text-cyan-300">Découvrir notre agence IA à Nancy</Link>.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
