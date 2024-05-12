import React from 'react';

import TextBox from '@/types/components/textBox/TextBox';
import { useTranslation } from '@/types/utils/i18n';
import { Label } from 'flowbite-react';
import Link from 'next/link';
import Button from '@/types/components/Button/Button';
import { TextInputType } from '@/types/types/components/textBox';
import CheckBox from '@/types/components/checkBox/CheckBox';
import { NoticeMessage } from '@/types/shared/types/components/NoticeMessage';
import { RegisterUserRequest } from '@/types/shared/types/user/register';
export type RegistrationFormProps = {
  submit: (request: RegisterUserRequest) => void;
  isPending: boolean;
  errorMessages: NoticeMessage[];
}

enum Fields {
Username = 'username',
Password = 'password',
RePassword = 'repassword',
Agreement = 'agreement',
}

export type FieldValues = {
  [Key in Fields]: string;
};
export default async function  RegistrationForm({ submit, isPending, errorMessages } : RegistrationFormProps) {
  const { t } = await useTranslation();
  return (
    <div>
       <form className='flex max-w-md flex-col gap-4' data-testid="registrationForm">
        <div>
          <TextBox
           name={Fields.Username}
            required
            type={TextInputType.text}
            labelText={t('email-place-holder')}
            placeholder={t('your-email')}
            icon="HiMail"
          />
        </div>
        <div>
          <TextBox
          name={Fields.Password}
            required
            type={TextInputType.passwords}
            labelText={t('your-password')}
            placeholder={t('enter-your-password')}
          />
        </div>
        <div>
          <TextBox
          name={Fields.RePassword}
            required
            type={TextInputType.passwords}
            labelText={t('repeat-your-password')}
            placeholder={t('repeat-your-password')}
          />
        </div>
        <div className='flex items-center gap-2'>
          <CheckBox name={Fields.Agreement} />
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
        <Button disabled={true}>{t('register-new-user')}</Button>
      </form>
    </div>
  )
}

RegistrationForm.isValid = (values: Partial<FieldValues>): values is FieldValues => {
  return [RegistrationForm].every((partialForm) =>
      partialForm.isValid(values)
  );
};
