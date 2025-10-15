import './globals.css';
import Navbar from './Components/Navbar';
import { Sora } from 'next/font/google';
import N8nChat from './N8nChat';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
  title: 'Agence AetherIA – Automatisation IA & Solutions Digitales',
  description:"Agence spécialisée en automatisation IA pour professionnels. Assistant IA métier, CRM intelligent, WhatsApp bot. Audit gratuit 30min.",

  metadataBase: new URL('https://www.agenceaetheria.com'),
  alternates: {
    canonical: 'https://www.agenceaetheria.com',
  },
  openGraph: {
    title: 'Agence AetherIA – Automatisation IA & Solutions Digitales',
    description:
      "Automatisez vos tâches, gagnez du temps et optimisez votre activité avec l’IA. Audit gratuit 30min.",
    url: 'https://www.agenceaetheria.com',
    siteName: 'Agence AetherIA',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Agence AetherIA',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence AetherIA – Automatisation IA & Solutions Digitales',
    description:
      'Automatisez vos tâches, gagnez du temps et optimisez votre activité avec l’IA. Audit gratuit 30min.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
 other: {
    'facebook-domain-verification': 'myrkk6l9u3fxv275rtimcpjfd14hmd',
  },
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
