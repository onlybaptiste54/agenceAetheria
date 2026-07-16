import type { Metadata } from 'next'
import './globals.css'
import { faqItems } from '@/data/faq'
import { Inter, Instrument_Serif } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agenceaetheria.com'),
  title: 'Agence IA à Nancy, agents IA et automatisation sur mesure pour PME | AetherIA',
  description:
    "Agence IA à Nancy : agents IA sur mesure et automatisation pour PME. Gagnez 5h/semaine sur vos tâches répétitives. Audit gratuit de 30 minutes.",
  openGraph: {
    title: 'Agence IA à Nancy, agents IA et automatisation sur mesure pour PME | AetherIA',
    description:
      "Agents IA sur mesure et automatisation pour PME, à Nancy et partout en France. Gagnez 5h/semaine. Audit gratuit de 30 minutes.",
    url: 'https://www.agenceaetheria.com',
    siteName: 'AetherIA',
    locale: 'fr_FR',
    type: 'website',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AetherIA',
  url: 'https://www.agenceaetheria.com',
  email: 'contact@agenceaetheria.com',
  description:
    "Agence IA à Nancy : conception et déploiement d'agents IA sur mesure et d'automatisations pour PME et indépendants.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nancy',
    addressRegion: 'Grand Est',
    addressCountry: 'FR',
  },
  founder: {
    '@type': 'Person',
    name: 'Baptiste Beroual',
    sameAs: 'https://www.linkedin.com/in/baptiste-beroual-27865326b/',
  },
  sameAs: ['https://www.linkedin.com/in/baptiste-beroual-27865326b/'],
  areaServed: [
    { '@type': 'City', name: 'Nancy' },
    { '@type': 'City', name: 'Metz' },
    { '@type': 'AdministrativeArea', name: 'Grand Est' },
    { '@type': 'Country', name: 'France' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-background text-foreground overflow-x-hidden`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  )
}
