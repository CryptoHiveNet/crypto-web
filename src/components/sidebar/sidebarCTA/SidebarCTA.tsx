import { SidebarCTA as FlowbiteSidebarCTA } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarCTAProps } from '@/types/types/components/sidebar';

const SidebarCTA = forwardRef<any, iSidebarCTAProps>(
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
    }: iSidebarCTAProps,
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
