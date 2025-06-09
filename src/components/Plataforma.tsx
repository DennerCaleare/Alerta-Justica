import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import digitalJustice from '../assets/images/platform/digital-justice.jpg';
import platformConcept from '../assets/images/platform/platform-concept.jpg';

const Plataforma: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="plataforma" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          {t('platform.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <p className="text-gray-700 text-lg">
              {t('platform.intro')}
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={platformConcept} 
              alt="Plataforma Digital Alerta Justiça" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        
        <Tabs defaultValue="concept" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="concept">{t('platform.tabs.concept')}</TabsTrigger>
            <TabsTrigger value="reporting">{t('platform.tabs.reporting')}</TabsTrigger>
            <TabsTrigger value="education">{t('platform.tabs.education')}</TabsTrigger>
            <TabsTrigger value="data">{t('platform.tabs.data')}</TabsTrigger>
          </TabsList>
          
          {/* Conceito */}
          <TabsContent value="concept" className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  {t('platform.concept.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('platform.concept.paragraph1')}
                </p>
                <p className="text-gray-700 mb-2 font-semibold">
                  {t('platform.concept.paragraph2')}
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li className="text-gray-700">{t('platform.concept.pillar1')}</li>
                  <li className="text-gray-700">{t('platform.concept.pillar2')}</li>
                  <li className="text-gray-700">{t('platform.concept.pillar3')}</li>
                </ul>
                <p className="text-gray-700">
                  {t('platform.concept.paragraph3')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={digitalJustice} 
                  alt="Justiça Digital e Tecnologia" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-blue-50 p-4 rounded-lg mt-6 border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">
                    {t('platform.cta.title')}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {t('platform.cta.text')}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                    {t('platform.cta.button')}
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Sistema de Denúncia */}
          <TabsContent value="reporting" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('platform.reporting.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('platform.reporting.paragraph1')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-700 mb-4">
                  {t('platform.reporting.features')}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.reporting.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.reporting.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.reporting.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.reporting.feature4')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h4 className="text-lg font-semibold text-blue-900">Formulário de Denúncia</h4>
                  <p className="text-sm text-gray-500">Protótipo de interface</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Denúncia</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                      <option>Trabalho forçado</option>
                      <option>Jornada exaustiva</option>
                      <option>Condições degradantes</option>
                      <option>Restrição de locomoção</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Localização (Estado/Cidade)</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Ex: São Paulo / Ribeirão Preto" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descrição da Situação</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={3} placeholder="Descreva o que está acontecendo..."></textarea>
                  </div>
                  <div className="pt-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors w-full">
                      Enviar Denúncia Anônima
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700 mb-4">
                {t('platform.reporting.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('platform.reporting.paragraph3')}
              </p>
            </div>
          </TabsContent>
          
          {/* Recursos Educativos */}
          <TabsContent value="education" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('platform.education.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('platform.education.paragraph1')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-4">
                  {t('platform.education.resources')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-700">{t('platform.education.resource1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-700">{t('platform.education.resource2')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-700">{t('platform.education.resource3')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-700">{t('platform.education.resource4')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Materiais Educativos Disponíveis</h4>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Cartilha: Conheça seus direitos trabalhistas</p>
                      <p className="text-sm text-gray-500">PDF - 2.3 MB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="h-8 w-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Vídeo: Como identificar trabalho escravo</p>
                      <p className="text-sm text-gray-500">MP4 - 18 minutos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                    <svg className="h-8 w-8 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Infográfico: Mapa do trabalho escravo no Brasil</p>
                      <p className="text-sm text-gray-500">PNG - 1.5 MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700 mb-4">
                {t('platform.education.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('platform.education.paragraph3')}
              </p>
            </div>
          </TabsContent>
          
          {/* Painel de Dados */}
          <TabsContent value="data" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('platform.data.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('platform.data.paragraph1')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-4">
                  {t('platform.data.features')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="text-gray-700">{t('platform.data.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.data.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-700">{t('platform.data.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-gray-700">{t('platform.data.feature4')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h4 className="text-lg font-semibold text-blue-900">Visualização de Dados</h4>
                  <p className="text-sm text-gray-500">Protótipo de interface</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium">Resgates por Estado (2024)</h5>
                      <span className="text-xs text-gray-500">Fonte: MTE</span>
                    </div>
                    <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Gráfico de barras interativo</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium">Setores Econômicos</h5>
                      <span className="text-xs text-gray-500">Fonte: MTE</span>
                    </div>
                    <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Gráfico de pizza interativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700 mb-4">
                {t('platform.data.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('platform.data.paragraph3')}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Plataforma;
