'use client';
import { useEffect, useState } from 'react';
import DarkComponent from './DarkComponent';
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
    ['#services', 'Services'],
    ['#a-propos', 'À propos'],
    ['#contact', 'Contact'],
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
      className={`fixed top-0 w-full h-18 z-50 border-b border-[var(--color-border)] transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/70 backdrop-blur-md shadow-sm'
          : 'bg-[var(--color-bg)]'
      }`}
    >
      <nav className=" mx-auto h-full flex items-center justify-between px-4">
        {/* LOGO + TEXTE ALIGNÉS À GAUCHE */}
        <div
          onClick={() => router.push('/')}
          className="flex justify-self-start items-center space-x-2 min-w-[220px] cursor-pointer"
        >
          <img
            src="/LogoAetheriaaNoBg.png"
            alt="Logo"
            className="h-18 w-auto"
          />
          <span className="text-cyan-700  text-3xl font-bold tracking-tight">
            AetherIA
          </span>
        </div>

        {/* NAVIGATION + DARK MODE + BURGER ALIGNÉS */}
        <div className="flex items-center space-x-2">
          <ul className="hidden md:flex space-x-2 text-sm text-cyan-700 font-medium mt-3">
            {navItems.map(([href, label]) => (
              <li key={label}>
                <button onClick={() => handleNavClick(href)} className="button">
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <DarkComponent className="h-6 w-6" />
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
        <ul className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] flex flex-col items-center space-y-4 py-4 z-40">
          {navItems.map(([href, label]) => (
            <li key={label}>
              <button
                onClick={() => handleNavClick(href)}
                className="text-sm font-medium"
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
