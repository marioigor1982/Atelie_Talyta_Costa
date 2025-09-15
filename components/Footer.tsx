import React from 'react';
import { INSTAGRAM_LINK, WHATSAPP_LINK, InstagramIcon, WhatsAppIcon, LOGO_URL, PhoneIcon, EmailIcon } from '../constants';
import type { SectionRefs } from '../types';

interface FooterProps {
  refs: SectionRefs;
  onScrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Footer: React.FC<FooterProps> = ({ refs, onScrollTo }) => {
  const navItems = [
    { label: 'Início', ref: refs.home },
    { label: 'Sobre Nós', ref: refs.about },
    { label: 'Coleção', ref: refs.products },
    { label: 'Contato', ref: refs.contact },
  ];

  return (
    <footer className="bg-[#A6783F] text-white font-sans">
      <div className="container mx-auto pt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button onClick={() => onScrollTo(refs.home)} className="flex items-center focus:outline-none group">
              <img src={LOGO_URL} alt="Talyta Costa Logo" className="h-20 w-20 object-cover rounded-full mr-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-satisfy text-4xl text-white">
                Talyta Costa
              </span>
            </button>
            <p className="text-sm text-[#F2E8B3] leading-relaxed max-w-sm mx-auto md:mx-0">
              Semi-jóias artesanais feitas com amor e dedicação, trazendo elegância e sofisticação para o seu estilo.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bebas text-2xl tracking-wider text-[#F2E8B3] mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-3 text-gray-200">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onScrollTo(item.ref)}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bebas text-2xl tracking-wider text-[#F2E8B3] mb-4">CONTATO</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <PhoneIcon className="w-5 h-5 text-[#F2E8B3]" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  (11) 99359-0875
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <EmailIcon className="w-5 h-5 text-[#F2E8B3]" />
                <a href="mailto:contato@talyta.com" className="hover:text-white transition-colors duration-300">
                  contato@talyta.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                  <WhatsAppIcon className="w-6 h-6"/>
               </a>
               <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                  <InstagramIcon className="w-5 h-5"/>
               </a>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-12 border-t border-white/20 py-6 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Ateliê Talyta Costa. Todos os direitos reservados.</p>
        <p className="mt-1">Desenvolvido com <span role="img" aria-label="heart">❤️</span> por sua equipe</p>
      </div>
    </footer>
  );
};

export default Footer;