import { ReactNode } from 'react';

export type CheckBoxProps = {
    id?: string;
    labelText?: ReactNode;
    errorMessage?: string;
    name?: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
