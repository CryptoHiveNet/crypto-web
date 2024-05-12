'use client';
import i18next from 'i18next';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { languages } from '@/types/utils/i18n/settings';

export const LanguageSwitcher = ({ lng }: any) => {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (e, lang) => {
        e.preventDefault();
        i18next.changeLanguage(lang);
        router.refresh();
    };
    return (
        <>
            <div>
                {languages.map((lang, index) => {
                    if (lang === lng) {
                        return null;
                    }
                    return (
                        <span key={lang}>
                            <button
                                onClick={(e) => handleChangeLanguage(e, lang)}
                                type="button"
                            >
                                {lang}
                            </button>
                        </span>
                    );
                })}
            </div>
        </>
    );
};
