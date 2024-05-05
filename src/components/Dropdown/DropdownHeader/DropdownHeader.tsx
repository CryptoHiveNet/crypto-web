import { forwardRef } from 'react';

import { DropdownHeader as FlowbiteDropdownHeader } from 'flowbite-react';

import { DropdownHeaderProps } from '@/types/shared/types/components/dropdown';

// eslint-disable-next-line react/display-name
const DropdownHeader = forwardRef<any, DropdownHeaderProps>(
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
        }: DropdownHeaderProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteDropdownHeader
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
            </FlowbiteDropdownHeader>
        );
    },
);

export default DropdownHeader;
