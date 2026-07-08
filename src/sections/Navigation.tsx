'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Outil IA', href: '#outil-ia' },
    { label: 'Cas Clients', href: '#cas-clients' },
    { label: 'Agents IA', href: '/agents-ia-pme' },
    { label: 'Secteurs', href: '/secteurs' },
    { label: 'FAQ', href: '#faq' },
  ]

  // Sur la home : smooth scroll vers l'ancre. Sur une sous-page : navigation vers /#ancre.
  const goTo = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/${href}`)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center  group">
            <Image src="/LogoAetheriaaNoBg.png" alt="AetherIA logo" width={60} height={60} className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
            <span className="text-lg lg:text-xl font-semibold text-white">ether<span className="text-cyan-400">IA</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => goTo(link.href)} className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button onClick={() => goTo('#audit')} className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">Audit gratuit</Button>
          </div>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => goTo(link.href)} className="block w-full text-left text-white/70 hover:text-white py-2 transition-colors">{link.label}</button>
          ))}
          <Button onClick={() => goTo('#audit')} className="w-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 mt-4">Audit gratuit</Button>
        </div>
      </div>
    </nav>
  )
}
