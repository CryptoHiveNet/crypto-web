import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';
import { forwardRef } from 'react';

import { iBreadcrumbProps } from '@/types/types/components/breadcrumb';

const Breadcrumb = forwardRef<any, iBreadcrumbProps>(
  (
    {
      id,
      ariaLabel,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iBreadcrumbProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteBreadcrumb
        id={id}
        aria-label={ariaLabel}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteBreadcrumb>
    );
  },
);

export default Breadcrumb;
