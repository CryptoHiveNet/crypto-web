'use client';
import { Checkbox as CHB } from 'flowbite-react';
import { forwardRef } from 'react';

import { iCheckBoxProps } from '@/types/shared/types/components/checkBox';

// eslint-disable-next-line react/display-name
const CheckBox = forwardRef<any, iCheckBoxProps>(
  (
    {
      id,
      className,
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
        className={className}
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