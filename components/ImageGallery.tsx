import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  productTitle: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const mainImage = images[currentIndex];

  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">Sem imagem</div>;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleZoomPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedImageIndex(prevIndex => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleZoomNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomedImageIndex(prevIndex => {
      if (prevIndex === null) return 0;
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomedImageIndex !== null) {
        if (e.key === 'ArrowLeft') {
          setZoomedImageIndex(prevIndex => {
            if (prevIndex === null) return 0;
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
          });
        } else if (e.key === 'ArrowRight') {
          setZoomedImageIndex(prevIndex => {
            if (prevIndex === null) return 0;
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
          });
        }
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, zoomedImageIndex]);

  const handleOpenZoom = (index: number) => {
    setZoomedImageIndex(index);
  };

  const handleCloseZoom = () => {
    setZoomedImageIndex(null);
  };

  return (
    <div className="w-full h-full">
      {/* Mobile View: Grid of thumbnails */}
      <div className="grid grid-cols-4 sm:hidden gap-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleOpenZoom(index)}
            className="aspect-square rounded-md overflow-hidden border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6783F]"
            aria-label={`Ver imagem ${index + 1} em tamanho grande`}
          >
            <img src={image} alt={`Miniatura ${index + 1} de ${productTitle}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Desktop View: Main image + horizontal thumbnails */}
      <div className="hidden sm:flex flex-col gap-3 h-full">
        {/* Main Image */}
        <div className="relative flex-grow group" aria-label="Galeria de imagens, use as setas para navegar">
          <img 
            src={mainImage} 
            alt={`Imagem principal de ${productTitle}`} 
            className="w-full h-full object-cover rounded-lg shadow-lg cursor-zoom-in" 
            onClick={() => handleOpenZoom(currentIndex)}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Imagem anterior"
                className="absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
        
        {/* Thumbnails */}
        <div className="flex-shrink-0 h-20 overflow-x-auto thumbnail-scrollbar">
          <div className="flex space-x-2 pb-2">
            {images.map((image, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)} 
                className={`w-20 aspect-square flex-shrink-0 rounded-md overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6783F] ${currentIndex === index ? 'border-[#A6783F]' : 'border-transparent'}`}
                aria-label={`Selecionar imagem ${index + 1}`}
              >
                <img src={image} alt={`Miniatura ${index + 1} de ${productTitle}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseZoom}
          role="dialog"
          aria-label="Imagem ampliada"
        >
          {images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={handleZoomPrev}
                aria-label="Imagem anterior"
                className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-[1000] w-10 h-10 sm:w-12 sm:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              {/* Next Button */}
              <button
                onClick={handleZoomNext}
                aria-label="Próxima imagem"
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-[1000] w-10 h-10 sm:w-12 sm:h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
          
          <img 
            src={images[zoomedImageIndex]} 
            alt={`Imagem ampliada de ${productTitle}`} 
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            onClick={handleCloseZoom} 
            className="absolute top-4 right-4 z-[1000] text-white hover:text-gray-300 transition-colors flex flex-col items-center" 
            aria-label="Fechar zoom"
          >
            <span className="text-5xl leading-none">&times;</span>
            <span className="text-xs font-bebas tracking-widest mt-1">FECHAR</span>
          </button>
        </div>
      )}
      <style>{`
        /* Horizontal Scrollbar styling for desktop thumbnails */
        .thumbnail-scrollbar::-webkit-scrollbar {
          height: 5px;
        }
        .thumbnail-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thumbnail-scrollbar::-webkit-scrollbar-thumb {
          background: #D9B36C;
          border-radius: 10px;
        }
        .thumbnail-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #A6783F;
        }
        .thumbnail-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #D9B36C transparent;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;