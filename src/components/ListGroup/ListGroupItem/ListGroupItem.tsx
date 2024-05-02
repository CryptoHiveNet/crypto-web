'use client';
import { forwardRef } from 'react';

import { ListGroup } from 'flowbite-react';

import { ListGroupItemProps } from '@/types/shared/types/components/listGroup';

// eslint-disable-next-line react/display-name
const ListGroupItem = forwardRef<any, ListGroupItemProps>(
    (
        {
            children,
            id,
            className,
            disabled,
            href,
            active,
            icon,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: ListGroupItemProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <ListGroup.Item
                id={id}
                className={className}
                disabled={disabled}
                href={href}
                active={active}
                icon={icon}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </ListGroup.Item>
        );
    },
);

export default ListGroupItem;
