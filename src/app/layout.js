import './globals.css';
import Navbar from './Components/Navbar';
import { Sora } from 'next/font/google';


const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata = {
  title: 'Agence AetherIA - Automatisation IA & Solutions Digitales | Audit Gratuit',
  description: "Agence spécialisée en automatisation IA pour avocats, consultants et e-commerce. Assistant IA métier, CRM intelligent, WhatsApp bot. Audit gratuit 30min. +5h/semaine économisées.",
  keywords: [
    'agence automatisation IA', 'assistant IA métier', 'automatisation avocat', 
    'CRM intelligent', 'WhatsApp bot', 'automatisation consultant', 'agence digitale IA',
    'solutions IA sur mesure', 'automatisation e-commerce', 'audit gratuit automatisation'
  ],
  openGraph: {
    title: 'Agence AetherIA - Automatisation IA & Solutions Digitales',
    description: "Agence spécialisée en automatisation IA pour professionnels. Assistant IA métier, CRM intelligent, WhatsApp bot. Audit gratuit 30min.",
    url: 'https://agenceaetheria.com',
    type: 'website',
    images: [
      {
        url: 'https://agenceaetheria.com/logoAetheriaa.svg',
        width: 1200,
        height: 630,
        alt: 'Agence AetherIA - Automatisation IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence AetherIA - Automatisation IA & Solutions Digitales',
    description: 'Agence spécialisée en automatisation IA pour professionnels. Audit gratuit 30min.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://agenceaetheria.com',
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="fr" className={`dark ${sora.variable}`}>
        <head>
        <meta name="facebook-domain-verification" content="myrkk6l9u3fxv275rtimcpjfd14hmd" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Agence AetherIA",
              "description": "Agence spécialisée en automatisation IA pour professionnels",
              "url": "https://agenceaetheria.com",
              "logo": "https://agenceaetheria.com/logoAetheriaa.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "French"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              },
              "sameAs": [],
              "offers": {
                "@type": "Offer",
                "name": "Audit gratuit automatisation IA",
                "description": "Audit gratuit de 30 minutes pour identifier les opportunités d'automatisation",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Assistant IA métier",
                  "description": "Assistant IA qui comprend votre secteur et automatise vos tâches"
                },
                {
                  "@type": "Service", 
                  "name": "CRM intelligent",
                  "description": "CRM avec analyse IA en temps réel et prédictions"
                },
                {
                  "@type": "Service",
                  "name": "Automatisation WhatsApp",
                  "description": "Bot WhatsApp intelligent pour la relation client"
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-space-grotesk">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
