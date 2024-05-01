import { NavbarBrand as FlowbiteNavbarBrand } from 'flowbite-react';
import { forwardRef } from 'react';

import { NavbarBrandProps } from '@/types/types/components/navbar';

const NavbarBrand = forwardRef<any, NavbarBrandProps>(
  (
    {
      id,
      className,
      as,
      href,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: NavbarBrandProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteNavbarBrand
        id={id}
        className={className}
        as={as}
        href={href}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteNavbarBrand>
    );
  },
);

export default NavbarBrand;
