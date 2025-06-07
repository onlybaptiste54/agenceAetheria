import { Mail, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Texte / Slogan */}
        <p className="text-sm  text-gray-600 dark:text-gray-300 text-start ">
          Boostez votre productivité avec <strong>AetherIA</strong> — automatisation intelligente et IA.
        </p>

        {/* Liens sociaux */}
        <div className="flex space-x-6">
          <a
            href="mailto:contact@aetheria.com"
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

      {/* Copyright */}
      <p className="mt-6 text-start text-sm text-gray-500 dark:text-gray-400 select-none">
        &copy; {new Date().getFullYear()} AetherIA. Tous droits réservés.
      </p>
    </footer>
  );
}
