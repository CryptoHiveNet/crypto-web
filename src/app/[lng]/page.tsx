import Link from 'next/link';

import { LanguageSwitcher } from '@/types/components/i18n/LanguageSwitcher';

import { useTranslation } from '../../utils/i18n';

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation();
  return (
    <>
      <h1>
        {t('name')}
        {t('title')}
      </h1>
      <Link href={`/${lng}/second-page`}>{t('hello')}</Link>
      <LanguageSwitcher />
    </>
  );
}
