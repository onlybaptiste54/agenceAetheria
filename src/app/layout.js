import './globals.css';
import Navbar from './Components/Navbar';
import { Space_Grotesk } from 'next/font/google';


const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'flow.AetherIA.com – Agents IA & Automatisation',
  description: "Créez des agents intelligents et automatisez vos processus avec flow.AetherIA.com.",
  keywords: ['IA', 'automatisation', 'agents intelligents', 'WhatsApp bot', 'n8n', 'flow.AetherIA', 'API', 'GPT', 'AI workflow'],
  openGraph: {
    title: 'flow.AetherIA.com – Agents IA & Automatisation',
    description: "Solutions sur-mesure d'automatisation avec agents IA, WhatsApp bots, intégrations API & plus.",
    url: 'https://flow.aetheria.com',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-space-grotesk">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
