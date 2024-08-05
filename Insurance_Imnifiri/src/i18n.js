import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './Locales/en.json';
import translationFR from './Locales/fr.json';
import translationAR from './Locales/ar.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  document.body.dir = i18n.dir(lng);
  localStorage.setItem('language', lng);
});

// Check localStorage for the saved language
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
  document.body.dir = i18n.dir(savedLanguage);
}

export default i18n;
