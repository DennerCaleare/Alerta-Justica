import React from 'react';
import { useTranslation } from 'react-i18next';

const Recursos: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="recursos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {t('resources.title')}
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          {t('resources.intro')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Materiais Educativos */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-blue-900">
                {t('resources.educational.title')}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('resources.educational.description')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{t('resources.educational.item1')}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{t('resources.educational.item2')}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{t('resources.educational.item3')}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{t('resources.educational.item4')}</span>
              </li>
            </ul>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              {t('resources.educational.button')}
            </button>
          </div>
          
          {/* Links Úteis */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <h3 className="text-xl font-semibold text-blue-900">
                {t('resources.links.title')}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('resources.links.description')}
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">{t('resources.links.mte.title')}</h4>
                <p className="text-sm text-gray-600">{t('resources.links.mte.description')}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  {t('resources.links.visit')} →
                </a>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">{t('resources.links.mpt.title')}</h4>
                <p className="text-sm text-gray-600">{t('resources.links.mpt.description')}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  {t('resources.links.visit')} →
                </a>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">{t('resources.links.oit.title')}</h4>
                <p className="text-sm text-gray-600">{t('resources.links.oit.description')}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  {t('resources.links.visit')} →
                </a>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900">{t('resources.links.reporterBrasil.title')}</h4>
                <p className="text-sm text-gray-600">{t('resources.links.reporterBrasil.description')}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  {t('resources.links.visit')} →
                </a>
              </div>
            </div>
          </div>
          
          {/* Legislação */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-blue-900">
                {t('resources.legislation.title')}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('resources.legislation.description')}
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-md p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 text-sm">{t('resources.legislation.article149.title')}</h4>
                <p className="text-xs text-gray-600 mt-1">{t('resources.legislation.article149.description')}</p>
              </div>
              <div className="bg-white rounded-md p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 text-sm">{t('resources.legislation.clt.title')}</h4>
                <p className="text-xs text-gray-600 mt-1">{t('resources.legislation.clt.description')}</p>
              </div>
              <div className="bg-white rounded-md p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 text-sm">{t('resources.legislation.constitution.title')}</h4>
                <p className="text-xs text-gray-600 mt-1">{t('resources.legislation.constitution.description')}</p>
              </div>
              <div className="bg-white rounded-md p-3 border border-gray-200">
                <h4 className="font-medium text-gray-900 text-sm">{t('resources.legislation.international.title')}</h4>
                <p className="text-xs text-gray-600 mt-1">{t('resources.legislation.international.description')}</p>
              </div>
            </div>
          </div>
          
          {/* Ferramentas e Apps */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-blue-900">
                {t('resources.tools.title')}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              {t('resources.tools.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('resources.tools.app1.title')}</h4>
                <p className="text-xs text-gray-600">{t('resources.tools.app1.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('resources.tools.app2.title')}</h4>
                <p className="text-xs text-gray-600">{t('resources.tools.app2.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('resources.tools.app3.title')}</h4>
                <p className="text-xs text-gray-600">{t('resources.tools.app3.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">{t('resources.tools.app4.title')}</h4>
                <p className="text-xs text-gray-600">{t('resources.tools.app4.description')}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 bg-blue-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{t('resources.cta.title')}</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('resources.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              {t('resources.cta.button1')}
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors">
              {t('resources.cta.button2')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recursos;

