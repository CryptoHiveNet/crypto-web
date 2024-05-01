import { TimelineTitle as FlowbiteTimelineTitle } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelineTitleProps } from '@/types/types/components/timeline';

const TimelineTitle = forwardRef<any, TimelineTitleProps>(
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
    }: TimelineTitleProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTimelineTitle
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
      </FlowbiteTimelineTitle>
    );
  },
);

export default TimelineTitle;
