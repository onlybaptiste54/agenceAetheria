import Link from 'next/link'
import { formatDate } from '@/data/blog'

export const CALENDLY = 'https://calendly.com/agenceaetheria/30min'

// Bloc CTA réutilisé en milieu et fin d'article.
export function ArticleCTA({ label = 'Réserver mon audit gratuit (30 min)' }: { label?: string }) {
  return (
    <div className="atelier-card my-10 p-6 not-prose lg:p-8">
      <p className="font-display text-3xl leading-tight text-white">
        Envie de savoir ce qu&apos;un agent IA peut vous faire gagner ?
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="atelier-button-primary inline-flex rounded-lg px-7 py-3.5 font-semibold transition-colors"
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
    <header className="mb-12 border-b border-white/10 pb-8">
      <Link
        href="/blog"
        className="text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
      >
        Retour au blog
      </Link>
      <h1 className="atelier-title mt-6 text-[clamp(2.8rem,5.6vw,5.7rem)]">{title}</h1>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/50">
        <time dateTime={date}>{formatDate(date)}</time>
        <span>{readingMinutes} min de lecture</span>
        <span>AetherIA</span>
      </div>
    </header>
  )
}

// Styles de contenu long, cohérents avec le reste du site (dark + cyan).
export const proseClass = [
  'max-w-none text-white/70 leading-relaxed',
  '[&_h2]:font-display [&_h2]:text-white [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:font-normal [&_h2]:leading-tight [&_h2]:mt-14 [&_h2]:mb-4',
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
