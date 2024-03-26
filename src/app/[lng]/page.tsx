import Link from 'next/link';
import { useTranslation } from '../../utils/i18n';
import { LanguageSwitcher } from '@/types/components/i18n/LanguageSwitcher';
import AlertBox from '@/types/components/alert/Alert';

export default async function Page({ params: { lng } }: any) {
   const { t } = await useTranslation(lng);
   return (
      <>
         <AlertBox
            id='dfsdf'
            additionalContent={<div>This is additional info.</div>}
            color='warning'
         >
            <div>
               <span>This is the main alert message.</span>
            </div>
         </AlertBox>

         <h1>
            {t('name')}
            {t('title')}
         </h1>
         <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link>
         <LanguageSwitcher />
      </>
   );
}
