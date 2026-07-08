import Link from 'next/link'
import { formatDate } from '@/data/blog'

export const CALENDLY = 'https://calendly.com/agenceaetheria/30min'

// Bloc CTA réutilisé en milieu et fin d'article.
export function ArticleCTA({ label = 'Réserver mon audit gratuit (30 min)' }: { label?: string }) {
  return (
    <div className="glass rounded-2xl p-6 lg:p-8 my-10 border border-cyan-500/20 not-prose">
      <p className="text-white font-semibold text-lg mb-4">
        Envie de savoir ce qu&apos;un agent IA peut vous faire gagner ?
      </p>
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
    </div>
  )
}

// En-tête commun aux articles : fil d'Ariane, titre, méta.
export function ArticleHeader({
  title,
  date,
  readingMinutes,
}: {
  title: string
  date: string
  readingMinutes: number
}) {
  return (
    <header className="space-y-6 mb-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Retour au blog
      </Link>
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{title}</h1>
      <div className="flex items-center gap-3 text-sm text-white/50">
        <time dateTime={date}>{formatDate(date)}</time>
        <span aria-hidden>,</span>
        <span>{readingMinutes} min de lecture</span>
        <span aria-hidden>,</span>
        <span>AetherIA</span>
      </div>
    </header>
  )
}

// Styles de contenu long, cohérents avec le reste du site (dark + cyan).
export const proseClass = [
  'max-w-none text-white/70 leading-relaxed',
  '[&_h2]:text-white [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:mt-14 [&_h2]:mb-4',
  '[&_h3]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3',
  '[&_p]:mb-5 [&_p]:text-lg',
  '[&_strong]:text-white [&_strong]:font-semibold',
  '[&_a]:text-cyan-400 [&_a:hover]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-2',
  '[&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:text-lg [&_li]:marker:text-cyan-400',
  '[&_ol]:my-5 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_li]:text-lg',
  '[&_blockquote]:border-l-2 [&_blockquote]:border-cyan-500/50 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-white/80 [&_blockquote]:my-6',
].join(' ')

// Enveloppe de tableau pour éviter tout débordement horizontal sur mobile.
export function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-6 not-prose">
      <table className="w-full text-left text-white/70 border-collapse">{children}</table>
    </div>
  )
}
