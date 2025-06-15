import './globals.css';
import Navbar from './Components/Navbar';
import { Space_Grotesk } from 'next/font/google';


const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'AetherIA.com – Agents IA & Automatisation',
  description: "Créez des agents intelligents et automatisez vos processus avec AetherIA.com.",
  keywords: ['IA', 'automatisation', 'agents intelligents', 'WhatsApp bot', 'n8n', 'AetherIA.com', 'API', 'GPT', 'AI workflow'],
  openGraph: {
    title: 'AetherIA.com – Agents IA & Automatisation',
    description: "Solutions sur-mesure d'automatisation avec agents IA, WhatsApp bots, intégrations API & plus.",
    url: 'https://agenceaetheria.com',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="fr" className={`dark ${spaceGrotesk.variable}`}>
        <head>
        <meta name="facebook-domain-verification" content="myrkk6l9u3fxv275rtimcpjfd14hmd" />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-space-grotesk">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
