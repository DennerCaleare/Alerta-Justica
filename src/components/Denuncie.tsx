import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  reportType: string;
  state: string;
  city: string;
  address: string;
  description: string;
  workersCount: string;
  email: string;
  phone: string;
  terms: boolean;
}

interface FormErrors {
  reportType?: string;
  state?: string;
  city?: string;
  description?: string;
  terms?: string;
}

const Denuncie: React.FC = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<FormData>({
    reportType: '',
    state: '',
    city: '',
    address: '',
    description: '',
    workersCount: '',
    email: '',
    phone: '',
    terms: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const validateField = (name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'reportType':
        return !value ? t('report.form.validation.reportTypeRequired') : undefined;
      case 'state':
        return !value ? t('report.form.validation.stateRequired') : undefined;
      case 'city':
        return !value ? t('report.form.validation.cityRequired') : undefined;
      case 'description':
        return !value || (value as string).length < 20 
          ? t('report.form.validation.descriptionRequired') 
          : undefined;
      case 'terms':
        return !value ? t('report.form.validation.termsRequired') : undefined;
      default:
        return undefined;
    }
  };
  
  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.reportType = validateField('reportType', formData.reportType);
    newErrors.state = validateField('state', formData.state);
    newErrors.city = validateField('city', formData.city);
    newErrors.description = validateField('description', formData.description);
    newErrors.terms = validateField('terms', formData.terms);
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio da denúncia
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        reportType: '',
        state: '',
        city: '',
        address: '',
        description: '',
        workersCount: '',
        email: '',
        phone: '',
        terms: false
      });
      setErrors({});
    } catch (error) {
      console.error('Erro ao enviar denúncia:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="denuncie" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {t('report.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Indicadores de Segurança */}
          <div className="bg-green-50 border-b border-green-200 p-4">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center text-green-700">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">{t('report.security.encrypted')}</span>
              </div>
              <div className="flex items-center text-green-700">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium">{t('report.security.anonymous')}</span>
              </div>
              <div className="flex items-center text-green-700">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">{t('report.security.secure')}</span>
              </div>
            </div>
          </div>
          
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
          <form onSubmit={handleSubmit} className="p-6">
            {/* Tipo de Denúncia */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.reportType.label')} <span className="text-red-500">*</span>
              </label>
              <select 
                value={formData.reportType}
                onChange={(e) => handleInputChange('reportType', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.reportType ? 'border-red-500' : 'border-gray-300'
                }`}
                aria-label={t('report.form.reportType.label')}
              >
                <option value="">{t('report.form.reportType.placeholder')}</option>
                <option value="forced_labor">{t('report.form.reportType.options.forcedLabor')}</option>
                <option value="degrading_conditions">{t('report.form.reportType.options.degradingConditions')}</option>
                <option value="debt_bondage">{t('report.form.reportType.options.debtBondage')}</option>
                <option value="human_trafficking">{t('report.form.reportType.options.humanTrafficking')}</option>
                <option value="other">{t('report.form.reportType.options.other')}</option>
              </select>
              {errors.reportType && (
                <p className="text-red-500 text-sm mt-1">{errors.reportType}</p>
              )}
            </div>
            
            {/* Localização */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.location.label')} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.location.state')} <span className="text-red-500">*</span>
                  </label>
                  <select 
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.state ? 'border-red-500' : 'border-gray-300'
                    }`}
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
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    {t('report.form.location.city')} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.city ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t('report.form.location.cityPlaceholder')}
                    aria-label={t('report.form.location.city')}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-gray-600 text-sm mb-1">
                  {t('report.form.location.address')}
                </label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder={t('report.form.location.addressPlaceholder')}
                  aria-label={t('report.form.location.address')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('report.form.location.addressHelp')}
                </p>
              </div>
            </div>
            
            {/* Descrição */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {t('report.form.description.label')} <span className="text-red-500">*</span>
              </label>
              <textarea 
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={5}
                placeholder={t('report.form.description.placeholder')}
                aria-label={t('report.form.description.label')}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
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
                value={formData.workersCount}
                onChange={(e) => handleInputChange('workersCount', e.target.value)}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
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
                    checked={formData.terms}
                    onChange={(e) => handleInputChange('terms', e.target.checked)}
                    className={`w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 ${
                      errors.terms ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-label={t('report.form.terms')}
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  {t('report.form.terms')} <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mb-4">{errors.terms}</p>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-700 hover:bg-blue-800 text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('report.form.submitting')}
                  </div>
                ) : (
                  t('report.form.submit')
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                {t('report.form.disclaimer')}
              </p>
            </div>
          </form>
        </div>
        
        {/* Modal de Sucesso */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t('report.success.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('report.success.message')}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-4">
                  <p className="text-sm text-blue-700">
                    <strong>{t('report.success.trackingCode')}:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  {t('report.success.close')}
                </button>
              </div>
            </div>
          </div>
        )}
        
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
        
        {/* Seção de Perguntas Frequentes */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            {t('report.faq.title')}
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                onClick={() => {
                  const content = document.getElementById('faq-1');
                  const icon = document.getElementById('faq-icon-1');
                  if (content && icon) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{t('report.faq.q1.question')}</span>
                  <svg id="faq-icon-1" className="h-5 w-5 text-gray-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div id="faq-1" className="hidden px-6 pb-4">
                <p className="text-gray-600">{t('report.faq.q1.answer')}</p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                onClick={() => {
                  const content = document.getElementById('faq-2');
                  const icon = document.getElementById('faq-icon-2');
                  if (content && icon) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{t('report.faq.q2.question')}</span>
                  <svg id="faq-icon-2" className="h-5 w-5 text-gray-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div id="faq-2" className="hidden px-6 pb-4">
                <p className="text-gray-600">{t('report.faq.q2.answer')}</p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                onClick={() => {
                  const content = document.getElementById('faq-3');
                  const icon = document.getElementById('faq-icon-3');
                  if (content && icon) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{t('report.faq.q3.question')}</span>
                  <svg id="faq-icon-3" className="h-5 w-5 text-gray-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div id="faq-3" className="hidden px-6 pb-4">
                <p className="text-gray-600">{t('report.faq.q3.answer')}</p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                onClick={() => {
                  const content = document.getElementById('faq-4');
                  const icon = document.getElementById('faq-icon-4');
                  if (content && icon) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{t('report.faq.q4.question')}</span>
                  <svg id="faq-icon-4" className="h-5 w-5 text-gray-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div id="faq-4" className="hidden px-6 pb-4">
                <p className="text-gray-600">{t('report.faq.q4.answer')}</p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div>
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                onClick={() => {
                  const content = document.getElementById('faq-5');
                  const icon = document.getElementById('faq-icon-5');
                  if (content && icon) {
                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{t('report.faq.q5.question')}</span>
                  <svg id="faq-icon-5" className="h-5 w-5 text-gray-500 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div id="faq-5" className="hidden px-6 pb-4">
                <p className="text-gray-600">{t('report.faq.q5.answer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Denuncie;
