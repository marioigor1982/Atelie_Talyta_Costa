import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  onScrollToProducts: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToProducts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Images Slideshow */}
      {HERO_IMAGES.map((imageUrl, index) => (
        <div
          key={imageUrl}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/70 z-10"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white z-20 p-4">
        <div>
          <h1 className="font-satisfy text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">
            Elegância que Floresce
          </h1>
          <p className="font-bebas text-2xl md:text-3xl mt-4 tracking-widest uppercase drop-shadow-md">
            Semi-jóias únicas, feitas à mão com amor e flores naturais.
          </p>
          <button 
            onClick={onScrollToProducts}
            className="mt-8 px-8 py-3 bg-white text-[#8C5626] font-bebas text-xl tracking-wider uppercase rounded-full shadow-lg hover:bg-[#F2F2F2] transition-all duration-300 transform hover:scale-105"
          >
            Ver Coleção
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;