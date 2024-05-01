import { TimelineTime as FlowbiteTimelineTime } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelineTimeProps } from '@/types/types/components/timeline';

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
