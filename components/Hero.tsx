import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  onScrollToProducts: () => void;
}

const SUBTITLES = [
  "Semi-jóias únicas, feitas à mão com amor e flores naturais.",
  "Colares com flor natural desidratada.",
  "Lindos conjuntos que realçam seu estilo.",
  "Qualidade e carinho, você encontra aqui!",
  "Delicadeza em cada detalhe",
  "Peças que valorizam quem você é!",
  "Elegância natural para todos os momentos"
];

const Hero: React.FC<HeroProps> = ({ onScrollToProducts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % SUBTITLES.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(textInterval);
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
        <div className="max-w-4xl w-full">
          <h1 className="font-satisfy text-6xl md:text-8xl lg:text-9xl drop-shadow-lg mb-6">
            Elegância que Floresce
          </h1>
          
          {/* Rotating Text Container */}
          <div className="relative h-24 md:h-28 flex items-center justify-center overflow-hidden">
            {SUBTITLES.map((text, index) => (
              <p 
                key={index}
                className={`absolute w-full px-4 font-bebas text-2xl md:text-3xl tracking-widest uppercase drop-shadow-md transition-all duration-1000 ease-in-out transform ${
                  index === currentSubtitleIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          <button 
            onClick={onScrollToProducts}
            className="mt-4 px-8 py-3 bg-white text-[#8C5626] font-bebas text-xl tracking-wider uppercase rounded-full shadow-lg hover:bg-[#F2F2F2] transition-all duration-300 transform hover:scale-105"
          >
            Ver Coleção
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;