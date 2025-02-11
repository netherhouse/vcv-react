import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        common: require('./locales/ru/common.json'),
        home: require('./locales/ru/home.json'),
        history: require('./locales/ru/history.json'),
      },
      ua: {
        common: {},
        home: {},
        history: {},
      },
      de: {
        common: {},
        home: {},
        history: {},
      },
    },
    lng: 'ru', // default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;