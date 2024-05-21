'use client';
import React, { FormEventHandler, useEffect } from 'react';

import { Label } from 'flowbite-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';
import CheckBox from '@/types/components/checkBox/CheckBox';
import TextBox from '@/types/components/TextBox/TextBox';
import { getFormValues } from '@/types/modules/shared/components/Forms/FormUtils';
import { NoticeMessage } from '@/types/shared/types/components/NoticeMessage';
import { TextInputType } from '@/types/shared/types/components/textBox';
import { RegisterUserRequest } from '@/types/shared/types/user/register';

import { useRegistration } from '../../hooks/useRegisterUser';

enum Fields {
    Username = 'username',
    Password = 'password',
    RePassword = 'repassword',
    Agreement = 'agreement',
}

/**
 * ToDo List:
 * Show loading when isPending is true.
 * Show warning/Success message when you have a result from the hook as we discussed today.
 * Add all of the necessary fields and also their validation to the RegistrationForm.isValid
 * Disable the registration button and also form submission when isPending is true
 * After a successful registration we need to hide the from and show a success message box to ask the user for going to the login page
 * After making the login form we need to do a login for that user automatically
 * We need to add CSRF token to the registration form
 * We need to add all texts into the language files(All languages)
 *
 */

export type FieldValues = {
    [Key in Fields]: string;
};
export default function RegistrationForm() {
    const { t } = useTranslation();
    const { submit, isPending, errorMessages, isSuccess } = useRegistration();

    const onHandleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        const values = getFormValues(event) as Partial<FieldValues>;

        if (RegistrationForm.isValid(values)) {
            submit(values);
        }
    };

    useEffect(() => {
        // ToDo show an error message
    }, [isSuccess]);

    return (
        <div>
            <form
                onSubmit={onHandleFormSubmit}
                className="flex max-w-md flex-col gap-4"
                data-testid="registrationForm"
            >
                <div>
                    <TextBox
                        name={Fields.Username}
                        required
                        type={TextInputType.text}
                        labelText={t('email-place-holder')}
                        placeholder={t('your-email')}
                        icon="HiMail" // ToDo: Change icon type to be string not a real icon here. Do the same thing for the rest component in a separate ticket.
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
                <div className="flex items-center gap-2">
                    <CheckBox name={Fields.Agreement} />
                    <Label
                        htmlFor="agree"
                        className="flex"
                    >
                        I agree with the&nbsp;
                        <Link
                            href="#"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            {t('terms-and-conditions')}
                        </Link>
                    </Label>
                </div>
                <Button disabled={true}>{t('register-new-user')}</Button>
            </form>
        </div>
    );
}

RegistrationForm.isValid = (
    values: Partial<FieldValues>,
): values is FieldValues => {
    return [RegistrationForm].every((partialForm) =>
        partialForm.isValid(values),
    );
};
