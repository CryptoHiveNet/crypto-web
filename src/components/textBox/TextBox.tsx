'use client';
import { Label, TextInput } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTextBoxProps } from '@/types/types/components/components';

const TextBox = forwardRef<any, iTextBoxProps>(
  (
    {
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
    }: iTextBoxProps,
    ref: React.Ref<any> | null,
  ) => {
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
          ref={ref}
          {...rest}
        />
      </div>
    );
  },
);

export default TextBox;
