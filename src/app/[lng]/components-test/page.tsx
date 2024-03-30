import Alert from '@/types/components/alert/Alert';
import Button from '@/types/components/button/Button';
import ButtonGroup from '@/types/components/buttonGroup/ButtonGroup';

export default async function Page({ params: { lng } }: any) {
  return (
    <div className='p-10'>
      <Alert id='test-Alert'>test Alert</Alert>
      <Button id='test-Button'>test Button</Button>
      <ButtonGroup>
        <Button id='test-Button2'>test Button2</Button>
        <Button id='test-Button3' color='blue'>
          test Button
        </Button>
      </ButtonGroup>
    </div>
  );
}
