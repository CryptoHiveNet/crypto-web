'use client';
import { forwardRef } from 'react';

import { ListGroup } from 'flowbite-react';

import { ListGroupContainerProps } from '@/types/shared/types/components/listGroup';

// eslint-disable-next-line react/display-name
const ListGroupContainer = forwardRef<any, ListGroupContainerProps>(
    (
        {
            children,
            id,
            className,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: ListGroupContainerProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <ListGroup
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
            </ListGroup>
        );
    },
);

export default ListGroupContainer;
