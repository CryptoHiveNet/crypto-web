import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';
import { initReactI18next } from 'react-i18next/initReactI18next';

const initI18next = (lng, ns) => {
    const i18nInstance = createInstance();
    i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language, namespace) =>
                    import(
                        `../../infrastructures/locales/${language}/${namespace}.json`
                    ),
            ),
        )
        .init(getOptions(lng, ns));
    return i18nInstance;
};

export function useTranslation(lng, ns, options = {}) {
    const i18nextInstance = initI18next(lng, ns);
    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns,
            options.keyPrefix,
        ),
        i18n: i18nextInstance,
    };
}
