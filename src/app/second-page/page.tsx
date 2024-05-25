import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default async function Page() {
    const { t, i18n } = useTranslation();
    const lng = i18n.resolvedLanguage;
    return (
        <>
            <h1>{t('title')}</h1>
            <Link href={`/${lng}`}>{t('back-to-home')}</Link>
        </>
    );
}
