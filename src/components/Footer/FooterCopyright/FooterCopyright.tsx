import { forwardRef } from 'react';

import { FooterCopyright as FlowbiteFooterCopyright } from 'flowbite-react';

import { FooterCopyrightProps } from '@/types/shared/types/components/footer';

// eslint-disable-next-line react/display-name
const FooterCopyright = forwardRef<any, FooterCopyrightProps>(
    (
        {
            id,
            className,
            href,
            by,
            year,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: FooterCopyrightProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteFooterCopyright
                id={id}
                className={className}
                href={href}
                by={by}
                year={year}
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

export default FooterCopyright;
