import Alert from '@/types/components/alert/Alert';
import Button from '@/types/components/button/Button';
import ButtonGroup from '@/types/components/buttonGroup/ButtonGroup';
import TextBox from '@/types/components/textBox/TextBox';
import { TextInputType } from '@/types/types/components/textbox';
import { t } from 'i18next';

export default async function Page({ params: { lng } }: any) {
  return (
    <div className='p-10'>
      <Alert id='test-Alert' testId='2323'>
        test Alert
      </Alert>
      <Button id='test-Button'>test Button</Button>
      <ButtonGroup>
        <Button id='test-Button2'>test Button2</Button>
        <Button id='test-Button3' color='blue'>
          test Button
        </Button>
      </ButtonGroup>
      <TextBox
        required
        type={TextInputType.text}
        labelText={t('email-place-holder')}
        placeholder={t('your-email')}
      />
    </div>
  );
}
