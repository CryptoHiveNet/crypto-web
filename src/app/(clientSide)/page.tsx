'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/types/components/LanguageSwitcher/LanguageSwitcher';
import { getServerTranslations } from '@/types/utils/i18n/server';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <h1>
                {t('name')}
                {t('title')}
            </h1>
            <Link href={`/second-page`}>{t('hello')}</Link>
            <LanguageSwitcher />
            <div>Testing</div>
        </>
    );
}
