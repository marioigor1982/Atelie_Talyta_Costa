import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger animation when 20% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-satisfy text-5xl text-[#A6783F]">Nossa Essência</h2>
          <p className="font-bebas text-2xl text-gray-500 tracking-wider mt-2">Feito com Alma e Natureza</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image container with animation */}
          <div
            className={`md:w-1/2 flex justify-center transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img 
              src="https://i.postimg.cc/8PskX1VP/sem-fundo-1.png" 
              alt="Colar com flor natural desidratada" 
              className="rounded-lg shadow-2xl max-w-lg w-full"
            />
          </div>
          {/* Text container with animation */}
          <div
            className={`md:w-1/2 text-lg text-gray-700 leading-relaxed font-sans transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <p className="mb-4">
              Bem-vindo ao Ateliê Talyta Costa, um lugar onde a delicadeza da natureza encontra o brilho eterno das semi-jóias. Cada peça é cuidadosamente confeccionada à mão, transformando sentimentos em acessórios únicos.
            </p>
            <p className="mb-4">
              Nossa especialidade são brincos e colares que carregam um toque mágico: <strong className="text-[#A6783F]">flores naturais desidratadas da espécie sempre-viva</strong>, encapsuladas para preservar sua beleza. É a poesia da natureza eternizada para você.
            </p>
            <p>
              Todas as nossas criações recebem um banho de <strong className="text-[#A6783F]">ouro 18k com 5 milésimos de espessura</strong>, garantindo não apenas um acabamento impecável e duradouro, mas também a qualidade e o valor que você merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;