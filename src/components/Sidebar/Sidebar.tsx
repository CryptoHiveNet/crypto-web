import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { forwardRef } from 'react';

import { SidebarProps } from '@/types/types/components/sidebar';

const Sidebar = forwardRef<any, SidebarProps>(
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
    }: SidebarProps,
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
