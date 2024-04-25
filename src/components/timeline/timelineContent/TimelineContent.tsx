import { TimelineContent as FlowbiteTimelineContent } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTimelineContentProps } from '@/types/types/components/timeline';

const TimelineContent = forwardRef<any, iTimelineContentProps>(
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
    }: iTimelineContentProps,
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
