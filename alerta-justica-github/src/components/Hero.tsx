import React from 'react';
import impactoImg from '../assets/images/impacto.jpg';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Tecnologia, Direito e Linguagem na luta contra o trabalho escravo.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Alerta Justiça é uma iniciativa interdisciplinar que visa combater o trabalho análogo à escravidão no Brasil, 
              promovendo informação, denúncia segura e acesso à justiça para as populações vulneráveis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#denuncie" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Denunciar
              </a>
              <a 
                href="#problema" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={impactoImg} 
                alt="Trabalhadores em condição análoga à escravidão" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                <p className="text-white text-sm italic">
                  A luta contra o trabalho escravo contemporâneo é um desafio que exige ação conjunta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
