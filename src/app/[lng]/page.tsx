import { Button as BT } from 'flowbite-react';
import Link from 'next/link';

import Button from '@/types/components/button/Button';
import ButtonGroup from '@/types/components/buttonGroup/ButtonGroup';
import { LanguageSwitcher } from '@/types/components/i18n/LanguageSwitcher';

import { useTranslation } from '../../utils/i18n';

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation();
  return (
    <>
      <div>
        <ButtonGroup>
          <BT id='test-Button'>test Button</BT>
          <BT id='test-Button2'>test Button2</BT>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button
            id='test-Button3'
            color='blue'
          >
            test Button
          </Button>
          <Button id='test-Button4'>test Button2</Button>
        </ButtonGroup>
      </div>

      <h1>
        {t('name')}
        {t('title')}
      </h1>
      <Link href={`/${lng}/second-page`}>{t('hello')}</Link>
      <LanguageSwitcher />
    </>
  );
}
