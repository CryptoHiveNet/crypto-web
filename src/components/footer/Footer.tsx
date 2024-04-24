import { forwardRef } from 'react';

import { Footer as FlowbiteFooter } from 'flowbite-react';

import { FooterProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const Footer = forwardRef<any, FooterProps>(
    (
        {
            id,
            className,
            container,
            bgDark,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: FooterProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteFooter
                id={id}
                className={className}
                container={container}
                bgDark={bgDark}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteFooter>
        );
    },
);

export default Footer;
