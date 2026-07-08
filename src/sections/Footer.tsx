'use client'

import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Outil IA', href: '/#outil-ia' },
  { label: 'Cas clients', href: '/#cas-clients' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Audit', href: '/#audit' },
]

const resourceLinks = [
  { label: 'Agence IA à Nancy', href: '/agence-ia-nancy' },
  { label: 'Agents IA pour PME', href: '/agents-ia-pme' },
  { label: 'Agents IA par secteur', href: '/secteurs' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-14 lg:py-18">
      <div className="atelier-container">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_0.8fr_0.7fr]">
          <div>
            <Link href="/" className="mb-6 flex items-center gap-2">
              <Image src="/LogoAetheriaaNoBg.png" alt="AetherIA logo" width={44} height={44} className="h-10 w-10 object-contain" />
              <span className="text-xl font-semibold text-white">Aether<span className="text-cyan-200">IA</span></span>
            </Link>
            <p className="max-w-md leading-7 text-white/60">
              Agence IA basée à Nancy. Agents IA et automatisation sur mesure pour les PME et les indépendants,
              dans le Grand Est et partout en France.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:agenceaetheria@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/72 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-cyan-200" />
                agenceaetheria@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/baptiste-beroual-27865326b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/72 transition-colors hover:text-white">
                <Linkedin className="h-4 w-4 text-cyan-200" />
                LinkedIn
              </a>
            </div>
          </div>

          <FooterColumn title="Navigation" links={navLinks} />
          <FooterColumn title="Ressources" links={resourceLinks} />
          <FooterColumn
            title="Légal"
            links={[
              { label: 'Confidentialité', href: '/privacy' },
              { label: 'Conditions', href: '/utilisation' },
              { label: 'Mentions légales', href: '/mentions-legales' },
            ]}
          />
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © {currentYear} AetherIA. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h4 className="mb-5 font-semibold text-white">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="inline-flex items-center gap-1 text-white/58 transition-colors hover:text-cyan-100">
              {link.label}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
