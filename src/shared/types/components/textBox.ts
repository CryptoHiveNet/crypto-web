import { FC, ReactNode, SVGProps } from 'react';

export type TextBoxProps = {
    id?: string;
    type: string;
    sizing?: string;
    labelText: string;
    placeholder?: string;
    shadow?: boolean;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    icon?: string;
    rightIcon?: string;
    color?: string;
    helperText?: ReactNode | string;
    addon?: string;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
