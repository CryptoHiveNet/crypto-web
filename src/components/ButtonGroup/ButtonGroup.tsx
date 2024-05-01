import React, { forwardRef } from 'react';

import { Button as FlowbiteButton } from 'flowbite-react';

import { ButtonGroupProps } from '@/types/shared/types/components/buttonGroup';

const ButtonGroup = forwardRef<any, ButtonGroupProps>(
    (
        {
            id,
            outline,
            children,
            className,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: ButtonGroupProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteButton.Group
                id={id}
                outline={outline}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteButton.Group>
        );
    },
);

export default ButtonGroup;
