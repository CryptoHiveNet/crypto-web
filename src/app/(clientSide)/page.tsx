import Link from 'next/link';

import { LanguageSwitcher } from '@/types/components/LanguageSwitcher/LanguageSwitcher';
import { getServerTranslations } from '@/types/utils/i18n/server';

export default async function Page() {
    const { t, i18n } = await getServerTranslations();
    const lng = i18n.resolvedLanguage;
    return (
        <>
            <h1>
                {t('name')}
                {t('title')}
            </h1>
            <Link href={`/second-page`}>{t('hello')}</Link>
            <LanguageSwitcher />
        </>
    );
}
