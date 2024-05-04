import { forwardRef } from 'react';

import { ModalFooter as FlowbiteModalFooter } from 'flowbite-react';

import { ModalFooterProps } from '@/types/shared/types/components/modal';

// eslint-disable-next-line react/display-name
const ModalFooter = forwardRef<any, ModalFooterProps>(
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
        }: ModalFooterProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteModalFooter
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
            </FlowbiteModalFooter>
        );
    },
);

export default ModalFooter;
