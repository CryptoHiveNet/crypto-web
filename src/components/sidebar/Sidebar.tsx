import { forwardRef } from 'react';

import { Sidebar as FlowbiteSidebar } from 'flowbite-react';

import { SidebarProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const Sidebar = forwardRef<any, SidebarProps>(
    (
        {
            id,
            ariaLabel,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: SidebarProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebar
                id={id}
                aria-label={ariaLabel}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteSidebar>
        );
    },
);

export default Sidebar;
