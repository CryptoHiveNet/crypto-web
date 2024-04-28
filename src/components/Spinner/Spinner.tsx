import { Spinner as FlowbiteSpinner } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSpinnerProps } from '@/types/types/components/spinner';

const Spinner = forwardRef<any, iSpinnerProps>(
  (
    {
      id,
      ariaLabel,
      color,
      size,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iSpinnerProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSpinner
        id={id}
        aria-label={ariaLabel}
        color={color}
        size={size}
        className={className}
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

export default Spinner;
