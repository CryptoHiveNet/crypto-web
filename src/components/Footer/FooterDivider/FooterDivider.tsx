import { forwardRef } from 'react';

import { FooterDivider as FlowbiteFooterDivider } from 'flowbite-react';

import { FooterDividerProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterDivider = forwardRef<any, FooterDividerProps>(
    (
        {
            id,
            className,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: FooterDividerProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteFooterDivider
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

export default FooterDivider;
