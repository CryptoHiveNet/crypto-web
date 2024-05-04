import { forwardRef } from 'react';

import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';

import { BreadcrumbProps } from '@/types/shared/types/components/breadcrumb';

// eslint-disable-next-line react/display-name
const Breadcrumb = forwardRef<any, BreadcrumbProps>(
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
        }: BreadcrumbProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteBreadcrumb
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
            </FlowbiteBreadcrumb>
        );
    },
);

export default Breadcrumb;
