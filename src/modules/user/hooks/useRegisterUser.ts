'use client';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
    RegisterUserRequest
} from '@/types/packages/api/contexts/user/application/types/RegisterUserRequest';
import { UnhandledBusinessException } from '@/types/shared/Errors/UnhandledBusinessException';
import { useMutationWithError } from '@/types/shared/hooks/useMutationWithError';
import { axiosClient } from '@/types/shared/infrastructures/http/AxiosClient';
import { HttpError } from '@/types/shared/infrastructures/http/HttpError';
import HttpStatus from '@/types/shared/infrastructures/http/HttpStatus';
import { NoticeMessage, Severity } from '@/types/shared/types/components/NoticeMessage';
import { Address } from '@/types/shared/types/user/Address';
import { useMutation } from '@tanstack/react-query';

import { REGISTER } from '../../shared/constants/apiRoutes';
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

    const {
        mutate: registerMutation,
        isPending,
        isSuccess,
    } = useMutationWithError(addUser, {
        onSuccess: async () => {
            // ToDo: This should handle the success part after the user registration.
            // Force login and redirect to the user cPanel should be done here.
            console.log('success');
        },
        onError: async (error: unknown) => {
            // ToDo: Update the errorMessages state regarding the error.
            console.log(error);
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
