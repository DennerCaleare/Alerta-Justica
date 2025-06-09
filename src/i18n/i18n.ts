import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ptBRTranslation from './locales/pt-BR/translation.json';

i18n
  // Detecta o idioma do navegador
  .use(LanguageDetector)
  // Passa o i18n para o react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      'pt-BR': {
        translation: ptBRTranslation
      }
    },
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // não é necessário para React
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
