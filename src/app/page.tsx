'use client';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/types/shared/components/LanguageSwitcher/LanguageSwitcher';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('home_page_title')}</h1>
            <LanguageSwitcher />
        </>
    );
}
