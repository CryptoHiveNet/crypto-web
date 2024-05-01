import { FC, ReactNode, SVGProps } from 'react';

export enum TextInputType {
  text = 'text',
  passwords = 'passwords',
  number = 'number',
  email = 'email',
}
export type TextBoxProps = {
  id?: string;
  type: TextInputType;
  sizing?: string;
  labelText: string;
  className?: string;
  placeholder?: string;
  shadow?: boolean;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  rightIcon?: FC<SVGProps<SVGSVGElement>>;
  color?: string;
  helperText?: ReactNode | string;
  addon?: string;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
