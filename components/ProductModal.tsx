import React, { useEffect } from 'react';
import type { ProductCategory } from '../types';
import { WhatsAppIcon } from '../constants';
import ImageGallery from './ImageGallery';

interface ProductModalProps {
  product: ProductCategory | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`Olá Talyta, vim pelo site e gostei do "${product.whatsappIdentifier}", poderia me ajudar?`);
  const whatsappLink = `https://api.whatsapp.com/send?phone=5511993590875&text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col sm:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full sm:w-1/2 flex-shrink-0">
          {product.modalVideo ? (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <video
                src={product.modalVideo}
                autoPlay
                loop
                muted={true}
                defaultMuted={true}
                ref={(el) => { if (el) el.muted = true; }}
                playsInline
                className="w-full h-full object-contain max-h-[45vh] sm:max-h-full pointer-events-none"
                aria-label={`Vídeo da ${product.title}`}
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          ) : (
            <div className="p-4 sm:p-6 sm:h-full max-h-[45vh] sm:max-h-none overflow-y-auto sm:overflow-y-visible">
              <ImageGallery images={product.galleryImages} productTitle={product.title} />
            </div>
          )}
        </div>

        <div className="w-full sm:w-1/2 p-4 sm:p-8 flex flex-col bg-[#FEFBF6] flex-1 min-h-0">
          <div className="flex-grow overflow-y-auto pr-2">
            <div className="flex justify-between items-start mb-4">
              <h2 id="product-title" className="font-satisfy text-4xl md:text-5xl text-[#A6783F]">{product.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 transition-colors flex flex-col items-center"
                aria-label="Fechar modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-xs font-bebas tracking-wider mt-1">FECHAR</span>
              </button>
            </div>
            
            <h3 className="font-bebas text-xl tracking-wider text-gray-600 mb-2">Detalhes Técnicos</h3>
            <p className="font-sans text-gray-700 leading-relaxed whitespace-pre-wrap">
              {product.technicalDetails}
            </p>
          </div>

          <div className="mt-auto pt-4 flex-shrink-0 border-t border-gray-200">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bebas text-xl tracking-wider uppercase rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Encomende já</span>
            </a>
          </div>
        </div>
      </div>
      <style>{`
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

export default ProductModal;