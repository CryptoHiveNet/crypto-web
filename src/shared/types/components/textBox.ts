import { FC, ReactNode, SVGProps } from 'react';

export enum TextInputType {
    text = 'text',
    password = 'password',
    number = 'number',
    email = 'email',
}
export type TextBoxProps = {
    id?: string;
    name: string;
    type: TextInputType;
    sizing?: string;
    labelText?: string;
    className?: string;
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
    autoComplete?: 'true' | 'false';
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
