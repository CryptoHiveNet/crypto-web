'use client';
import React, { createContext, useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';

import Toast from '@/types/components/Toast/Toast';
import { ToastProps, ToastType } from '@/types/shared/types/components/toast';
import { useQueryClient } from '@tanstack/react-query';

import { QueryKey } from '../../types/QueryKey';
import NotificationToast from '../NotificationToast/NotificationToast';

export type ToastContextProps = {
    toastList: Array<ToastProps>;
    createToast: (toastData: ToastData) => number;
    deleteToast: (id: number) => void;
    deleteAllToasts: () => void;
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

type QueryKeyLiteralType =
    `query_error.${(typeof QueryKey)[keyof typeof QueryKey]}`;

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastContextProvider = ({ children }: ToastContextInitialProps) => {
    const { t } = useTranslation();

    const [toastList, setToastList] = useState<ToastProps[]>([]);
    const [toastId, setToastId] = useState<number>(1);
    const queryClient = useQueryClient();

    queryClient.getQueryCache().config.onError = (error, query) => {
        const queryKey = Array.isArray(query.queryKey)
            ? query.queryKey[0]
            : query.queryKey;

        if (queryKey === QueryKey.UserInfo) return;

        const toastTranslation: QueryKeyLiteralType = `query_error.${queryKey as QueryKey}`;

        createToast({
            message: t(toastTranslation as unknown as TemplateStringsArray),
            type: ToastType.Danger,
        });
    };

    const createToast = (toastData: ToastData) => {
        const nextToastId = toastId;

        setToastList([
            ...toastList,
            {
                id: nextToastId.toString(),
                ...toastData,
                children: toastData.message,
            },
        ]);
        setToastId(nextToastId + 1);

        return nextToastId;
    };

    const deleteToast = (id: number) => {
        setToastList((prevState) =>
            prevState.filter((toast) => id.toString() !== toast.id),
        );
    };
    const deleteAllToasts = () => {
        setToastList([]);
    };
    return (
        <ToastContext.Provider
            value={{ toastList, deleteToast, deleteAllToasts, createToast }}
        >
            {children}
            {toastList.length > 0 && (
                <div className="flex flex-col gap-4 fixed bottom-5 left-5 w-fit">
                    {toastList.map((item, index) => (
                        <NotificationToast
                            type={item.type}
                            key={item.id}
                            message={item.message}
                        />
                    ))}
                </div>
            )}
        </ToastContext.Provider>
    );
};

const useToastContext = (): ToastContextProps => useContext(ToastContext);

export { useToastContext, ToastContextProvider };
