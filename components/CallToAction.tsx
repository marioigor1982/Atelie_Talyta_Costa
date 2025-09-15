import React from 'react';
import { INSTAGRAM_LINK, WHATSAPP_LINK, InstagramIcon, WhatsAppIcon } from '../constants';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-satisfy text-5xl text-[#A6783F]">Encantou-se?</h2>
        <p className="font-bebas text-2xl text-gray-500 tracking-wider mt-2">
          Vamos conversar! Faça seu pedido exclusivo ou siga-nos para ver as novidades.
        </p>
        <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-green-500 text-white font-bebas text-xl tracking-wider uppercase rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Chamar no WhatsApp</span>
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bebas text-xl tracking-wider uppercase rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;