import { Toast } from 'flowbite-react';
import { forwardRef } from 'react';

import { iToastToggleProps } from '@/types/types/components/toast';

const ToastToggle = forwardRef<any, iToastToggleProps>(
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
    }: iToastToggleProps,
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
