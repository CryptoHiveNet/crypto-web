import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, languages, cookieName } from './settings';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(
        resourcesToBackend(
            (language, namespace) =>
                import(
                    `../../infrastructures/locales/${language}/${namespace}.json`
                ),
        ),
    )
    .init({
        fallbackLng: 'en',
        debug: false,
        preload: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
