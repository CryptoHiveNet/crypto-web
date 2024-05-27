import { forwardRef } from 'react';

import { SidebarItems as FlowbiteSidebarItems } from 'flowbite-react';

import { SidebarItemsProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarItems = forwardRef<any, SidebarItemsProps>(
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
        }: SidebarItemsProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebarItems
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
            </FlowbiteSidebarItems>
        );
    },
);

export default SidebarItems;
