import { forwardRef } from 'react';

import { SidebarCTA as FlowbiteSidebarCTA } from 'flowbite-react';

import { SidebarCTAProps } from '@/types/shared/types/components/sidebar';

// eslint-disable-next-line react/display-name
const SidebarCTA = forwardRef<any, SidebarCTAProps>(
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
        }: SidebarCTAProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteSidebarCTA
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
            </FlowbiteSidebarCTA>
        );
    },
);

export default SidebarCTA;
