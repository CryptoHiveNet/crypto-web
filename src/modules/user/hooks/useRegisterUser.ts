'use client';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { RegisterUserRequest } from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';
import { useMutationWithError } from '@/types/shared/hooks/useMutationWithError';
import { NoticeMessage } from '@/types/shared/types/components/NoticeMessage';
import { ToastType } from '@/types/shared/types/components/toast';
import { Address } from '@/types/shared/types/user/Address';

import { useToastContext } from '../../shared/components/ToastContextProvider/ToastContextProvider';
import { addUser } from '../../shared/services/user/register/addUser';

export type OnInvalidAddressErrorProps = {
    registerUserRequest: RegisterUserRequest;
    suggestedAddress?: Address;
};

export const useRegistration = () => {
    const { t } = useTranslation();
    const [errorMessages, setErrorMessages] = useState([] as NoticeMessage[]);
    const [invalidAddressError, setInvalidAddressError] = useState<
        OnInvalidAddressErrorProps | undefined
    >();
    const { createToast, deleteToast, deleteAllToasts } = useToastContext();
    const {
        mutate: registerMutation,
        isPending,
        isSuccess,
    } = useMutationWithError(addUser, {
        onSuccess: async () => {
            // ToDo: This should handle the success part after the user registration.
            // Force login and redirect to the user cPanel should be done here.
            setErrorMessages([]);
            createToast({
                message: t('user-has-been-registered-successfully'),
                type: ToastType.Success,
            });
        },
        onError: async (error: unknown) => {
            // ToDo: Update the errorMessages state regarding the error.
            setErrorMessages([...errorMessages, error as NoticeMessage]);
        },
    });

    const submit = (request: RegisterUserRequest) => {
        setErrorMessages([]);

        registerMutation(request);
    };

    return {
        submit,
        errorMessages,
        isPending,
        isSuccess,
    };
};
