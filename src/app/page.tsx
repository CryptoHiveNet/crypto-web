'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/types/components/LanguageSwitcher/LanguageSwitcher';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <h1>
                {t('home_page_title')}
            </h1>
            <Link href={`/second-page`}>{t('hello')}</Link>
            <LanguageSwitcher />
            <div>Testing</div>
        </>
    );
}
