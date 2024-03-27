import Link from 'next/link';
import { useTranslation } from '../../utils/i18n';
import { LanguageSwitcher } from '@/types/components/i18n/LanguageSwitcher';
import Alert from '@/types/components/alert/Alert';
import Button from '@/types/components/button/Button';

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Button id='test-button'>test button</Button>

      <h1>
        {t('name')}
        {t('title')}
      </h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
      <LanguageSwitcher />
    </>
  );
}
