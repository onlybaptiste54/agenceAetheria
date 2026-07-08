import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
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
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <header className="space-y-6 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 font-medium">Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Agents IA et automatisation pour PME : <span className="text-gradient">nos guides concrets</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Des réponses directes, chiffrées et sans jargon aux questions que se posent les dirigeants de PME
              avant de se lancer dans l&apos;IA. Écrit par une agence qui déploie ces solutions au quotidien.
            </p>
          </header>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block glass rounded-2xl p-6 lg:p-8 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span aria-hidden>,</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {article.readingMinutes} min
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-cyan-400 font-medium">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
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
