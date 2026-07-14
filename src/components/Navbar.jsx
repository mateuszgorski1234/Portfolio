import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'Start', href: '#home' },
    { label: 'O mnie', href: '#about' },
    { label: 'Umiejętności', href: '#skills' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          M<span className="dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle mobile" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="hamburger" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
