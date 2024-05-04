import { forwardRef } from 'react';

import { SidebarItemGroup as FlowbiteSidebarItemGroup } from 'flowbite-react';

import { SidebarItemGroupProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarItemGroup = forwardRef<any, SidebarItemGroupProps>(
    (
        {
            id,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: SidebarItemGroupProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebarItemGroup
                id={id}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteSidebarItemGroup>
        );
    },
);

export default SidebarItemGroup;
