import { Spinner as FlowbiteSpinner } from 'flowbite-react';
import { forwardRef } from 'react';

import { SpinnerProps } from '@/types/shared/types/components/spinner';

// eslint-disable-next-line react/display-name
const Spinner = forwardRef<any, SpinnerProps>(
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
    }: SpinnerProps,
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
