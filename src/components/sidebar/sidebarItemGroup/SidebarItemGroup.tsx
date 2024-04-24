import { SidebarItemGroup as FlowbiteSidebarItemGroup } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarItemGroupProps } from '@/types/types/components/sidebar';

const SidebarItemGroup = forwardRef<any, iSidebarItemGroupProps>(
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
    }: iSidebarItemGroupProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarItemGroup
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
      </FlowbiteSidebarItemGroup>
    );
  },
);

export default SidebarItemGroup;
