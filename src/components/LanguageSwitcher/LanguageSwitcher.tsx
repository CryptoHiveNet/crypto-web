'use client';
import i18next from 'i18next';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { languages } from '@/types/utils/i18n/settings';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const currentLanguage = i18n.resolvedLanguage;

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        router.refresh();
    };

    return (
        <div>
            {languages.map((language, index) => {
                if (language === currentLanguage) {
                    return null;
                }
                return (
                    <span key={index}>
                        <button
                            onClick={() => changeLanguage(language)}
                            type="button"
                        >
                            {language}
                        </button>
                    </span>
                );
            })}
        </div>
    );
};
