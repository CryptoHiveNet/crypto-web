import { Timeline as FlowbiteTimeline } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelineProps } from '@/types/shared/types/components/timeline';

const Timeline = forwardRef<any, TimelineProps>(
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
    }: TimelineProps,
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
