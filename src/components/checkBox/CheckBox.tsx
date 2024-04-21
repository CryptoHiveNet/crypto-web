'use client';
import { Checkbox as CHB } from 'flowbite-react';
import { forwardRef } from 'react';

import { iCheckBoxProps } from '@/types/types/components/checkBox';

const CheckBox = forwardRef<any, iCheckBoxProps>(
  (
    {
      id,
      defaultChecked,
      disabled,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iCheckBoxProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <CHB
        id={id}
        defaultChecked={defaultChecked}
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

export default CheckBox;
