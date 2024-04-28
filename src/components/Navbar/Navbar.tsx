import { Navbar as FlowbiteNavbar } from 'flowbite-react';
import { forwardRef } from 'react';

import { iNavbarProps } from '@/types/types/components/navbar';

const Navbar = forwardRef<any, iNavbarProps>(
  (
    {
      id,
      className,
      fluid,
      rounded,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iNavbarProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbar
        id={id}
        className={className}
        fluid={fluid}
        rounded={rounded}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteNavbar>
    );
  },
);

export default Navbar;
