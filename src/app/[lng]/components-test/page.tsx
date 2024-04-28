import Alert from '@/types/components/Alert/Alert';
import Button from '@/types/components/button/Button';
import ButtonGroup from '@/types/components/buttonGroup/ButtonGroup';
import TextBox from '@/types/components/TextBox/TextBox';
import { TextInputType } from '@/types/types/components/textBox';
import { useTranslation } from '@/types/utils/i18n';

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  return (
    <div className='p-10'>
      <Alert
        id='test-Alert'
        testId='2323'
      >
        {t('test')}
      </Alert>
      <Button id='test-Button'>{t('test')}</Button>
      <ButtonGroup>
        <Button id='test-Button2'>{t('test')}</Button>
        <Button
          id='test-Button3'
          color='blue'
        >
          {t('test')}
        </Button>
      </ButtonGroup>
      <TextBox
        required
        type={TextInputType.text}
        labelText={t('test')}
        placeholder={t('test')}
      />
    </div>
  );
}
