import { forwardRef } from 'react';

import { NavbarToggle as FlowbiteNavbarToggle } from 'flowbite-react';

import { NavbarToggleProps } from '@/types/shared/types/components/navbar';

// eslint-disable-next-line react/display-name
const NavbarToggle = forwardRef<any, NavbarToggleProps>(
    (
        {
            id,
            className,
            testId,
            // onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: NavbarToggleProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteNavbarToggle
                id={id}
                className={className}
                data-testid={testId}
                // onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            />
        );
    },
);

export default NavbarToggle;
