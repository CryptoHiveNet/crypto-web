import { TimelineItem as FlowbiteTimelineItem } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTimelineItemProps } from '@/types/types/components/timeline';

const TimelineItem = forwardRef<any, iTimelineItemProps>(
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
    }: iTimelineItemProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTimelineItem
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
      </FlowbiteTimelineItem>
    );
  },
);

export default TimelineItem;
