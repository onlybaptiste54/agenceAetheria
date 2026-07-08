import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'
import { getArticle } from '@/data/blog'
import { ArticleHeader, ArticleCTA, TableWrap, proseClass } from '../parts'

const article = getArticle('ia-et-rgpd-pme')!
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
              <strong>Réponse directe : oui, une PME peut utiliser l&apos;IA en toute conformité RGPD, y compris
              ChatGPT, à trois conditions.</strong> Utiliser les offres professionnelles (jamais les versions grand
              public gratuites), encadrer contractuellement le prestataire IA comme n&apos;importe quel sous-traitant, et
              adapter le niveau de protection à la sensibilité réelle de vos données. Le choix se joue entre trois options :
              les API américaines (performantes, économiques, données hors UE), Mistral AI (le compromis européen), et
              l&apos;IA souveraine auto-hébergée (contrôle total, mais chère).
            </p>
            <p>
              Détaillons, parce que c&apos;est LA question que nous posent tous nos clients, et que les réponses
              qu&apos;on trouve en ligne sont soit alarmistes, soit complaisantes.
            </p>

            <h2>Ce que dit vraiment le RGPD quand vous utilisez l&apos;IA</h2>
            <p>Trois règles concrètes résument 99 % des cas d&apos;une PME :</p>
            <ol>
              <li>
                <strong>Dès qu&apos;un prompt contient des données personnelles</strong> (nom d&apos;un client, email,
                situation d&apos;un salarié…), vous faites un traitement de données : il doit avoir une base légale et
                figurer dans votre registre des traitements.
              </li>
              <li>
                <strong>Votre fournisseur d&apos;IA est un sous-traitant</strong> au sens de l&apos;article 28 : il vous
                faut un accord de traitement des données (DPA) signé. Toutes les offres pro sérieuses en proposent un.
              </li>
              <li>
                <strong>Si les données sortent de l&apos;UE</strong>, il faut un cadre de transfert valide. C&apos;est le
                point qui distingue les trois options ci-dessous.
              </li>
            </ol>
            <p>
              À cela s&apos;ajoute depuis 2026 la montée en charge de l&apos;<strong>AI Act européen</strong> : pour les
              usages typiques d&apos;une PME (automatisation, assistants documentaires), les obligations restent légères :
              transparence et supervision humaine. Mais mieux vaut construire proprement dès maintenant.
            </p>
            <p>
              Et la règle d&apos;or que tout le monde connaît mais que personne n&apos;applique : <strong>la version
              gratuite grand public de ChatGPT n&apos;a rien à faire dans votre entreprise.</strong> Vos salariés y
              collent déjà des données clients. Le vrai risque RGPD, c&apos;est ça, pas votre futur agent IA construit proprement.
            </p>

            <h2>Option 1 : ChatGPT / API américaines, performant, économique, mais données hors UE</h2>
            <p>
              Les modèles d&apos;OpenAI (et américains en général) restent des références en performance, avec les coûts
              d&apos;usage les plus bas du marché.
            </p>
            <p>
              Côté conformité, c&apos;est <strong>possible mais encadré</strong> : les offres API et Business proposent un
              DPA, les données API ne sont pas utilisées pour entraîner les modèles, et les transferts de l&apos;UE vers les USA
              s&apos;appuient sur le Data Privacy Framework. Faiblesse structurelle : ce cadre de transfert a déjà été
              invalidé deux fois par la justice européenne sous ses formes précédentes (Safe Harbor, Privacy Shield). Ça
              fonctionne aujourd&apos;hui ; c&apos;est juridiquement moins serein qu&apos;un hébergement européen.
            </p>
            <p><strong>Pour qui :</strong> les PME dont les cas d&apos;usage contiennent peu ou pas de données sensibles, qui veulent le meilleur rapport performance/prix.</p>

            <h2>Option 2 : Mistral AI, le compromis européen</h2>
            <p>
              Mistral, c&apos;est le champion français : des modèles au niveau des américains pour la quasi-totalité des
              cas d&apos;usage PME, un hébergement possible en Union européenne, un DPA européen, et <strong>aucun
              transfert hors UE à justifier</strong>. Le coût d&apos;usage est comparable aux API américaines.
            </p>
            <p>
              En clair : vous gagnez la sérénité juridique sans payer le prix fort de la souveraineté totale. Pour la
              majorité de nos clients PME, cabinets, agences immobilières et commerces, <strong>c&apos;est le meilleur
              équilibre en 2026</strong>, et c&apos;est souvent notre recommandation par défaut dès que les prompts
              contiennent des données clients.
            </p>
            <p><strong>Pour qui :</strong> toute PME qui traite régulièrement des données personnelles dans ses automatisations et veut une conformité simple à défendre.</p>

            <h2>Option 3 : l&apos;IA souveraine auto-hébergée, le contrôle total au prix fort</h2>
            <p>
              Un modèle open source (Mistral open source, Llama…) qui tourne <strong>sur votre serveur</strong>. Aucune
              donnée ne quitte votre infrastructure, aucun sous-traitant IA, aucun transfert : la conformité la plus
              simple qui existe sur le papier.
            </p>
            <p>
              Mais parlons franchement du coût, parce que c&apos;est là que les discours « souveraineté » omettent un détail :
            </p>
            <TableWrap>
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 text-white font-semibold">Poste</th>
                  <th className="py-3 text-white font-semibold">Coût réel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Serveur GPU loué (cloud français type OVH/Scaleway)</td>
                  <td className="py-3">300 à 1 000 €/mois</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Ou matériel en local</td>
                  <td className="py-3">5 000 à 15 000 € d&apos;investissement</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Maintenance, mises à jour des modèles, supervision</td>
                  <td className="py-3">quelques heures/mois, à budgéter</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Performance</td>
                  <td className="py-3">inférieure aux grands modèles cloud à cas d&apos;usage égal</td>
                </tr>
              </tbody>
            </TableWrap>
            <p>
              <strong>La souveraineté totale coûte 5 à 20 fois plus cher que l&apos;API équivalente.</strong> Elle se
              justifie pleinement pour des données de santé, juridiques ou stratégiques. Pour automatiser des relances
              clients, c&apos;est un tank pour aller chercher le pain.
            </p>
            <p><strong>Pour qui :</strong> professions réglementées, données très sensibles, ou exigence contractuelle client.</p>

            <ArticleCTA />

            <h2>Le comparatif en une table</h2>
            <TableWrap>
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 text-white font-semibold">Critère</th>
                  <th className="py-3 pr-4 text-white font-semibold">ChatGPT / API US</th>
                  <th className="py-3 pr-4 text-white font-semibold">Mistral (UE)</th>
                  <th className="py-3 text-white font-semibold">IA souveraine</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10"><td className="py-3 pr-4">Performance</td><td className="py-3 pr-4">5 sur 5</td><td className="py-3 pr-4">4 sur 5</td><td className="py-3">3 sur 5</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 pr-4">Coût d&apos;usage</td><td className="py-3 pr-4">€</td><td className="py-3 pr-4">€</td><td className="py-3">€€€€</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 pr-4">Données hors UE</td><td className="py-3 pr-4">Oui (encadré)</td><td className="py-3 pr-4">Non</td><td className="py-3">Non</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 pr-4">Solidité juridique</td><td className="py-3 pr-4">Correcte, dépend du DPF</td><td className="py-3 pr-4">Bonne</td><td className="py-3">Maximale</td></tr>
                <tr className="border-b border-white/10"><td className="py-3 pr-4">Complexité technique</td><td className="py-3 pr-4">Faible</td><td className="py-3 pr-4">Faible</td><td className="py-3">Élevée</td></tr>
                <tr><td className="py-3 pr-4">Le bon choix si…</td><td className="py-3 pr-4">données peu sensibles</td><td className="py-3 pr-4">données clients courantes</td><td className="py-3">données très sensibles</td></tr>
              </tbody>
            </TableWrap>

            <h2>Notre approche : le bon niveau de protection, pas le maximum</h2>
            <p>
              Chez AetherIA, on conçoit chaque agent IA avec le principe de proportionnalité : <strong>anonymiser ou
              pseudonymiser les données avant qu&apos;elles n&apos;atteignent le modèle quand c&apos;est possible, traiter
              en local ce qui doit l&apos;être, et n&apos;envoyer au cloud que ce qui peut l&apos;être.</strong>
              Concrètement, un même agent peut utiliser Mistral pour les prompts contenant des données clients et une API
              américaine pour les tâches génériques. Vous payez la souveraineté uniquement là où elle protège vraiment quelque chose.
            </p>
            <p>
              C&apos;est exactement le genre d&apos;arbitrage qu&apos;on fait avec vous pendant l&apos;audit gratuit :
              quelles données, quel risque réel, quel modèle, quel coût.
            </p>
          </div>

          <ArticleCTA label="Faire le point sur mes données (audit gratuit)" />

          <p className="text-white/50 text-sm mt-10">
            AetherIA est une <Link href="/agence-ia-nancy" className="text-cyan-400 hover:text-cyan-300">agence IA basée à Nancy</Link> (Grand Est).
            Voir aussi : <Link href="/blog/combien-coute-un-agent-ia-pme" className="text-cyan-400 hover:text-cyan-300">Combien coûte un agent IA pour une PME ?</Link>
          </p>
        </div>
      </article>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
