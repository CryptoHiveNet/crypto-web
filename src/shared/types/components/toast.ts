import { ReactNode } from 'react';

export type ToastProps = {
    id?: string;
    className?: string;
    children: ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export type ToastToggleProps = {
    id?: string;
    className?: string;
    testId?: string;
    onDismiss?: () => void;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export enum ToastType {
    Success = 'critical',
    Warning = 'warning',
    Danger = 'danger',
}
