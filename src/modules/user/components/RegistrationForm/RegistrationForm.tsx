'use client';
import React, { FormEventHandler, useEffect, useState } from 'react';

import { Label } from 'flowbite-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';
import CheckBox from '@/types/components/CheckBox/CheckBox';
import Datepicker from '@/types/components/Datepicker/Datepicker';
import SelectBox from '@/types/components/SelectBox/SelectBox';
import TextBox from '@/types/components/TextBox/TextBox';
import { getFormValues } from '@/types/modules/shared/components/Forms/FormUtils';
import { useToastContext } from '@/types/modules/shared/components/ToastContextProvider/ToastContextProvider';
import { RegisterUserSchema } from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';
import { TextInputType } from '@/types/shared/types/components/textBox';
import { ToastType } from '@/types/shared/types/components/toast';
import { GenderType } from '@/types/shared/types/user/userProfile';

import { useRegistration } from '../../hooks/useRegisterUser';

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
    const [validationErrors, setValidationErrors] = useState<{
        [key: string]: string;
    }>({});

    const onHandleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setValidationErrors({});
        const values = getFormValues(event) as Partial<FieldValues>;
        const formValidationResult = RegistrationForm.isValid(
            values,
            setValidationErrors,
        );
        if (formValidationResult) {
            submit(values);
            setValidationErrors({});
        } else {
            createToast({
                message: 'validationErrors',
                type: ToastType.Danger,
            });
        }
    };

    useEffect(() => {
        // Show an error message
        if (!isSuccess) {
            let message: string = '';
            if (errorMessages.length > 0) {
                message = errorMessages.join('\n');
                createToast({
                    message: message,
                    type: ToastType.Danger,
                });
            }
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
                        errorMessage={validationErrors[Fields.Username]}
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
                        errorMessage={validationErrors[Fields.Email]}
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
                            errorMessage={validationErrors[Fields.FirstName]}
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
                            errorMessage={validationErrors[Fields.LastName]}
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
                            errorMessage={validationErrors[Fields.Gender]}
                        />
                    </div>
                    <div className="w-2/3">
                        <Datepicker
                            name={Fields.DateOfBirth}
                            labelText={t('date-of-birth')}
                            title={t('date-of-birth')}
                            errorMessage={validationErrors[Fields.DateOfBirth]}
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
                            errorMessage={
                                validationErrors[Fields.PhoneNumberPrefix]
                            }
                        />
                        <TextBox
                            className="w-full"
                            autoComplete="true"
                            name={Fields.PhoneNumber}
                            required
                            type={TextInputType.text}
                            placeholder={t('phone-number-place-holder')}
                            errorMessage={validationErrors[Fields.PhoneNumber]}
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
                        errorMessage={validationErrors[Fields.Password]}
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
                        errorMessage={validationErrors[Fields.RePassword]}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <CheckBox
                        name={Fields.Agreement}
                        labelText={
                            <>
                                {t('i-agree-with-the')}&nbsp;
                                <Link
                                    href="#"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    {t('terms-and-conditions')}
                                </Link>
                            </>
                        }
                        errorMessage={validationErrors[Fields.Agreement]}
                    />
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
    setValidationErrors: React.Dispatch<
        React.SetStateAction<{ [key: string]: string }>
    >,
): values is FieldValues => {
    try {
        RegisterUserSchema.parse({
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

        // Check if passwords match
        if (values[Fields.Password] !== values[Fields.RePassword]) {
            setValidationErrors((prev) => ({
                ...prev,
                [Fields.RePassword]: 'Passwords do not match',
            }));
            return false;
        }

        setValidationErrors({});
        return true;
    } catch (error) {
        if (error.errors) {
            const errors = error.errors.reduce(
                (acc: { [key: string]: string }, curr: any) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                },
                {},
            );
            setValidationErrors(errors);
        } else {
            setValidationErrors({});
        }
        return false;
    }
};
