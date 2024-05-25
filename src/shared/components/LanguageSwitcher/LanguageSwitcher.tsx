'use client';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';
import { languages } from '@/types/utils/i18n/settings';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
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
                        <Button onClick={() => changeLanguage(language)}>
                            {language}
                        </Button>
                    </span>
                );
            })}
        </div>
    );
};
