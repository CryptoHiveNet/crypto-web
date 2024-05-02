import { NavbarLink as FlowbiteNavbarLink } from 'flowbite-react';
import { forwardRef } from 'react';

import { NavbarLinkProps } from '@/types/shared/types/components/navbar';

// eslint-disable-next-line react/display-name
const NavbarLink = forwardRef<any, NavbarLinkProps>(
  (
    {
      id,
      className,
      href,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: NavbarLinkProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbarLink
        id={id}
        className={className}
        href={href}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteNavbarLink>
    );
  },
);

export default NavbarLink;
