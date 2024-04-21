import { FC, SVGProps } from 'react';

export type iAlertProps = {
  id?: string;
  additionalContent?: JSX.Element;
  role?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children: JSX.Element | string;
  testId?: string;
  onClick?: () => void;
  onDismiss?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  dismissAfter?: number; // Optional time in milliseconds to automatically dismiss the alert
};

export type iButtonProps = {
  id?: string;
  color?: string;
  gradientMonochrome?: string;
  gradientDuoTone?: string;
  outline?: boolean;
  size?: string;
  label?: string;
  isProcessing?: boolean;
  processingSpinner?: JSX.Element;
  pill?: boolean;
  disabled?: boolean;
  className?: string;
  children: JSX.Element | string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type iButtonGroupProps = {
  id?: string;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export enum TextInputType {
  text = 'text',
  passwords = 'passwords',
  number = 'number',
  email = 'email',
}
export type iTextBoxProps = {
  type: TextInputType;
  labelText: string;
  id?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  icon?: FC<SVGProps<SVGSVGElement>> | undefined;
  color?: string;
  helperText?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
