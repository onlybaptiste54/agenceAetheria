'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    ['#cas-clients', 'Cas Clients'],
    ['#Services', 'Services'],
    ['#audit-gratuit', 'Audit'],
    ['#FAQ', 'FAQ'],
  ];

  const router = useRouter();

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full h-18 z-50  border-[var(--color-border)] transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/70 backdrop-blur-md shadow-sm'
          : 'bg-[var(--color-bg)]'
      }`}
    >
      <nav className=" mx-auto h-full flex items-center justify-between px-4">
        {/* LOGO + TEXTE ALIGNÉS À GAUCHE */}
        <div
          onClick={() => router.push('/')}
          className="flex justify-self-start items-center space-x-0 min-w-[220px] cursor-pointer"
        >
          <img
            src="/LogoAetheriaaNoBg.png"
            alt="Logo"
            className="h-18 w-auto"
          />
        <span className="text-cyan-700 text-3xl font-bold tracking-tight -ml-4 mt-2">
  etherIA
</span>

        </div>

        {/* NAVIGATION + BURGER ALIGNÉS */}
        <div className="flex items-center space-x-2">
          <ul className="hidden md:flex items-center gap-2 mt-3">
            {navItems.map(([href, label]) => (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] focus:outline-none focus:ring-2 focus:ring-cyan-600/40 transition-colors"
                  aria-label={label}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden focus:outline-none "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <ul className="md:hidden absolute top-18 left-0 w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] flex flex-col items-center space-y-2 py-4 z-40">
          {navItems.map(([href, label]) => (
            <li key={label}>
              <button
                onClick={() => handleNavClick(href)}
                className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] focus:outline-none focus:ring-2 focus:ring-cyan-600/40 transition-colors"
                aria-label={label}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}