'use client'

import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Outil IA', href: '#outil-ia' },
  { label: 'Cas Clients', href: '#cas-clients' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Audit', href: '#audit' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 group mb-6">
                <Image src="/LogoAetheriaaNoBg.png" alt="AetherIA logo" width={40} height={40} className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold text-white">ether<span className="text-cyan-400">IA</span></span>
              </a>
              <p className="text-white/60 max-w-md mb-6">
                L&apos;IA qui automatise vos taches repetitives - pas ce qui vous definit. Solutions sur mesure pour independants et PME.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:agenceaetheria@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" /><span className="text-sm text-white/70">agenceaetheria@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/baptiste-beroual-27865326b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/5 transition-colors">
                  <Linkedin className="w-4 h-4 text-cyan-400" /><span className="text-sm text-white/70">LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => scrollToSection(link.href)} className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      {link.label}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-white/60 hover:text-cyan-400 transition-colors">Politique de confidentialite</Link></li>
                <li><Link href="/utilisation" className="text-white/60 hover:text-cyan-400 transition-colors">Conditions d utilisation</Link></li>
                <li><Link href="/mentions-legales" className="text-white/60 hover:text-cyan-400 transition-colors">Mentions legales</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">(c) {currentYear} AetherIA. Tous droits reserves.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
