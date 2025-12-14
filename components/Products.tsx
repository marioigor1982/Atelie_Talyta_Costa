import React, { useRef, useEffect, useState } from 'react';
import type { ProductCategory } from '../types';
import ProductModal from './ProductModal';
import { HeartIcon } from '../constants';

const categories: ProductCategory[] = [
  {
    title: 'Conjuntos',
    video: 'https://ik.imagekit.io/marioigor82/V%C3%ADdeo_conjunto.mp4?updatedAt=1757877877569',
    description: ['A partir de R$ 125,00'],
    galleryImages: [
      'https://i.postimg.cc/1t8zfMDF/CONJUNTO-01.jpg',
      'https://i.postimg.cc/GmjtN4c4/CONJUNTO-02.jpg',
      'https://i.postimg.cc/9f8MmswV/CONJUNTO-03.jpg',
      'https://i.postimg.cc/Gpht1b2q/CONJUNTO-04.jpg',
      'https://i.postimg.cc/qqnMGRbM/CONJUNTO-05.jpg',
      'https://i.postimg.cc/DfbZhjvk/CONJUNTO-06.jpg',
      'https://i.postimg.cc/WbL41GzD/CONJUNTO-07.jpg',
      'https://i.postimg.cc/nc4hjX93/CONJUNTO-09.jpg',
      'https://i.postimg.cc/P5Kfy04Z/CONJUNTO-10.jpg',
      'https://i.postimg.cc/zfBzcptQ/CONJUNTO-11.jpg',
      'https://i.postimg.cc/25KkRvgS/CONJUNTO-12.jpg',
      'https://i.postimg.cc/TwB3mmc4/CONJUNTO-13.jpg'
    ],
    technicalDetails: 'Peças banhadas a ouro 18k com 5 milésimos.\nFlores naturais da espécie sempre-viva encapsuladas em resina epóxi.\nCorrente veneziana de 45cm e pingente/brincos combinando.\n\n✨ Conjuntos Exclusivos para Brilhar com Você! ✨\nDescubra a sofisticação em cada detalhe com nossos brincos e colares feitos à mão, criados com carinho e personalidade.\nLindas peças, que combinam com todos os estilos e valorizam ainda mais o seu look.\n\nPorque beleza é sentir-se única – e você merece um design pensado para realçar sua essência! 💎💫',
    whatsappIdentifier: 'Conjunto',
  },
  {
    title: 'Conjunto "Gota Negra"',
    video: 'https://ik.imagekit.io/marioigor82/CONJUNTO%20GOTA%20NEGRA%20CORRENTE%20BANHADA%20OURO%201.mp4',
    description: ['Banhado a Ouro 18k', 'R$ 120,00'],
    galleryImages: [
      'https://i.postimg.cc/VvDqrK39/CONJUNTO_GOTA_NEGRA_CORRENTE_BANHADA_OURO_3.jpg',
      'https://i.postimg.cc/kGfQ6TkK/CONJUNTO_GOTA_NEGRA_CORRENTE_BANHADA_OURO_4.jpg',
      'https://ik.imagekit.io/marioigor82/CONJUNTO%20GOTA%20NEGRA%20CORRENTE%20BANHADA%20OURO%201.mp4',
      'https://ik.imagekit.io/marioigor82/CONJUNTO%20GOTA%20NEGRA%20CORRENTE%20BANHADA%20OURO%202.mp4'
    ],
    technicalDetails: 'Conjunto "Gota Negra"\n\nDescrição técnica: Base e corrente veneziana banhada ouro 18k, 5 milésimos.\n\nPreço: R$ 120,00.\n\nUma peça sofisticada e moderna, ideal para quem busca elegância discreta e marcante.',
    whatsappIdentifier: 'Conjunto Gota Negra',
  },
  {
    title: 'Biojoia',
    video: 'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20PP%20FLOR%20NATURAL%20HOTENSIA%20CORRENTE%20BANHADA%20OURO%201.mp4',
    description: ['Conjunto PP Flor Natural', 'R$ 120,00'],
    galleryImages: [
      'https://i.postimg.cc/KvBnXrGs/BIJOIA-CONJUNTO-PP-FLOR-NATURAL-HOTENSIA-CORRENTE-BANHADA-OURO-2.jpg',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20PP%20FLOR%20NATURAL%20HOTENSIA%20CORRENTE%20BANHADA%20OURO%201.mp4',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20PP%20FLOR%20NATURAL%20HOTENSIA%20CORRENTE%20BANHADA%20OURO%203.mp4',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20PP%20FLOR%20NATURAL%20HOTENSIA%20CORRENTE%20BANHADA%20OURO%205.mp4'
    ],
    technicalDetails: 'Conjunto PP Flor natural Sempre Viva desidratada\n\nDescrição Técnica: Base e corrente veneziana banhada ouro 18k, 5 milésimos.\n\nPreço: R$ 120,00',
    whatsappIdentifier: 'Biojoia',
  },
  {
    title: 'Biojoia Orquídea',
    video: 'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20ORQU%C3%8DDEA%20NATURAL%20DESIDRATADA%20CORRENTE%20BANHADA%20OURO%201.mp4',
    description: ['Conjunto Orquídeas natural', 'R$ 150,00'],
    galleryImages: [
      'https://i.postimg.cc/qqkg9n1K/BIJOIA-CONJUNTO-ORQUIDEA-NATURAL-DESIDRATADA-CORRENTE-BANHADA-OURO-2.jpg',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20CONJUNTO%20ORQU%C3%8DDEA%20NATURAL%20DESIDRATADA%20CORRENTE%20BANHADA%20OURO%201.mp4'
    ],
    technicalDetails: 'Conjunto Orquídeas natural desidratada\n\nDescrição Técnica: Base e corrente veneziana banhada ouro 18k, 5 milésimos.\n\nPreço: R$ 150,00',
    whatsappIdentifier: 'Biojoia Orquídea',
  },
  {
    title: 'Biojoia Hortênsia',
    description: ['Conjunto Flor natural Hortênsia', 'R$ 150,00'],
    galleryImages: [
      'https://i.postimg.cc/9Fx5PTT4/BIJOIA-CONJUNTO-FLOR-NATURAL-HOTENSIA-CORRENTE-BANHADA-OURO-1.jpg',
      'https://i.postimg.cc/YqXKNggv/BIJOIA-CONJUNTO-FLOR-NATURAL-HOTENSIA-CORRENTE-BANHADA-OURO-2.jpg'
    ],
    technicalDetails: 'Conjunto Flor natural Hortênsia\n\nDescrição Técnica: Base e corrente veneziana banhada ouro 18k, 5 milésimos.\n\nPreço: R$ 150,00',
    whatsappIdentifier: 'Biojoia Hortênsia',
  },
  {
    title: 'Biojoia Colares',
    video: 'https://ik.imagekit.io/marioigor82/BIJOIA%20COLARES%20FLOR%20NATURAL%20DESIDRATADA%20CORRENTE%20ESLATANO%201.mp4',
    description: ['Colares com flor natural desidratada', 'A partir de R$ 75,00'],
    galleryImages: [
      'https://i.postimg.cc/jdnBpjFH/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-2.jpg',
      'https://i.postimg.cc/9Fws6fny/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-3.jpg',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20COLARES%20FLOR%20NATURAL%20DESIDRATADA%20CORRENTE%20ESLATANO%204.mp4',
      'https://i.postimg.cc/qM6WP75n/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-5.jpg',
      'https://i.postimg.cc/3J0zswcy/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-6.jpg',
      'https://i.postimg.cc/tCn8KgMR/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-7.jpg',
      'https://i.postimg.cc/fWr6qdBR/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-8.jpg',
      'https://i.postimg.cc/2jKP9WTg/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-10.jpg',
      'https://i.postimg.cc/RCDjptXB/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-11.jpg',
      'https://i.postimg.cc/fWr6qdBn/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-12.jpg',
      'https://i.postimg.cc/RCDjptGj/BIJOIA-COLARES-FLOR-NATURAL-DESIDRATADA-CORRENTE-ESLATANO-13.jpg',
      'https://ik.imagekit.io/marioigor82/BIJOIA%20COLARES%20FLOR%20NATURAL%20DESIDRATADA%20CORRENTE%20ESLATANO%201.mp4'
    ],
    technicalDetails: 'Colares com flor natural desidratada\n\nDescrição Técnica: Colar em corrente elastano.\n\nPreço: A partir de R$ 75,00',
    whatsappIdentifier: 'Biojoia Colares',
  },
  {
    title: 'Conjunto P',
    video: 'https://ik.imagekit.io/marioigor82/BASE%20A%C3%87O%20INIXID%C3%81VEL%20CORRENTE%20BANHADA%20OURO%201.mp4',
    description: ['Conjunto P (Verde azulado)', 'R$ 85,00'],
    galleryImages: [
      'https://i.postimg.cc/L8Sdppf2/BASE-ACO-INIXIDAVEL-CORRENTE-BANHADA-OURO-2.jpg',
      'https://ik.imagekit.io/marioigor82/BASE%20A%C3%87O%20INIXID%C3%81VEL%20CORRENTE%20BANHADA%20OURO%201.mp4'
    ],
    technicalDetails: 'Conjunto P (Verde azulado)\n\nDescrição técnica: Corrente veneziana banhada ouro 18k, 5 milésimos.\n\nPreço: R$ 85,00',
    whatsappIdentifier: 'Conjunto P',
  },
  {
    title: 'Brinco Médio',
    video: 'https://ik.imagekit.io/marioigor82/Brincos.mp4?updatedAt=1757878780805',
    description: ['Brinco médio base banhada a ouro 18K 5 milésimos', 'A partir de R$ 50,00'],
    galleryImages: [
        'https://i.postimg.cc/k4cXkh33/BRINCO-M-DIO-01.jpg',
        'https://i.postimg.cc/mgvDMHNq/BRINCO-M-DIO-02.jpg',
        'https://i.postimg.cc/c4j4ynjH/BRINCO-M-DIO-03.jpg',
        'https://i.postimg.cc/8Pnsp3FT/BRINCO-M-DIO-04.jpg',
        'https://i.postimg.cc/kg6GBc8K/BRINCO-M-DIO-05.jpg',
        'https://i.postimg.cc/Z5dYTqtL/BRINCO-M-DIO-06.jpg',
        'https://i.postimg.cc/mDbTNNcd/BRINCO-M-DIO-07.jpg',
        'https://i.postimg.cc/6QCQhpMQ/BRINCO-M-DIO-08.jpg',
        'https://i.postimg.cc/MTdqsMVz/BRINCO-M-DIO-09.jpg',
        'https://i.postimg.cc/FRmHCX6V/BRINCO-M-DIO-10.jpg',
        'https://i.postimg.cc/W4m2kf4F/BRINCO-M-DIO-11.jpg',
        'https://i.postimg.cc/SRxNq7kX/BRINCO-M-DIO-12.jpg',
        'https://i.postimg.cc/jjYxCrRY/BRINCO-M-DIO-13.jpg',
        'https://i.postimg.cc/1X7Rzn3v/BRINCO-M-DIO-14.jpg',
        'https://i.postimg.cc/4y0ZgDWM/BRINCO-M-DIO-15.jpg',
        'https://i.postimg.cc/Y00kTrzY/BRINCO-M-DIO-16.jpg',
        'https://i.postimg.cc/1Rv3BTrD/BRINCO-M-DIO-17.jpg'
    ],
    technicalDetails: 'Brinco médio com base banhada a ouro 18K 5 milésimo\n\n✨ Brinco Médio – Sofisticação que Transforma Seu Estilo! ✨\nUm detalhe pode mudar tudo – e nosso brinco médio com base banhada a ouro 18K (5 milésimos) é a prova disso.\nCada modelo é feito com carinho e dedicação, pensado para valorizar seu estilo e realçar sua beleza.\n\nCombinando inovação, personalidade e autenticidade, essa peça traz o equilíbrio perfeito entre elegância e modernidade. 💛\n\nPorque você merece brilhar em cada detalhe! ✨',
    whatsappIdentifier: 'Brinco Médio',
  },
  {
    title: 'Brinco pequeno',
    video: 'https://ik.imagekit.io/marioigor82/BrincosPequenos.mp4?updatedAt=1757898248005',
    description: ['Brinco pequeno em aço inoxidável, hipoalergênico', 'A partir de R$ 20,00'],
    galleryImages: [
        'https://i.postimg.cc/T2p9Y81P/Brinco_Pequeno01.jpg',
        'https://i.postimg.cc/FsSV3jj5/Brinco_Pequeno02.jpg',
        'https://i.postimg.cc/w3YNHnyF/Brinco_Pequeno03.jpg',
        'https://i.postimg.cc/qBSGNm6x/Brinco_Pequeno04.jpg',
        'https://i.postimg.cc/0yqdfbf6/Brinco_Pequeno05.jpg',
        'https://i.postimg.cc/dVmRSwH5/Brinco_Pequeno06.jpg',
        'https://i.postimg.cc/q7JsPSW4/Brinco_Pequeno07.jpg',
        'https://i.postimg.cc/Xvsf4x0F/Brinco_Pequeno08.jpg',
        'https://i.postimg.cc/Kz4nzLZW/Brinco_Pequeno09.jpg'
    ],
    technicalDetails: 'Brinco pequeno, aço inoxidável, hipoalergênico.\n\nFeitos em aço inoxidável hipoalergênico, esses lindos brincos unem beleza e cuidado, garantindo conforto em todos os momentos.\nPequenos no tamanho, mas grandes em sofisticação, são perfeitos tanto para o uso casual quanto para ocasiões especiais.\n\nCom um design leve e elegante, cada detalhe foi pensado para enriquecer seu estilo e transmitir o equilíbrio entre delicadeza e sofisticação. ✨\n\nPorque até os menores detalhes fazem você brilhar! 💎',
    whatsappIdentifier: 'Brinco pequeno',
  },
  {
    title: 'Colares',
    video: 'https://ik.imagekit.io/marioigor82/Colares_Tumbnail.mp4?updatedAt=1757881179355',
    description: ['Colar em poliéster a partir de R$ 75,00', 'Colar com corrente veneziana a partir de R$ 85,00'],
    galleryImages: [
      'https://i.postimg.cc/jq63KbQH/Colar_com_cordão_Poliéster.jpg',
      'https://i.postimg.cc/9FJxRYkz/Colar_com_corrente_veneziana_banhada_a_ouro_18k_5_milésimos.jpg',
      'https://i.postimg.cc/5N7r05qB/Colar-com-cord-o-Poli-ster1.jpg',
    ],
    technicalDetails: 'Temos 02 opções para os Colares:\n\nColar com cordão poliéster\nPreço: A partir de R$ 75,00\n\nColar com corrente veneziana banhada a ouro 18k 5 milésimos\nPreço: A partir de R$ 85,00\n\n✨ Colares que Traduzem Força e Sofisticação ✨\nSeja no cordão em poliéster ou na corrente veneziana banhada a ouro, cada detalhe foi pensado para proporcionar uma experiência única com a beleza e o brilho estonteante dessas peças.\n\nMais do que um acessório, nossos colares são um símbolo de empoderamento, robustez e personalidade, capazes de transformar qualquer look e destacar sua presença.\n\nPorque a verdadeira elegância está nos detalhes que contam sua história. 💛',
    whatsappIdentifier: 'Colar',
  },
  {
    title: 'Coleção Jeane',
    video: 'https://ik.imagekit.io/marioigor82/Cole%C3%A7%C3%A3o%20Jeane%20Costa.mp4?updatedAt=1757876781354',
    modalVideo: 'https://ik.imagekit.io/marioigor82/Cole%C3%A7%C3%A3o%20Jeane%20Costa.mp4?updatedAt=1757876781354',
    description: ['Inspirada na beleza da praia'],
    galleryImages: [
        'https://i.postimg.cc/wB7zT255/jeane1.jpg',
        'https://i.postimg.cc/VLkfPscK/jeane2.jpg',
        'https://i.postimg.cc/Y9wf8nGM/Header-4.jpg'
    ],
    technicalDetails: `Coleção especial com elementos que remetem ao mar, como conchas e estrelas-do-mar, combinados com flores sempre-vivas.
Acabamento em ouro 18k.

Em meio à brisa suave e ao canto das ondas, a Coleção Jeane floresce, trazendo o verão para mais perto de você.

Esta não é apenas uma coleção, é uma jornada sensorial que une a beleza serena do mar com a delicadeza das flores sempre-vivas. Cada peça, meticulosamente trabalhada, celebra a união entre o clima tropical e a riqueza da natureza.

A Coleção Jeane é o convite perfeito para quem ama a liberdade da praia, mas não abre mão da elegância. Use o charme descontraído do verão onde quer que você esteja e traga um pedacinho do paraíso para o seu dia a dia.`,
    whatsappIdentifier: 'Coleção Jeane',
  }
];


