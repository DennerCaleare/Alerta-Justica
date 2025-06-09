import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import perfilResgatados from '../assets/images/infograficos/perfil-resgatados.png';
import verbaCombate from '../assets/images/infograficos/verba-combate.png';
import historicoResgates from '../assets/images/infograficos/historico-resgates.jpeg';

const SobreProblema: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="problema" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          {t('problem.title')}
        </h2>
        
        <Tabs defaultValue="legislation" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="legislation">{t('problem.tabs.legislation')}</TabsTrigger>
            <TabsTrigger value="dados">{t('problem.tabs.data')}</TabsTrigger>
            <TabsTrigger value="ods">{t('problem.tabs.sdg')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="legislation" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('problem.legislation.title')}
            </h3>
            <p className="text-gray-700 mb-4">
              {t('problem.legislation.paragraph1')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('problem.legislation.paragraph2')}
            </p>
            <p className="text-gray-700">
              {t('problem.legislation.paragraph3')}
            </p>
          </TabsContent>
          
          <TabsContent value="dados" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('problem.data.title')}
            </h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  {t('problem.data.paragraph1')}
                </p>
                <p className="text-gray-700 mb-4">
                  {t('problem.data.paragraph2')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={verbaCombate} 
                  alt="Infográfico: Verba para o combate ao trabalho escravo" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t('problem.data.chartCaption1')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  {t('problem.data.paragraph3')}
                </p>
                <p className="text-gray-700">
                  {t('problem.data.paragraph4')}
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={perfilResgatados} 
                  alt="Infográfico: Perfil dos trabalhadores resgatados da escravidão" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t('problem.data.chartCaption2')}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ods" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('problem.sdg.title')}
            </h3>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-red-700 mb-2">
                    {t('problem.sdg.sdg8.title')}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {t('problem.sdg.sdg8.paragraph1')}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t('problem.sdg.sdg8.paragraph2')}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">
                    {t('problem.sdg.sdg16.title')}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {t('problem.sdg.sdg16.paragraph1')}
                  </p>
                  <p className="text-gray-700">
                    {t('problem.sdg.sdg16.paragraph2')}
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src={historicoResgates} 
                  alt="Histórico dos resgates de trabalhadores em condição análoga à escravidão no Brasil" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t('problem.sdg.chartCaption')}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SobreProblema;
