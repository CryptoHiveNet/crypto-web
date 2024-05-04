import { forwardRef } from 'react';

import { NavbarCollapse as FlowbiteNavbarCollapse } from 'flowbite-react';

import { NavbarCollapseProps } from '@/types/shared/types/components/navbar';

// eslint-disable-next-line react/display-name
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
