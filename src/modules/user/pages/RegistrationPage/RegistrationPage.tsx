<<<<<<< HEAD
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <main className='mx-auto w-[29.375rem] max-w-full px-4 py-12 font-base'>
      <h1 className='mb-8 font-[inherit] text-md text-grey-1'>Register</h1>

      <RegistrationForm
        submit={submit}
        isLoading={isLoading}
        errorMessages={errorMessages}
      />
    </main>
=======
import { Button, Checkbox, Label } from 'flowbite-react';
import { t } from 'i18next';
import Link from 'next/link';

import TextBox from '@/types/components/textBox/TextBox';
import { TextInputType } from '@/types/shared/types/components/textBox';

const RegistrationPage = () => {
  return (
    <div>
      <form className='flex max-w-md flex-col gap-4'>
        <div>
          <TextBox
            required
            type={TextInputType.text}
            labelText={t('email-place-holder')}
            placeholder={t('your-email')}
          />
        </div>
        <div>
          <TextBox
            required
            type={TextInputType.passwords}
            labelText={t('your-password')}
            placeholder={t('enter-your-password')}
          />
        </div>
        <div>
          <TextBox
            required
            type={TextInputType.passwords}
            labelText={t('repeat-your-password')}
            placeholder={t('repeat-your-password')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='agree' />
          <Label
            htmlFor='agree'
            className='flex'
          >
            I agree with the&nbsp;
            <Link
              href='#'
              className='text-cyan-600 hover:underline dark:text-cyan-500'
            >
              {t('terms-and-conditions')}
            </Link>
          </Label>
        </div>
        <Button type='submit'>{t('register-new-user')}</Button>
      </form>
    </div>
>>>>>>> a00e15b (feat: change types folder location)
  );
};

export default RegistrationPage;
