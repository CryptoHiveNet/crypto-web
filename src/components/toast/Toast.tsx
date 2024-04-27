import { Toast as FlowbiteToast } from 'flowbite-react';
import { forwardRef } from 'react';

import { iToastProps } from '@/types/types/components/toast';

const Toast = forwardRef<any, iToastProps>(
  (
    {
      id,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iToastProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteToast
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteToast>
    );
  },
);

export default Toast;
