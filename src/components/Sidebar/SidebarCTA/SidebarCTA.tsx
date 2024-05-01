import { SidebarCTA as FlowbiteSidebarCTA } from 'flowbite-react';
import { forwardRef } from 'react';

import { SidebarCTAProps } from '@/types/types/components/sidebar';

const SidebarCTA = forwardRef<any, SidebarCTAProps>(
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
    }: SidebarCTAProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarCTA
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
      </FlowbiteSidebarCTA>
    );
  },
);

export default SidebarCTA;
