import React from 'react';

import TextBox from '@/types/components/textBox/TextBox';
import { TextInputType } from '@/types/types/components/textBox';
import { useTranslation } from '@/types/utils/i18n';
import CheckBox from '@/types/components/CheckBox/CheckBox';
import { Label } from 'flowbite-react';
import Link from 'next/link';
import Button from '@/types/components/Button/Button';

export async function  RegistrationForm() {
  const { t } = await useTranslation();
  return (
    <div>
       <form className='flex max-w-md flex-col gap-4' data-testid="registrationForm">
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
          <CheckBox />
          <Label htmlFor='agree' className='flex'>
            I agree with the&nbsp;
            <Link
              href='#'
              className='text-cyan-600 hover:underline dark:text-cyan-500'
            >
              {t('terms-and-conditions')}
            </Link>
          </Label>
        </div>
        <Button>{t('register-new-user')}</Button>
      </form>
    </div>
  )
}
