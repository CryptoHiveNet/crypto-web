import { forwardRef } from 'react';

import { TimelineContent as FlowbiteTimelineContent } from 'flowbite-react';

import { TimelineContentProps } from '@/types/shared/types/components/timeline';

// eslint-disable-next-line react/display-name
const TimelineContent = forwardRef<any, TimelineContentProps>(
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
        }: TimelineContentProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteTimelineContent
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
            </FlowbiteTimelineContent>
        );
    },
);

export default TimelineContent;
