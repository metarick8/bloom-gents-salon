import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Scissors } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: t('navbar.about') },
    { href: '#services', text: t('navbar.services') },
    { href: '#team', text: t('navbar.team') },
    { href: '#gallery', text: t('navbar.gallery') },
    { href: '#booking', text: t('navbar.booking') },
    { href: '#contact', text: t('navbar.contact') }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <div className="flex items-center">
              <Scissors className="text-white mr-3" size={28} />
              <span className="text-white text-2xl font-playfair font-bold tracking-wider">
                {t('navbar.brand')}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-gray-300 transition-colors duration-200 relative group"
                  >
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Language Switcher and Book Button */}
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <button
                  onClick={(e) => handleNavClick(e, '#booking')}
                  className="btn-primary text-sm"
                >
                  {t('navbar.bookNow')}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center">
              <Scissors className="text-white mr-3" size={24} />
              <span className="text-white text-xl font-playfair font-bold tracking-wider">
                {t('navbar.brand')}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white text-lg hover:text-gray-300 transition-colors duration-200 py-2"
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <button
                onClick={(e) => handleNavClick(e, '#booking')}
                className="btn-primary w-full text-center"
              >
                {t('navbar.bookNow')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
