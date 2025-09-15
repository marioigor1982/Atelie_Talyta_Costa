import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { WHATSAPP_LINK, WhatsAppIcon } from './constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg animate-color-loop transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = { home: homeRef, about: aboutRef, products: productsRef, contact: contactRef };

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white font-bebas text-gray-800">
      <Header refs={refs} onScrollTo={handleScrollTo} />
      <main>
        <div ref={homeRef}>
          <Hero onScrollToProducts={() => handleScrollTo(productsRef)} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={productsRef}>
          <Products />
        </div>
        <div ref={contactRef}>
          <CallToAction />
        </div>
      </main>
      <Footer refs={refs} onScrollTo={handleScrollTo} />
      <WhatsAppButton />
    </div>
  );
};

export default App;