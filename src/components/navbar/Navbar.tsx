import { forwardRef } from 'react';

import { Navbar as FlowbiteNavbar } from 'flowbite-react';

import { NavbarProps } from '@/types/shared/types/components/navbar';

// eslint-disable-next-line react/display-name
const Navbar = forwardRef<any, NavbarProps>(
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
        }: NavbarProps,
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
