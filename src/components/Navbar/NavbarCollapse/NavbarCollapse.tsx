import { NavbarCollapse as FlowbiteNavbarCollapse } from 'flowbite-react';
import { forwardRef } from 'react';

import { NavbarCollapseProps } from '@/types/types/components/navbar';

const NavbarCollapse = forwardRef<any, NavbarCollapseProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: NavbarCollapseProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbarCollapse
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default NavbarCollapse;
