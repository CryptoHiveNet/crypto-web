import { Button as FlowbiteButton } from 'flowbite-react';
import React, { forwardRef } from 'react';

import { iButtonGroupProps } from '@/types/types/components/components';

const ButtonGroup = forwardRef<any, iButtonGroupProps>(
  (
    {
      id,
      outline,
      children,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iButtonGroupProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteButton.Group
        id={id}
        outline={outline}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteButton.Group>
    );
  },
);

export default ButtonGroup;
