import React from 'react';
import { useTranslation } from 'react-i18next';

// Importando imagens das bandeiras
const usFlag = 'https://flagcdn.com/w40/us.png';
const brFlag = 'https://flagcdn.com/w40/br.png';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`flex items-center space-x-1 p-1 rounded-md ${i18n.language === 'en' ? 'ring-2 ring-blue-500' : ''}`}
        title={t('languageSwitcher.english')}
        aria-label={t('languageSwitcher.english')}
      >
        <img src={usFlag} alt="US Flag" className="w-6 h-4 object-cover rounded-sm" />
      </button>
      <button 
        onClick={() => changeLanguage('pt-BR')} 
        className={`flex items-center space-x-1 p-1 rounded-md ${i18n.language === 'pt-BR' ? 'ring-2 ring-blue-500' : ''}`}
        title={t('languageSwitcher.portuguese')}
        aria-label={t('languageSwitcher.portuguese')}
      >
        <img src={brFlag} alt="Brazil Flag" className="w-6 h-4 object-cover rounded-sm" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
