import { Mail, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Texte / Slogan */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-start">
          Boostez votre productivité avec <strong>AetherIA</strong> — automatisation intelligente et IA.
        </p>

        {/* Liens sociaux */}
    
      </div>

      {/* Copyright et infos légales */}
      <div className="mt-6 text-start text-sm text-gray-500 dark:text-gray-400 select-none space-y-1">
        <p>&copy; {new Date().getFullYear()} AetherIA. Tous droits réservés.</p>
        <p>Contact : agenceaetheria@gmail.com — 06 58 21 48 19</p>
           <p>
          <Link href="/privacy">
            Politique de confidentialité
          </Link>
          {' | '}
          <Link href="/utilisation">
            Conditions d'utilisation
          </Link>
        </p>
      </div>
    </footer>
  );
}
