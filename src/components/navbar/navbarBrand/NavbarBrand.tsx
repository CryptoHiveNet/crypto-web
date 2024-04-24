import { NavbarBrand as FlowbiteNavbarBrand } from 'flowbite-react';
import { forwardRef } from 'react';

import { iNavbarBrandProps } from '@/types/types/components/navbar';

const NavbarBrand = forwardRef<any, iNavbarBrandProps>(
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
    }: iNavbarBrandProps,
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
