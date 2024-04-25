import { Timeline as FlowbiteTimeline } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTimelineProps } from '@/types/types/components/timeline';

const Timeline = forwardRef<any, iTimelineProps>(
  (
    {
      id,
      horizontal,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTimelineProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTimeline
        id={id}
        horizontal={horizontal}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTimeline>
    );
  },
);

export default Timeline;
