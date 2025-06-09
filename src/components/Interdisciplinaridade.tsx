import React from 'react';
import { useTranslation } from 'react-i18next';
import interdisciplinaryDiagram from '../assets/images/interdisciplinarity/interdisciplinary-diagram.png';
import collaborationTech from '../assets/images/interdisciplinarity/collaboration-tech.png';
import linguistics from '../assets/images/interdisciplinarity/linguistics.jpg';

const Interdisciplinaridade: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="interdisciplinaridade" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {t('interdisciplinarity.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <p className="text-gray-700 text-lg">
              {t('interdisciplinarity.intro')}
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={interdisciplinaryDiagram} 
              alt="Diagrama de Interdisciplinaridade" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        
        {/* Áreas do Conhecimento */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Direito */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {t('interdisciplinarity.areas.law.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('interdisciplinarity.areas.law.description')}
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">
                {t('interdisciplinarity.areas.law.contributions')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.law.contribution1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.law.contribution2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.law.contribution3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.law.contribution4')}</span>
                </li>
              </ul>
            </div>
            
            {/* Linguística */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {t('interdisciplinarity.areas.linguistics.title')}
              </h3>
              <div className="mb-4">
                <img 
                  src={linguistics} 
                  alt="Linguística aplicada" 
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
              </div>
              <p className="text-gray-700 mb-4">
                {t('interdisciplinarity.areas.linguistics.description')}
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">
                {t('interdisciplinarity.areas.linguistics.contributions')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.linguistics.contribution1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.linguistics.contribution2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.linguistics.contribution3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.linguistics.contribution4')}</span>
                </li>
              </ul>
            </div>
            
            {/* Tecnologia */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {t('interdisciplinarity.areas.technology.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('interdisciplinarity.areas.technology.description')}
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">
                {t('interdisciplinarity.areas.technology.contributions')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.technology.contribution1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.technology.contribution2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.technology.contribution3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{t('interdisciplinarity.areas.technology.contribution4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Integração na Prática */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            {t('interdisciplinarity.integration.title')}
          </h3>
          
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <p className="text-gray-700 mb-4">
                {t('interdisciplinarity.integration.paragraph1')}
              </p>
              <h4 className="font-semibold text-blue-700 mb-2">
                {t('interdisciplinarity.integration.examples')}
              </h4>
            </div>
            <div className="md:w-1/2">
              <img 
                src={collaborationTech} 
                alt="Colaboração e Tecnologia" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">
                {t('interdisciplinarity.integration.example1.title')}
              </h4>
              <p className="text-gray-700">
                {t('interdisciplinarity.integration.example1.description')}
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">
                {t('interdisciplinarity.integration.example2.title')}
              </h4>
              <p className="text-gray-700">
                {t('interdisciplinarity.integration.example2.description')}
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">
                {t('interdisciplinarity.integration.example3.title')}
              </h4>
              <p className="text-gray-700">
                {t('interdisciplinarity.integration.example3.description')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Pesquisa e Inovação */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            {t('interdisciplinarity.research.title')}
          </h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              {t('interdisciplinarity.research.paragraph1')}
            </p>
            
            <h4 className="font-semibold text-blue-700 mb-4">
              {t('interdisciplinarity.research.paragraph2')}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="font-medium text-blue-900">Projeto 1</span>
                </div>
                <p className="text-gray-700 text-sm">
                  {t('interdisciplinarity.research.project1')}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-blue-900">Projeto 2</span>
                </div>
                <p className="text-gray-700 text-sm">
                  {t('interdisciplinarity.research.project2')}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-blue-900">Projeto 3</span>
                </div>
                <p className="text-gray-700 text-sm">
                  {t('interdisciplinarity.research.project3')}
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              {t('interdisciplinarity.research.paragraph3')}
            </p>
          </div>
        </div>
        
        {/* Chamada para Colaboração */}
        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {t('interdisciplinarity.collaboration.title')}
          </h3>
          <p className="mb-4 text-center">
            {t('interdisciplinarity.collaboration.paragraph1')}
          </p>
          <p className="mb-6 text-center">
            {t('interdisciplinarity.collaboration.paragraph2')}
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-6 rounded-md transition-colors">
              {t('interdisciplinarity.collaboration.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interdisciplinaridade;
