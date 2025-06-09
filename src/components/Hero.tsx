import React from 'react';
import { useTranslation } from 'react-i18next';
import impacto from '../assets/images/impacto.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              {t('hero.slogan')}
            </h2>
            <p className="text-gray-700 mb-8">
              {t('hero.intro')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#denuncie" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                {t('hero.reportButton')}
              </a>
              <a href="#problema" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
                {t('hero.learnMoreButton')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={impacto} 
                alt="Trabalhador em condição análoga à escravidão" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                <p className="text-sm">
                  {t('hero.imageCaption')}
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
