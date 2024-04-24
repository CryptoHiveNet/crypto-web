import { SidebarCollapse as FlowbiteSidebarCollapse } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarCollapseProps } from '@/types/types/components/sidebar';

const SidebarCollapse = forwardRef<any, iSidebarCollapseProps>(
  (
    {
      id,
      icon,
      label,
      renderChevronIcon,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iSidebarCollapseProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarCollapse
        id={id}
        icon={icon}
        label={label}
        renderChevronIcon={renderChevronIcon}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteSidebarCollapse>
    );
  },
);

export default SidebarCollapse;
