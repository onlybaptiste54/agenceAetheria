'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Agents IA', href: '/agents-ia-pme' },
  { label: 'Secteurs', href: '/secteurs' },
  { label: 'Agence IA Nancy', href: '/agence-ia-nancy' },
  { label: 'Blog', href: '/blog' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTo = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/${href}`)
      }
      return
    }
    router.push(href)
  }

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'border-white/10 bg-background/82 backdrop-blur-xl' : 'border-transparent bg-background/20 backdrop-blur-sm'}`}>
      <div className="atelier-container">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/LogoAetheriaaNoBg.png" alt="AetherIA logo" width={44} height={44} className="h-9 w-9 object-contain lg:h-10 lg:w-10" />
            <span className="text-lg font-semibold text-white">Aether<span className="text-cyan-200">IA</span></span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors ${isActive ? 'text-white' : 'text-white/58 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Button onClick={() => goTo('#audit')} className="atelier-button-ghost rounded-lg px-5 font-semibold hover:bg-white/10 hover:text-white">
              Audit gratuit
            </Button>
          </div>

          <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Ouvrir le menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`absolute left-0 right-0 top-full border-b border-white/10 bg-background/96 backdrop-blur-xl transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="space-y-2 px-4 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full rounded-lg px-3 py-3 text-left text-white/72 transition-colors hover:bg-white/[0.035] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={() => goTo('#audit')} className="atelier-button-primary mt-3 w-full rounded-lg font-semibold">
            Audit gratuit
          </Button>
        </div>
      </div>
    </nav>
  )
}