const Products: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const animationFrameRef = useRef<number | null>(null);
  const interactionTimerRef = useRef<number | null>(null);

  // Duplicate categories for infinite loop effect
  const displayCategories = [...categories, ...categories];

  const handleLikeToggle = (productTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProducts(prevLiked => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(productTitle)) {
        newLiked.delete(productTitle);
      } else {
        newLiked.add(productTitle);
      }
      return newLiked;
    });
  };

  const stopAutoScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
     if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = null;
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll(); // Prevent multiple animation loops
    animationFrameRef.current = requestAnimationFrame(autoScrollStep);
  };
  
  const autoScrollStep = () => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const halfWidth = container.scrollWidth / 2;
        
        container.scrollLeft += 0.5; // Adjust this value for scroll speed

        // When the scroll position reaches the start of the duplicated content,
        // silently jump back to the equivalent position to create a loop.
        if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
        }
    }
    animationFrameRef.current = requestAnimationFrame(autoScrollStep);
  };
  
  const handleInteraction = () => {
    stopAutoScroll();
    // Resume auto-scrolling after 5 seconds of inactivity
    interactionTimerRef.current = window.setTimeout(startAutoScroll, 5000);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start scrolling only if the element is in view and no modal is open
        if (entry.isIntersecting && !selectedProduct) {
          startAutoScroll();
        } else {
          stopAutoScroll();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    // Add interaction listeners to pause auto-scroll
    container?.addEventListener('wheel', handleInteraction, { passive: true });
    container?.addEventListener('touchstart', handleInteraction, { passive: true });
    container?.addEventListener('mousedown', handleInteraction, { passive: true });

    return () => {
      stopAutoScroll();
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      // Cleanup interaction listeners
      container?.removeEventListener('wheel', handleInteraction);
      container?.removeEventListener('touchstart', handleInteraction);
      container?.removeEventListener('mousedown', handleInteraction);
    };
  }, [selectedProduct]); // Rerun effect if modal state changes

  const scrollByPage = (direction: 'left' | 'right') => {
    handleInteraction(); // Treat button clicks as an interaction
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ 
        left: direction === 'right' ? scrollAmount : -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };


  return (
    <section ref={sectionRef} className="py-20 bg-[#FDFDFD]">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-6">
          <h2 className="font-satisfy text-5xl text-[#A6783F]">Nossas Coleções</h2>
          <p className="font-bebas text-2xl text-gray-500 tracking-wider mt-2">Descubra Nossas Categorias</p>
        </div>

        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={handleInteraction}
          onMouseLeave={handleInteraction}
        >
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto p-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayCategories.map((category, index) => (
              <div key={index} className="relative aspect-[3/4] w-64 md:w-72 flex-shrink-0 group rounded-xl overflow-hidden shadow-lg transform transition-transform,box-shadow duration-300 md:hover:shadow-2xl md:hover:scale-105">
                <button
                  onClick={(e) => handleLikeToggle(category.title, e)}
                  className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/30 backdrop-blur-sm group/heart transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={`Curtir ${category.title}`}
                  aria-pressed={likedProducts.has(category.title)}
                >
                  <HeartIcon
                    className={`w-6 h-6 transition-colors ${likedProducts.has(category.title) ? 'text-red-500' : 'text-white group-hover/heart:text-red-400'}`}
                    isLiked={likedProducts.has(category.title)}
                  />
                </button>
                {category.video ? (
                  <video
                    src={category.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110"
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                ) : (
                  <img
                    src={category.galleryImages[0]}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 z-10"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                  <div>
                    <h3 className="font-satisfy text-4xl drop-shadow-md">{category.title}</h3>
                    <div className="font-satisfy text-xl mt-2 opacity-90 drop-shadow-sm">
                      <ul className="space-y-1 list-none">
                        {category.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity,transform duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <button
                      onClick={() => setSelectedProduct(category)}
                      className="px-6 py-2 bg-white/90 text-[#8C5626] font-bebas text-lg tracking-wider uppercase rounded-full shadow-lg backdrop-blur-sm hover:bg-white"
                      aria-label={`Ver detalhes de ${category.title}`}
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => scrollByPage('left')}
            aria-label="Previous collection"
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-6 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => scrollByPage('right')}
            aria-label="Next collection"
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-6 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default Products;