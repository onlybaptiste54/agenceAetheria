// Registre des articles du blog, source unique pour l'index /blog, le SEO et le maillage.
// Pour ajouter un article : ajoutez une entrée ici puis créez la page
// src/app/blog/<slug>/page.tsx (voir les deux articles existants comme modèle).

export type Article = {
  slug: string
  title: string
  description: string
  excerpt: string
  date: string // ISO AAAA-MM-JJ
  readingMinutes: number
  keywords: string[]
}

export const articles: Article[] = [
  {
    slug: 'combien-coute-un-agent-ia-pme',
    title: 'Combien coûte un agent IA pour une PME ? Les prix réels en 2026',
    description:
      "Entre 2 000 € et 15 000 € pour un agent IA sur mesure, plus 100 à 500 €/mois de fonctionnement. Le détail des prix, ce qui fait varier la facture et le calcul du ROI.",
    excerpt:
      "Les vraies fourchettes de prix d'un agent IA pour PME, les coûts récurrents qu'on oublie de vous annoncer, l'impact de la souveraineté sur la facture et comment calculer votre retour sur investissement.",
    date: '2026-07-08',
    readingMinutes: 6,
    keywords: ['prix agent IA', 'coût agent IA PME', 'tarif automatisation IA', 'ROI IA PME'],
  },
  {
    slug: 'ia-et-rgpd-pme',
    title: "IA et RGPD : ce qu'une PME doit savoir en 2026 (ChatGPT, Mistral ou IA souveraine ?)",
    description:
      "Oui, une PME peut utiliser l'IA en restant conforme au RGPD. Comparatif honnête ChatGPT vs Mistral vs IA souveraine, avec les coûts réels de chaque option.",
    excerpt:
      "Les 3 règles RGPD qui concernent vraiment une PME, et le comparatif ChatGPT vs Mistral vs IA souveraine : performance, coût, solidité juridique et le bon choix selon vos données.",
    date: '2026-07-08',
    readingMinutes: 7,
    keywords: ['IA RGPD', 'ChatGPT RGPD entreprise', 'Mistral RGPD', 'IA souveraine PME'],
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
