import { forwardRef } from 'react';

import { DropdownItem as FlowbiteDropdownItem } from 'flowbite-react';

import { DropdownItemProps } from '@/types/shared/types/components/dropdown';

// eslint-disable-next-line react/display-name
const DropdownItem = forwardRef<any, DropdownItemProps>(
    (
        {
            id,
            icon,
            as,
            href,
            target,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: DropdownItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteDropdownItem
                id={id}
                icon={icon}
                as={as}
                href={href}
                target={target}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteDropdownItem>
        );
    },
);

export default DropdownItem;
