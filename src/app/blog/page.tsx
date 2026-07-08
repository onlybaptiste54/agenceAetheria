import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/sections/Navigation'
import Footer from '@/sections/Footer'
import { articles, formatDate } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog, agents IA et automatisation pour PME | AetherIA',
  description:
    "Guides concrets sur les agents IA et l'automatisation pour PME : prix réels, RGPD, choix des modèles (ChatGPT, Mistral, IA souveraine) et cas d'usage par métier.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog, agents IA et automatisation pour PME | AetherIA',
    description:
      "Guides concrets et sans jargon sur les agents IA pour PME : prix, RGPD, choix des modèles, cas d'usage.",
    url: 'https://www.agenceaetheria.com/blog',
  },
}

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog AetherIA',
  url: 'https://www.agenceaetheria.com/blog',
  description:
    "Guides sur les agents IA et l'automatisation pour les PME, par AetherIA, agence IA à Nancy.",
  blogPost: articles.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    url: `https://www.agenceaetheria.com/blog/${a.slug}`,
    author: { '@type': 'Person', name: 'Baptiste Beroual' },
  })),
}

export default function BlogIndexPage() {
  const [featuredArticle, ...otherArticles] = articles

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="atelier-section pt-32 lg:pt-36">
        <div className="atelier-container">
          <header className="grid gap-9 border-b border-white/10 pb-10 lg:grid-cols-[1fr_18rem] lg:items-end">
            <div className="max-w-5xl">
              <p className="atelier-eyebrow">Ressources PME</p>
              <h1 className="atelier-title mt-4 text-[clamp(3rem,6.4vw,6.6rem)]">
                Guides IA pour dirigeants qui veulent du concret.
              </h1>
              <p className="atelier-lead mt-6 max-w-3xl">
                Prix, RGPD, choix du modèle et automatisation métier. Des réponses directes pour décider sans perdre trois semaines dans le bruit.
              </p>
            </div>

            <aside className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
              <p className="font-display text-5xl leading-none text-white">{articles.length}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.08em] text-white/45">guides publiés</p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                Dernière mise à jour le {formatDate(articles[0].date)}.
              </p>
            </aside>
          </header>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="atelier-card group flex min-h-[27rem] flex-col justify-between p-6 transition-colors hover:border-cyan-200/30 hover:bg-white/[0.055] lg:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/45">
                <span>Article 01</span>
                <span>{featuredArticle.readingMinutes} min de lecture</span>
              </div>

              <div className="max-w-2xl">
                <time dateTime={featuredArticle.date} className="text-sm text-cyan-200">
                  {formatDate(featuredArticle.date)}
                </time>
                <h2 className="font-display mt-5 text-[clamp(2.25rem,4vw,4rem)] leading-[1.02] text-white transition-colors group-hover:text-cyan-100">
                  {featuredArticle.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/62">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <span className="text-sm font-semibold text-cyan-200 transition-colors group-hover:text-white">
                Lire l&apos;article
              </span>
            </Link>

            <div className="grid gap-4">
              {otherArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="atelier-card group flex min-h-[17rem] flex-col justify-between p-6 transition-colors hover:border-cyan-200/30 hover:bg-white/[0.055]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/45">
                    <span>Article 0{index + 2}</span>
                    <span>{article.readingMinutes} min de lecture</span>
                  </div>

                  <div>
                    <time dateTime={article.date} className="text-sm text-cyan-200">
                      {formatDate(article.date)}
                    </time>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-cyan-100">
                      {article.title}
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/58">{article.excerpt}</p>
                  </div>

                  <span className="text-sm font-semibold text-cyan-200 transition-colors group-hover:text-white">
                    Lire l&apos;article
                  </span>
                </Link>
              ))}

              <div className="rounded-lg border border-white/10 bg-white/[0.025] p-6">
                <p className="atelier-eyebrow">À venir</p>
                <p className="mt-4 font-display text-3xl leading-tight text-white">
                  Des pages métier pour capter les recherches les plus rentables.
                </p>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  Expert comptable, assurance, immobilier, commerce et dirigeants de PME.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </main>
  )
}
