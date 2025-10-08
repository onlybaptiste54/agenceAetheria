import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Contact */}
        <div className="flex items-center space-x-6">
          <a 
            href="mailto:agenceaetheria@gmail.com"
            className="flex items-center space-x-2 text-[var(--color-text)]/80 hover:text-cyan-700 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">agenceaetheria@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/baptiste-beroual-27865326b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[var(--color-text)]/80 hover:text-cyan-700 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        {/* Liens légaux */}
        <div className="flex items-center space-x-4">
          <Link href="/privacy" className="text-sm text-[var(--color-text)]/80 hover:text-cyan-700 transition-colors">
            Politique de confidentialité
          </Link>
          <span className="text-[var(--color-text)]/40">|</span>
          <Link href="/utilisation" className="text-sm text-[var(--color-text)]/80 hover:text-cyan-700 transition-colors">
            Conditions d&apos;utilisation
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-[var(--color-text)]/60">
        <p>&copy; {new Date().getFullYear()} AetherIA. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
