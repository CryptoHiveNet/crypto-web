import Link from 'next/link';

import { LanguageSwitcher } from '@/types/components/LanguageSwitcher/LanguageSwitcher';
import { getServerTranslations } from '@/types/utils/i18n/server';

export default async function Page() {
    const { t, i18n } = await getServerTranslations();
    const lng = i18n.resolvedLanguage;
    console.log('page lng:', lng);
    return (
        <>
            <h1>
                {t('name')}
                {t('title')}
            </h1>
            <Link href={`/${lng}/second-page`}>{t('hello')}</Link>
            <LanguageSwitcher lng={lng} />
        </>
    );
}
