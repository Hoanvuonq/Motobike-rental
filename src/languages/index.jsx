import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './vi';
import en from './en';

const resources = {
    en: en,
    vi: vi
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;
