import { forwardRef } from 'react';

import { DropdownDivider as FlowbiteDropdownDivider } from 'flowbite-react';

import { DropdownDividerProps } from '@/types/shared/types/components/dropdown';

// eslint-disable-next-line react/display-name
const DropdownDivider = forwardRef<any, DropdownDividerProps>(
    (
        {
            id,
            className,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: DropdownDividerProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteDropdownDivider
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

export default DropdownDivider;
