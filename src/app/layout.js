import './globals.css';
import Navbar from './Components/Navbar';
import { Sora } from 'next/font/google';


const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata = {
  title: 'Agence AetherIA - Automatisation IA & Solutions Digitales | Audit Gratuit',
  description: "Agence spécialisée en automatisation IA pour avocats, consultants et e-commerce. Assistant IA métier, CRM intelligent, WhatsApp bot. Audit gratuit 30min. +5h/semaine économisées.",
  icons: {
    icon: '/LogoAetheria.ico',
  },
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
        url: 'https://agenceaetheria.com/LogoAetheriaaNoBg.png',
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
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-space-grotesk">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
