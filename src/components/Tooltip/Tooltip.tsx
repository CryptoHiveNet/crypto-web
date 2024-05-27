import { forwardRef } from 'react';

import { Tooltip as FlowbiteTooltip } from 'flowbite-react';

import { TooltipProps } from '@/types/shared/types/components/tooltip';

// eslint-disable-next-line react/display-name
const Tooltip = forwardRef<any, TooltipProps>(
    (
        {
            id,
            content,
            style,
            placement,
            trigger,
            animation,
            arrow,
            className,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: TooltipProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteTooltip
                id={id}
                content={content}
                style={style}
                placement={placement}
                trigger={trigger}
                animation={animation}
                arrow={arrow}
                className={className}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteTooltip>
        );
    },
);

export default Tooltip;
