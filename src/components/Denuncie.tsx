import React from 'react';
import { useTranslation } from 'react-i18next';

const Denuncie: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="denuncie" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {t('report.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cabeçalho do formulário */}
          <div className="bg-blue-900 text-white p-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="h-10 w-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-semibold">{t('report.form.header')}</h3>
            </div>
            <p className="text-center text-gray-200">
              {t('report.form.securityNotice')}
            </p>
          </div>
          
          {/* Introdução */}
          <div className="p-6 border-b">
            <p className="text-gray-700 mb-4">
              {t('report.introduction')}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-700">
                {t('report.privacyNote')}
              </p>
            </div>
          </div>
          
          {/* Formulário */}
          <form className="p-6">
            {/* Tipo de Denúncia */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.reportType.label')}
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={t('report.form.reportType.label')}
              >
                <option value="">{t('report.form.reportType.placeholder')}</option>
                <option value="forced_labor">{t('report.form.reportType.options.forcedLabor')}</option>
                <option value="degrading_conditions">{t('report.form.reportType.options.degradingConditions')}</option>
                <option value="debt_bondage">{t('report.form.reportType.options.debtBondage')}</option>
                <option value="human_trafficking">{t('report.form.reportType.options.humanTrafficking')}</option>
                <option value="other">{t('report.form.reportType.options.other')}</option>
              </select>
            </div>
            
            {/* Localização */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.location.label')}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.location.state')}
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={t('report.form.location.state')}
                  >
                    <option value="">{t('report.form.location.statePlaceholder')}</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.location.city')}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('report.form.location.cityPlaceholder')}
                    aria-label={t('report.form.location.city')}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-gray-600 text-sm mb-1">
                  {t('report.form.location.address')}
                </label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder={t('report.form.location.addressPlaceholder')}
                  aria-label={t('report.form.location.address')}
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  {t('report.form.location.addressHelp')}
                </p>
              </div>
            </div>
            
            {/* Descrição */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.description.label')}
              </label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder={t('report.form.description.placeholder')}
                aria-label={t('report.form.description.label')}
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                {t('report.form.description.help')}
              </p>
            </div>
            
            {/* Número de Trabalhadores */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.workersCount.label')}
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={t('report.form.workersCount.label')}
              >
                <option value="">{t('report.form.workersCount.placeholder')}</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-20">11-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">{t('report.form.workersCount.moreThan50')}</option>
                <option value="unknown">{t('report.form.workersCount.unknown')}</option>
              </select>
            </div>
            
            {/* Contato (opcional) */}
            <div className="mb-6 border-t pt-6">
              <h4 className="text-lg font-medium text-gray-700 mb-4">
                {t('report.form.contact.title')}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {t('report.form.contact.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.contact.email')}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('report.form.contact.emailPlaceholder')}
                    aria-label={t('report.form.contact.email')}
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.contact.phone')}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('report.form.contact.phonePlaceholder')}
                    aria-label={t('report.form.contact.phone')}
                  />
                </div>
              </div>
            </div>
            
            {/* Termos e Envio */}
            <div className="border-t pt-6">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    aria-label={t('report.form.terms')}
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  {t('report.form.terms')}
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                {t('report.form.submit')}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                {t('report.form.disclaimer')}
              </p>
            </div>
          </form>
        </div>
        
        {/* Informações Adicionais */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            {t('report.additionalInfo.title')}
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              {t('report.additionalInfo.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">
                    {t('report.additionalInfo.phone.title')}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {t('report.additionalInfo.phone.description')}
                  </p>
                  <p className="mt-2 text-base font-semibold text-blue-700">
                    {t('report.additionalInfo.phone.number')}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-900">
                    {t('report.additionalInfo.email.title')}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {t('report.additionalInfo.email.description')}
                  </p>
                  <p className="mt-2 text-base font-semibold text-blue-700">
                    {t('report.additionalInfo.email.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Denuncie;
