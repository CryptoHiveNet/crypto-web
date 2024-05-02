import { Toast as FlowbiteToast } from 'flowbite-react';
import { forwardRef } from 'react';

import { ToastProps } from '@/types/shared/types/components/toast';

// eslint-disable-next-line react/display-name
const Toast = forwardRef<any, ToastProps>(
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
    }: ToastProps,
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
