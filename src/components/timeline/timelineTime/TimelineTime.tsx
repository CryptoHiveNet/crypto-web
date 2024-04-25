import { forwardRef } from 'react';

import { TimelineTime as FlowbiteTimelineTime } from 'flowbite-react';

import { TimelineTimeProps } from '@/types/shared/types/components/timeline';

// eslint-disable-next-line react/display-name
const TimelineTime = forwardRef<any, TimelineTimeProps>(
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
        }: TimelineTimeProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteTimelineTime
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
            </FlowbiteTimelineTime>
        );
    },
);

export default TimelineTime;
