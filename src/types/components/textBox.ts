import { FC, SVGProps } from 'react';

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
