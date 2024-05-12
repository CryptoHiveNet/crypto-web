import Link from 'next/link';

import { LanguageSwitcher } from '@/types/components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '@/types/utils/i18n';

export default async function Page({ params: { lng } }: any) {
    const { t } = await useTranslation();
    return (
        <>
            <h1>
                {t('name')}
                {t('title')}
            </h1>
            <Link href={`/${lng}/second-page`}>second page</Link>
            <LanguageSwitcher lng={lng} />
        </>
    );
}
