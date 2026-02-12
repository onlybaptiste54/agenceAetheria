import Navigation from '@/sections/Navigation'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import AITool from '@/sections/AITool'
import CaseStudies from '@/sections/CaseStudies'
import Audit from '@/sections/Audit'
import About from '@/sections/About'
import FAQ from '@/sections/FAQ'
import Footer from '@/sections/Footer'

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
