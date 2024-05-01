import { Toast } from 'flowbite-react';
import { forwardRef } from 'react';

import { ToastToggleProps } from '@/types/types/components/toast';

const ToastToggle = forwardRef<any, ToastToggleProps>(
  (
    {
      id,
      className,
      testId,
      onDismiss,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: ToastToggleProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <Toast.Toggle
        id={id}
        className={className}
        data-testid={testId}
        onDismiss={onDismiss}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default ToastToggle;
