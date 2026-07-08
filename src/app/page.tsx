import type { Metadata } from 'next'
import Navigation from '@/sections/Navigation'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import AITool from '@/sections/AITool'
import CaseStudies from '@/sections/CaseStudies'
import Audit from '@/sections/Audit'
import About from '@/sections/About'
import FAQ from '@/sections/FAQ'
import Footer from '@/sections/Footer'

export const metadata: Metadata = {
  title: 'Agence IA à Nancy, agents IA et automatisation sur mesure pour PME | AetherIA',
  description:
    "AetherIA, agence IA basée à Nancy, conçoit des agents IA sur mesure pour PME : automatisation, assistant IA interne, tableaux de bord. Gagnez 5h/semaine. Audit gratuit.",
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <AITool />
      <CaseStudies />
      <Audit />
      <About />
      <FAQ />
      <Footer />
    </main>
  )
}
