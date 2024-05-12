import { useQueryClient } from '@tanstack/react-query';
import React, { useContext, useState, createContext } from 'react';

import { QueryKey } from '../../types/QueryKey';
import { ToastProps, ToastType } from '@/types/shared/types/components/toast';
import { useTranslation } from 'react-i18next';

export type ToastContextProps = {
    toastList: Array<ToastProps>;
    createToast: (toastData: ToastData) => number;
    deleteToast: (id: number) => void;
};

export type ToastContextInitialProps = {
    children: React.ReactNode;
};

export type ToastData = {
    type: ToastType;
    message: string;
    hasCheckmarkIcon?: boolean;
    cta?: () => void;
    ctaLabel?: string;
};

type QueryKeyLiteralType = `query_error.${(typeof QueryKey)[keyof typeof QueryKey]}`;

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastContextProvider = ({ children }: ToastContextInitialProps) => {
    const { t } = useTranslation();

    const [toastList, setToastList] = useState<ToastProps[]>([]);
    const [toastId, setToastId] = useState<number>(1);
    const queryClient = useQueryClient();

    queryClient.getQueryCache().config.onError = (error, query) => {
        const queryKey = Array.isArray(query.queryKey) ? query.queryKey[0] : query.queryKey;

        if (queryKey === QueryKey.UserInfo) return;

        const toastTranslation: QueryKeyLiteralType = `query_error.${queryKey as QueryKey}`;

        createToast({
            message: t(toastTranslation as unknown as TemplateStringsArray),
            type: ToastType.Danger
        });
    };

    const createToast = (toastData: ToastData) => {
        const nextToastId = toastId;

        setToastList([...toastList, {
            id: nextToastId.toString(), ...toastData,
            children: toastData.message
        }]);
        setToastId(nextToastId + 1);

        return nextToastId;
    };

    const deleteToast = (id: number) => {
        setToastList((prevState) => prevState.filter((toast) => id.toString() !== toast.id));
    };

    return <ToastContext.Provider value={{ toastList, deleteToast, createToast }}>{children}</ToastContext.Provider>;
};

const useToastContext = (): ToastContextProps => useContext(ToastContext);

export { useToastContext, ToastContextProvider };
