'use client';
import React, { FC, SVGProps } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { TextInputType } from '@/types/types/components/textbox';

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

const TextBox = ({
  type,
  labelText,
  id,
  className,
  placeholder,
  required,
  value,
  icon,
  color,
  helperText,
  testId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: iTextBoxProps) => {
  return (
    <div>
      <div className='mb-2 block'>
        <Label htmlFor={id} value={labelText} />
      </div>
      <TextInput
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        shadow
        color={color}
        helperText={helperText}
        value={value}
        icon={icon}
        required={required}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      />
    </div>
  );
};

export default TextBox;
