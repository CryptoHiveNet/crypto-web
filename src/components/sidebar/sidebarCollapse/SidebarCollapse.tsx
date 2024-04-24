import { forwardRef } from 'react';

import { SidebarCollapse as FlowbiteSidebarCollapse } from 'flowbite-react';

import { SidebarCollapseProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarCollapse = forwardRef<any, SidebarCollapseProps>(
    (
        {
            id,
            icon,
            label,
            renderChevronIcon,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: SidebarCollapseProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebarCollapse
                id={id}
                icon={icon}
                label={label}
                renderChevronIcon={renderChevronIcon}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteSidebarCollapse>
        );
    },
);

export default SidebarCollapse;
