import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  productTitle: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productTitle }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">Sem imagem</div>;
  }

  const handleOpenZoom = (image: string) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="w-full h-full">
      {/* Mobile View: Grid of thumbnails */}
      <div className="grid grid-cols-3 sm:hidden gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleOpenZoom(image)}
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
        <div className="relative flex-grow group cursor-zoom-in" onClick={() => handleOpenZoom(mainImage)} aria-label="Ampliar imagem">
          <img src={mainImage} alt={`Imagem principal de ${productTitle}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex-shrink-0 h-20 overflow-x-auto thumbnail-scrollbar">
          <div className="flex space-x-2 pb-2">
            {images.map((image, index) => (
              <button 
                key={index} 
                onClick={() => setMainImage(image)} 
                className={`w-20 aspect-square flex-shrink-0 rounded-md overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6783F] ${mainImage === image ? 'border-[#A6783F]' : 'border-transparent'}`}
                aria-label={`Selecionar imagem ${index + 1}`}
              >
                <img src={image} alt={`Miniatura ${index + 1} de ${productTitle}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={handleCloseZoom}
          role="dialog"
          aria-label="Imagem ampliada"
        >
          <img 
            src={zoomedImage} 
            alt={`Imagem ampliada de ${productTitle}`} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={handleCloseZoom} className="absolute top-4 right-4 text-white text-5xl hover:text-gray-300 transition-colors" aria-label="Fechar zoom">&times;</button>
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