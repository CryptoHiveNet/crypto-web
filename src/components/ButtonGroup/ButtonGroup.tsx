import { Button as FlowbiteButton } from 'flowbite-react';
import React, { forwardRef } from 'react';

<<<<<<< HEAD:src/components/buttonGroup/ButtonGroup.tsx
import { iButtonGroupProps } from '@/types/shared/types/components/buttonGroup';
=======
import { ButtonGroupProps } from '@/types/types/components/buttonGroup';
>>>>>>> 1ff0979 (feat: refactor button group, card, and carousel components):src/components/ButtonGroup/ButtonGroup.tsx

const ButtonGroup = forwardRef<any, ButtonGroupProps>(
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
    }: ButtonGroupProps,
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
