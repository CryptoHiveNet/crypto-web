'use client';
import React, { FormEventHandler, useEffect } from 'react';

import { Label } from 'flowbite-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import Button from '@/types/components/Button/Button';
import CheckBox from '@/types/components/CheckBox/CheckBox';
import Datepicker from '@/types/components/Datepicker/Datepicker';
import SelectBox from '@/types/components/SelectBox/SelectBox';
import TextBox from '@/types/components/TextBox/TextBox';
import Toast from '@/types/components/Toast/Toast';
import ToastToggle from '@/types/components/Toast/ToastToggle/ToastToggle';
import { getFormValues } from '@/types/modules/shared/components/Forms/FormUtils';
import Icon from '@/types/modules/shared/components/Icon/Icon';
import { useToastContext } from '@/types/modules/shared/components/Toast/ToastContextProvider';
import {
    RegisterUserSchema
} from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';
import { NoticeMessage } from '@/types/shared/types/components/NoticeMessage';
import { TextInputType } from '@/types/shared/types/components/textBox';
import { ToastType } from '@/types/shared/types/components/toast';
import { RegisterUserRequest } from '@/types/shared/types/user/register';
import { GenderType } from '@/types/shared/types/user/userProfile';

import { useRegistration } from '../../hooks/useRegisterUser';

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

enum Fields {
    Username = 'loginUserName',
    Email = 'email',
    FirstName = 'firstName',
    LastName = 'lastName',
    Gender = 'gender',
    DateOfBirth = 'dateOfBirth',
    PhoneNumber = 'phoneNumber',
    PhoneNumberPrefix = 'phoneNumberPrefix',
    Password = 'password',
    RePassword = 'repassword',
    Agreement = 'agreement',
}

export type FieldValues = {
    [Fields.Username]: string;
    [Fields.Email]: string;
    [Fields.FirstName]: string;
    [Fields.LastName]: string;
    [Fields.Gender]: GenderType;
    [Fields.DateOfBirth]: Date;
    [Fields.PhoneNumber]: string;
    [Fields.PhoneNumberPrefix]: string;
    [Fields.Password]: string;
    [Fields.RePassword]: string;
    [Fields.Agreement]: boolean;
};

export default function RegistrationForm() {
    const { t } = useTranslation();
    const { submit, isPending, errorMessages, isSuccess } = useRegistration();
    const { createToast, deleteToast, deleteAllToasts } = useToastContext();

    const onHandleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const values = getFormValues(event) as Partial<FieldValues>;
        if (RegistrationForm.isValid(values)) {
            submit(values);
        } else {
            // Handle invalid form submission
            console.log(values);
            console.log('invalid form submission');
            createToast({
                message: t('form-invalid'),
                type: ToastType.Danger,
            });
        }
    };

    useEffect(() => {
        // ToDo show an error message
        if (!isSuccess) {
            let message: string = '';
            if (errorMessages.length > 0) {
                message = errorMessages.join('\n');
            }
            createToast({
                message: message,
                type: ToastType.Danger,
            });
        } else {
            deleteAllToasts();
        }
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
                        autoComplete="true"
                        name={Fields.Username}
                        required
                        type={TextInputType.text}
                        labelText={t('username')}
                        placeholder={t('username-place-holder')}
                        icon="HiOutlineUser"
                    />
                </div>
                <div>
                    <TextBox
                        autoComplete="true"
                        name={Fields.Email}
                        required
                        type={TextInputType.email}
                        labelText={t('email')}
                        placeholder={t('email-place-holder')}
                        icon="HiEnvelope"
                    />
                </div>
                <div className="w-full flex items-center justify-between">
                    <div>
                        <TextBox
                            autoComplete="true"
                            name={Fields.FirstName}
                            required
                            type={TextInputType.text}
                            labelText={t('first-name')}
                            placeholder={t('first-name-place-holder')}
                            icon="PiUserList"
                        />
                    </div>
                    <div>
                        <TextBox
                            autoComplete="true"
                            name={Fields.LastName}
                            required
                            type={TextInputType.text}
                            labelText={t('last-name')}
                            placeholder={t('last-name-place-holder')}
                            icon="PiUserList"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-1/3 mr-2">
                        <SelectBox
                            name={Fields.Gender}
                            required
                            labelText={t('gender')}
                            options={[
                                {
                                    value: GenderType.Male,
                                    label: GenderType.Male,
                                },
                                {
                                    value: GenderType.Female,
                                    label: GenderType.Female,
                                },
                            ]}
                        />
                    </div>
                    <div className="w-2/3">
                        <Datepicker
                            name={Fields.DateOfBirth}
                            labelText={t('date-of-birth')}
                            title={t('date-of-birth')}
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label value={t('phone-number')} />
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <TextBox
                            className="w-50 mr-2"
                            autoComplete="true"
                            name={Fields.PhoneNumberPrefix}
                            type={TextInputType.text}
                            placeholder={t('phone-number-prefix-place-holder')}
                            addon="+"
                        />
                        <TextBox
                            className="w-full"
                            autoComplete="true"
                            name={Fields.PhoneNumber}
                            required
                            type={TextInputType.text}
                            placeholder={t('phone-number-place-holder')}
                        />
                    </div>
                </div>
                <div>
                    <TextBox
                        autoComplete="true"
                        name={Fields.Password}
                        required
                        type={TextInputType.password}
                        labelText={t('password')}
                        placeholder={t('enter-password')}
                        icon="MdOutlinePassword"
                    />
                </div>
                <div>
                    <TextBox
                        autoComplete="true"
                        name={Fields.RePassword}
                        required
                        type={TextInputType.password}
                        labelText={t('repeat-password')}
                        placeholder={t('repeat-password-placeholder')}
                        icon="MdOutlinePassword"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <CheckBox name={Fields.Agreement} />
                    <Label
                        htmlFor="agree"
                        className="flex"
                    >
                        {t('i-agree-with-the')}&nbsp;
                        <Link
                            href="#"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            {t('terms-and-conditions')}
                        </Link>
                    </Label>
                </div>
                <Button
                    type="submit"
                    disabled={isPending}
                    isProcessing={isPending}
                >
                    {t('register-new-user')}
                </Button>
            </form>
        </div>
    );
}

RegistrationForm.isValid = (
    values: Partial<FieldValues>,
): values is FieldValues => {
    try {
        // Check if all values are valid according to the schema
        const checkValues = RegisterUserSchema.parse({
            loginUserName: values[Fields.Username],
            email: values[Fields.Email],
            firstName: values[Fields.FirstName],
            lastName: values[Fields.LastName],
            gender: values[Fields.Gender],
            dateOfBirth: new Date(values[Fields.DateOfBirth] as Date),
            phoneNumber: values[Fields.PhoneNumber],
            phoneNumberPrefix: values[Fields.PhoneNumberPrefix],
            password: values[Fields.Password],
        });
        console.log(checkValues);
        // Additional validation: check if passwords match
        if (values[Fields.Password] !== values[Fields.RePassword]) {
            console.log("passwords doesn't match");
            return false;
        }

        return true;
    } catch (error) {
        return false;
    }
};
