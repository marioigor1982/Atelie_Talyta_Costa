import React, { useState } from 'react';
import { LOGO_URL } from '../constants';
import type { SectionRefs } from '../types';

interface HeaderProps {
  refs: SectionRefs;
  onScrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ refs, onScrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', ref: refs.home },
    { label: 'Sobre Nós', ref: refs.about },
    { label: 'Coleção', ref: refs.products },
    { label: 'Contato', ref: refs.contact },
  ];

  const handleMobileLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    onScrollTo(ref);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-[#D9B36C] via-[#A6783F] to-[#8C5626] text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <button onClick={() => onScrollTo(refs.home)} className="flex items-center focus:outline-none group">
          {/* Responsive logo size */}
          <img src={LOGO_URL} alt="Talyta Costa Logo" className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-full mr-3 sm:mr-4 transition-transform duration-300 group-hover:scale-110" />
          {/* Responsive and always visible brand name */}
          <span className="font-satisfy text-3xl sm:text-4xl">Talyta Costa</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 md:space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => onScrollTo(item.ref)}
                  className="font-bebas uppercase tracking-wider text-xl px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#F2E8B3] hover:text-[#8C5626]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden" id="mobile-menu">
          <ul className="flex flex-col items-center py-2">
            {navItems.map((item) => (
              <li key={item.label} className="w-full">
                <button
                  onClick={() => handleMobileLinkClick(item.ref)}
                  className="w-full text-center font-bebas uppercase tracking-wider text-xl py-3 transition-all duration-300 hover:bg-[#F2E8B3] hover:text-[#8C5626]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;