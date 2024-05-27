import { forwardRef } from 'react';

import { ModalBody as FlowbiteModalBody } from 'flowbite-react';

import { ModalBodyProps } from '@/types/shared/types/components/modal';

// eslint-disable-next-line react/display-name
const ModalBody = forwardRef<any, ModalBodyProps>(
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
        }: ModalBodyProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteModalBody
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
            </FlowbiteModalBody>
        );
    },
);

export default ModalBody;
