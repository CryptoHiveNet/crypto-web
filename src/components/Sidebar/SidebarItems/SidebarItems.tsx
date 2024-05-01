import { SidebarItems as FlowbiteSidebarItems } from 'flowbite-react';
import { forwardRef } from 'react';

import { SidebarItemsProps } from '@/types/types/components/sidebar';

const SidebarItems = forwardRef<any, SidebarItemsProps>(
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
    }: SidebarItemsProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarItems
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
      </FlowbiteSidebarItems>
    );
  },
);

export default SidebarItems;
