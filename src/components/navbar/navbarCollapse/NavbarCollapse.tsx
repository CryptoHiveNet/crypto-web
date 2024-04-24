import { NavbarCollapse as FlowbiteNavbarCollapse } from 'flowbite-react';
import { forwardRef } from 'react';

import { iNavbarCollapseProps } from '@/types/types/components/navbar';

const NavbarCollapse = forwardRef<any, iNavbarCollapseProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iNavbarCollapseProps,
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
