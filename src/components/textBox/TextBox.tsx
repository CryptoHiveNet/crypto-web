'use client';
import { TextInput } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTextBoxProps } from '@/types/types/components/textBox';

const TextBox = forwardRef<any, iTextBoxProps>(
  (
    {
      id,
      type,
      sizing,
      labelText,
      className,
      placeholder,
      shadow,
      required,
      disabled,
      value,
      icon,
      rightIcon,
      color,
      helperText,
      addon,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTextBoxProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <TextInput
        id={id}
        type={type}
        sizing={sizing}
        className={className}
        placeholder={placeholder}
        shadow={shadow}
        color={color}
        helperText={helperText}
        addon={addon}
        value={value}
        icon={icon}
        rightIcon={rightIcon}
        required={required}
        disabled={disabled}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default TextBox;
