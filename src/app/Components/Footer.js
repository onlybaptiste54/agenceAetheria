import { Mail, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Texte / Slogan */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-start">
          Boostez votre productivité avec <strong>AetherIA</strong> — automatisation intelligente et IA.
        </p>

        {/* Liens sociaux */}
        <div className="flex space-x-6">
          <a
            href="mailto:agenceaetheria@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Envoyer un email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Page Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
            aria-label="Page Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Copyright et infos légales */}
      <div className="mt-6 text-start text-sm text-gray-500 dark:text-gray-400 select-none space-y-1">
        <p>&copy; {new Date().getFullYear()} AetherIA. Tous droits réservés.</p>
        <p>Baptiste Beroual – Micro-entreprise – SIREN : 945 284 271</p>
        <p>34 rue du Général Leclerc 54140 Jarville-la-Malgrange</p>
        <p>Contact : agenceaetheria@gmail.com — 06 58 21 48 19</p>
      </div>
    </footer>
  );
}
