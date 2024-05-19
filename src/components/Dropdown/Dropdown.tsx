import { forwardRef } from 'react';

import { Dropdown as FlowbiteDropdown } from 'flowbite-react';

import { DropdownProps } from '@/types/shared/types/components/dropdown';

// eslint-disable-next-line react/display-name
const Dropdown = forwardRef<any, DropdownProps>(
    (
        {
            id,
            label,
            dismissOnClick,
            inline,
            size,
            placement,
            renderTrigger,
            className,
            children,
            testId,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: DropdownProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteDropdown
                id={id}
                label={label}
                dismissOnClick={dismissOnClick}
                inline={inline}
                size={size}
                placement={placement}
                renderTrigger={renderTrigger}
                className={className}
                data-testid={testId}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                {children}
            </FlowbiteDropdown>
        );
    },
);

export default Dropdown;
