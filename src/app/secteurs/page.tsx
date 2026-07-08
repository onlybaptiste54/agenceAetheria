import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'

export const metadata: Metadata = {
  title: 'Agents IA par métier : expert-comptable, assurance, immobilier, commerce | AetherIA',
  description:
    "Cas d'usage concrets d'agents IA par secteur : cabinets d'expertise comptable, courtiers en assurance, agences immobilières, commerces. Avec résultats réels chiffrés.",
  alternates: { canonical: '/secteurs' },
  openGraph: {
    title: 'Agents IA par métier : expert-comptable, assurance, immobilier, commerce | AetherIA',
    description:
      "Ce qu'un agent IA automatise concrètement dans votre métier, avec des cas réels et des résultats chiffrés.",
    url: 'https://www.agenceaetheria.com/secteurs',
  },
}

const CALENDLY = 'https://calendly.com/agenceaetheria/30min'

function MiniCTA({ text }: { text: string }) {
  return (
    <a
      href={CALENDLY}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
    >
      {text}
    </a>
  )
}

export default function SecteursPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <header className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 font-medium">Agents IA par secteur</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Des agents IA pensés pour <span className="text-gradient">votre métier</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Un agent IA n&apos;est utile que s&apos;il parle votre langue : celle du cabinet comptable, du courtier,
              de l&apos;agence immobilière ou du commerce. Voici ce que l&apos;automatisation IA change concrètement
              dans chaque métier, avec les résultats réels obtenus chez nos clients quand nous en avons.
            </p>
            <nav className="flex flex-wrap gap-3">
              {[
                ['Experts-comptables', '#expert-comptable'],
                ['Assurance', '#assurance'],
                ['Immobilier', '#immobilier'],
                ['Commerce', '#commerce'],
                ['Dirigeants de PME', '#dirigeants'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 hover:bg-cyan-500/20 transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </header>

          {/* Expert-comptable */}
          <section id="expert-comptable" className="space-y-4 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white">IA pour experts-comptables : automatiser la saisie et les relances</h2>
            <p className="text-white/70 leading-relaxed">
              Dans un cabinet d&apos;expertise comptable, un agent IA prend en charge la saisie des pièces, la
              pré-comptabilité et les relances, les trois postes qui consomment le plus d&apos;heures de
              collaborateur. Cas d&apos;usage types :
            </p>
            <ul className="space-y-3">
              {[
                "Lecture automatique des factures (OCR) et affectation aux bons comptes : la saisie manuelle disparaît pour la majorité des pièces courantes.",
                "Pré-comptabilité : rapprochements, détection des pièces manquantes, préparation des dossiers avant révision.",
                "Relances automatiques des clients du cabinet pour les pièces manquantes et les factures impayées, avec escalade vers le collaborateur si besoin.",
                "Assistant interne qui répond aux questions récurrentes des clients (échéances, documents à fournir, statut du dossier) à partir des procédures du cabinet.",
              ].map((item) => (
                <li key={item} className="glass rounded-xl p-4 text-white/70 leading-relaxed">{item}</li>
              ))}
            </ul>
            <p className="text-white/60 text-sm leading-relaxed">
              Nous n&apos;avons pas encore de cas client comptable à publier : les gains ci-dessus sont des cas
              d&apos;usage types, chiffrables précisément lors d&apos;un audit de votre cabinet.
            </p>
            <MiniCTA text="Estimer les heures récupérables dans mon cabinet" />
          </section>

          {/* Assurance */}
          <section id="assurance" className="space-y-4 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white">IA pour courtiers et agents d&apos;assurance : contrats et demandes clients</h2>
            <p className="text-white/70 leading-relaxed">
              Pour un courtier, l&apos;agent IA le plus rentable est l&apos;assistant documentaire : il lit les
              contrats et les conditions générales à votre place. Cas d&apos;usage types :
            </p>
            <ul className="space-y-3">
              {[
                "Comparaison des garanties entre plusieurs contrats : l'assistant IA extrait et met en regard les clauses pertinentes en quelques secondes, au lieu d'une lecture ligne à ligne.",
                "Traitement des demandes entrantes : qualification automatique, réponse aux questions simples, transmission des cas complexes au bon interlocuteur.",
                "Relances automatiques : échéances de contrats, pièces manquantes dans les dossiers de sinistre, devis sans réponse.",
                "Appui conformité : vérification que les dossiers contiennent les documents obligatoires avant transmission.",
              ].map((item) => (
                <li key={item} className="glass rounded-xl p-4 text-white/70 leading-relaxed">{item}</li>
              ))}
            </ul>
            <MiniCTA text="Voir ce qu'un agent IA changerait dans mon cabinet de courtage" />
          </section>

          {/* Immobilier */}
          <section id="immobilier" className="space-y-4 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white">IA pour agences immobilières : 6h/semaine gagnées chez Merino Immobilier</h2>
            <p className="text-white/70 leading-relaxed">
              Dans l&apos;immobilier, l&apos;agent IA s&apos;attaque à l&apos;administratif qui suit chaque contact et
              chaque visite. C&apos;est un cas que nous connaissons de l&apos;intérieur :
            </p>
            <div className="glass rounded-2xl p-6 lg:p-8 border border-cyan-500/20 space-y-3">
              <p className="text-sm text-cyan-400 uppercase tracking-wider">Cas réel</p>
              <h3 className="text-xl font-semibold text-white">Merino Immobilier : 6 heures gagnées par semaine</h3>
              <p className="text-white/70 leading-relaxed">
                Emails automatiques après chaque contact LinkedIn, gestion des frais kilométriques sans saisie,
                comptes-rendus de visite générés automatiquement. L&apos;équipe a récupéré 6 heures par semaine,
                réinvesties dans les visites et le conseil client.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Comptes-rendus de visite générés à partir de notes vocales ou de quelques puces.",
                "Suivi automatique des prospects acquéreurs et vendeurs : relances, mises à jour du CRM.",
                "Réponses automatiques aux demandes de renseignements sur les biens (surface, DPE, disponibilités).",
              ].map((item) => (
                <li key={item} className="glass rounded-xl p-4 text-white/70 leading-relaxed">{item}</li>
              ))}
            </ul>
            <MiniCTA text="Obtenir le même résultat dans mon agence" />
          </section>

          {/* Commerce */}
          <section id="commerce" className="space-y-4 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white">IA pour commerçants : 30% de productivité en plus chez Marché Local</h2>
            <p className="text-white/70 leading-relaxed">
              Pour un commerce, l&apos;IA la plus rentable n&apos;est pas un chatbot : c&apos;est l&apos;automatisation
              du stock et du pilotage. Cas réel à l&apos;appui :
            </p>
            <div className="glass rounded-2xl p-6 lg:p-8 border border-emerald-500/20 space-y-3">
              <p className="text-sm text-emerald-400 uppercase tracking-wider">Cas réel</p>
              <h3 className="text-xl font-semibold text-white">Marché Local : 30% de productivité en plus</h3>
              <p className="text-white/70 leading-relaxed">
                Ce commerce de fruits et légumes jonglait entre stock, prix Rungis, fournisseurs et DLC. Le stock
                est désormais alimenté automatiquement depuis les factures, avec visualisation temps réel du
                chiffre d&apos;affaires, des marges et des bénéfices, et une gestion optimisée des prix et des DLC.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Entrée automatique du stock à partir des factures fournisseurs, plus de saisie manuelle.",
                "Tableau de bord temps réel : CA, marges, bénéfices par rayon ou par produit.",
                "Alertes DLC et optimisation des prix pour réduire les pertes.",
              ].map((item) => (
                <li key={item} className="glass rounded-xl p-4 text-white/70 leading-relaxed">{item}</li>
              ))}
            </ul>
            <MiniCTA text="Automatiser la gestion de mon commerce" />
          </section>

          {/* Dirigeants */}
          <section id="dirigeants" className="space-y-4 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white">Dirigeants de PME : reporting, centralisation, décision</h2>
            <p className="text-white/70 leading-relaxed">
              Quel que soit le secteur, le dirigeant a le même problème : l&apos;information est éparpillée et le
              reporting arrive trop tard. Un agent IA transverse centralise vos documents et vos chiffres, puis
              répond à vos questions en langage naturel : « Où en est le projet X ? », « Quelle est ma marge ce
              mois-ci ? », « Synthèse des emails de l&apos;équipe cette semaine ». C&apos;est exactement ce que nous
              avons déployé chez Renovie à Nancy, avec 2 heures gagnées chaque semaine sur la seule recherche
              d&apos;informations.
            </p>
            <p className="text-white/70 leading-relaxed">
              Pour comprendre ce qu&apos;un agent IA peut automatiser dans votre PME, fonction par fonction,
              consultez{' '}
              <Link href="/agents-ia-pme" className="text-cyan-400 hover:text-cyan-300">notre guide complet des agents IA pour PME</Link>.
            </p>
          </section>

          {/* CTA final */}
          <section className="glass rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Votre métier n&apos;est pas dans la liste ?</h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Chaque solution est construite sur mesure. Si vos équipes perdent des heures sur des tâches
              répétitives, un agent IA peut probablement les récupérer. L&apos;audit gratuit de 30 minutes permet
              de le vérifier, sans engagement.
            </p>
            <div className="flex justify-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-background font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Réserver mon audit gratuit (30 min)
              </a>
            </div>
            <p className="text-white/50 text-sm">
              Basés à Nancy, nous accompagnons les PME du Grand Est et de toute la France.{' '}
              <Link href="/agence-ia-nancy" className="text-cyan-400 hover:text-cyan-300">Découvrir notre agence IA à Nancy</Link>.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
