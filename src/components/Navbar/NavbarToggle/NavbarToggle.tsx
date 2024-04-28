import { NavbarToggle as FlowbiteNavbarToggle } from 'flowbite-react';
import { forwardRef } from 'react';

import { iNavbarToggleProps } from '@/types/types/components/navbar';

const NavbarToggle = forwardRef<any, iNavbarToggleProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iNavbarToggleProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbarToggle
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

export default NavbarToggle;
