import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarProps } from '@/types/types/components/sidebar';

const Sidebar = forwardRef<any, iSidebarProps>(
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
    }: iSidebarProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebar
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
      </FlowbiteSidebar>
    );
  },
);

export default Sidebar;
