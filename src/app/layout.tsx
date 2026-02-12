import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AetherIA - Automatisation IA & Solutions Digitales',
  description: "L'IA qui automatise vos tâches répétitives — pas ce qui vous définit. Systèmes IA sur mesure pour indépendants et PME.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  )
}
