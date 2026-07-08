import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'
import { getArticle } from '@/data/blog'
import { ArticleHeader, ArticleCTA, TableWrap, proseClass } from '../parts'

const article = getArticle('combien-coute-un-agent-ia-pme')!
const url = `https://www.agenceaetheria.com/blog/${article.slug}`

export const metadata: Metadata = {
  title: `${article.title} | AetherIA`,
  description: article.description,
  keywords: article.keywords,
  alternates: { canonical: `/blog/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.description,
    url,
    type: 'article',
    publishedTime: article.date,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  datePublished: article.date,
  dateModified: article.date,
  author: { '@type': 'Person', name: 'Baptiste Beroual', url: 'https://www.linkedin.com/in/baptiste-beroual-27865326b/' },
  publisher: { '@type': 'Organization', name: 'AetherIA', url: 'https://www.agenceaetheria.com' },
  mainEntityOfPage: url,
  inLanguage: 'fr-FR',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <ArticleHeader title={article.title} date={article.date} readingMinutes={article.readingMinutes} />

          <div className={proseClass}>
            <p className="text-xl text-white/80">
              <strong>Réponse directe : pour une PME, un agent IA sur mesure coûte entre 2 000 € et 15 000 € de
              mise en place, plus 100 à 500 € par mois de fonctionnement.</strong> Une automatisation simple démarre
              autour de 1 500 €, un système multi-agents complexe peut dépasser 30 000 €. La plupart de nos clients PME
              rentabilisent leur investissement en 2 à 8 mois grâce au temps gagné.
            </p>
            <p>
              Voilà pour la réponse courte. Maintenant, le détail, parce que ces fourchettes cachent de grandes
              différences, et que personne dans le secteur n&apos;aime les afficher franchement.
            </p>

            <h2>Les 3 niveaux de prix d&apos;un agent IA</h2>

            <h3>Niveau 1 : l&apos;automatisation simple, 1 500 à 5 000 €</h3>
            <p>
              Un agent qui exécute une tâche répétitive bien délimitée : tri et réponse aux emails entrants, relances
              clients automatiques, génération de rapports hebdomadaires, saisie de factures dans votre outil de gestion.
            </p>
            <p>
              Ce que comprend ce budget : l&apos;analyse de votre processus, la construction du workflow (souvent sur
              n8n ou équivalent), la connexion à vos outils existants (CRM, boîte mail, tableur), les tests et votre formation.
            </p>
            <p>
              <strong>Exemple réel : chez Renovie, entreprise de maîtrise d&apos;œuvre à Nancy, l&apos;automatisation de
              la documentation projet fait gagner 2 heures par semaine.</strong> À 50 €/heure chargée, c&apos;est environ
              5 000 € de temps récupéré par an. L&apos;investissement est remboursé la première année, et les années
              suivantes sont du gain net.
            </p>

            <h3>Niveau 2 : l&apos;agent métier sur mesure, 5 000 à 15 000 €</h3>
            <p>
              Un agent connecté à vos données internes, qui comprend votre métier : un assistant qui répond aux questions
              de vos équipes à partir de vos documents, un agent qui qualifie vos leads et prépare les devis, un système
              qui centralise et synthétise vos dossiers clients.
            </p>
            <p>
              La différence de prix vient de la connexion à vos données (documents, historiques, bases métier), de la
              personnalisation au vocabulaire de votre secteur, et de la fiabilisation. Un agent qui se trompe une fois
              sur dix est inutilisable en production.
            </p>
            <p>
              <strong>Exemple réel : chez Merino Immobilier, l&apos;automatisation administrative fait gagner 6 heures
              par semaine.</strong> Soit plus de 15 000 € de temps par an pour un poste chargé à 50 €/heure.
            </p>

            <h3>Niveau 3 : le système multi-agents, 15 000 à 50 000 €</h3>
            <p>
              Plusieurs agents qui collaborent sur des processus de bout en bout : prospection + qualification + relance
              + reporting, ou gestion documentaire complète d&apos;un cabinet. Rarement le bon point de départ pour une
              PME. On recommande presque toujours de commencer par un agent au niveau 1 ou 2, de mesurer, puis d&apos;étendre.
            </p>

            <h2>Les coûts récurrents (ceux qu&apos;on oublie de vous annoncer)</h2>
            <p>Un agent IA ne coûte pas zéro une fois livré. Comptez :</p>
            <TableWrap>
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 text-white font-semibold">Poste</th>
                  <th className="py-3 text-white font-semibold">Coût mensuel typique PME</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Consommation IA (API des modèles)</td>
                  <td className="py-3">20 à 200 €</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Hébergement et outils (serveur, n8n, base de données)</td>
                  <td className="py-3">20 à 100 €</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Maintenance et ajustements</td>
                  <td className="py-3">0 à 300 € selon contrat</td>
                </tr>
              </tbody>
            </TableWrap>
            <p>
              <strong>Total réaliste : 100 à 500 €/mois</strong> pour un agent en production. Méfiez-vous des devis qui
              n&apos;en parlent pas : soit le prestataire les découvrira en même temps que vous, soit ils sont cachés ailleurs.
            </p>

            <h2>Le facteur qui change tout : où tournent vos données</h2>
            <p>
              C&apos;est le poste de coût le moins compris, et il mérite d&apos;être dit franchement : <strong>le niveau
              de souveraineté de votre IA a un impact direct sur la facture.</strong>
            </p>
            <ul>
              <li>
                <strong>API américaines (OpenAI/ChatGPT, Claude)</strong> : les plus performantes et les moins chères à
                l&apos;usage. Vos données transitent par des serveurs américains, avec un encadrement contractuel possible
                (nous détaillons tout ça dans notre article{' '}
                <Link href="/blog/ia-et-rgpd-pme">IA et RGPD : ce qu&apos;une PME doit savoir</Link>).
              </li>
              <li>
                <strong>Mistral AI (France)</strong> : performances désormais très proches pour les cas d&apos;usage PME,
                hébergement en Union européenne, coût comparable. Souvent le meilleur compromis souveraineté/prix.
              </li>
              <li>
                <strong>IA auto-hébergée (modèle open source sur votre serveur)</strong> : contrôle total, aucune donnée
                ne sort de chez vous. Mais comptez 300 à 1 000 €/mois de serveur GPU, ou 5 000 à 15 000 € de matériel en
                local, plus la maintenance. <strong>La souveraineté totale coûte cher</strong>. Elle se justifie pour des
                données très sensibles (santé, juridique, défense), rarement pour automatiser des relances clients.
              </li>
            </ul>
            <p>
              Notre position : le bon niveau de souveraineté est celui que justifient vos données, pas celui qui gonfle le devis.
            </p>

            <ArticleCTA />

            <h2>Comment calculer VOTRE retour sur investissement</h2>
            <p>La formule est simple :</p>
            <blockquote>
              <strong>Heures gagnées par semaine multipliées par le taux horaire chargé et par 47 semaines = gain annuel</strong>
            </blockquote>
            <p>
              Un agent à 6 000 € qui fait gagner 5 heures par semaine à un profil chargé à 40 €/heure génère 9 400 € de
              gain la première année. ROI en 8 mois, puis ~9 000 €/an de gain net. Nos clients constatent en moyenne
              5 heures gagnées par semaine et 40 % de productivité en plus sur les tâches automatisées.
            </p>

            <h2>Les 4 signaux qui doivent vous faire fuir un devis</h2>
            <ol>
              <li><strong>Pas de phase d&apos;audit</strong> : un prestataire qui chiffre sans analyser vos processus chiffre au hasard.</li>
              <li><strong>Pas de coûts récurrents annoncés</strong> : voir plus haut.</li>
              <li><strong>Un abonnement « plateforme » sans propriété</strong> : si vous arrêtez de payer et perdez tout, vous louez, vous n&apos;investissez pas.</li>
              <li><strong>Des promesses sans chiffres</strong> : « révolutionnez votre entreprise » n&apos;est pas un livrable. « 6 heures gagnées par semaine sur l&apos;administratif » en est un.</li>
            </ol>

            <h2>Par où commencer</h2>
            <p>
              La seule façon d&apos;avoir un prix juste, c&apos;est de partir de vos processus réels. C&apos;est
              exactement ce qu&apos;on fait pendant notre <strong>audit gratuit de 30 minutes</strong> : on identifie vos
              tâches les plus chronophages, on estime le gain potentiel, et vous repartez avec une fourchette chiffrée,
              que vous travailliez avec nous ou non.
            </p>
          </div>

          <ArticleCTA label="Estimer mon projet (audit gratuit 30 min)" />

          <p className="text-white/50 text-sm mt-10">
            AetherIA est une <Link href="/agence-ia-nancy" className="text-cyan-400 hover:text-cyan-300">agence IA basée à Nancy</Link>.
            Nous concevons des <Link href="/agents-ia-pme" className="text-cyan-400 hover:text-cyan-300">agents IA sur mesure pour les PME</Link>{' '}
            du Grand Est et de toute la France : plus de 10 projets livrés, 98 % de clients satisfaits.
          </p>
        </div>
      </article>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
