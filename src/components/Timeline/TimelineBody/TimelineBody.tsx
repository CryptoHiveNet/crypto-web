import { TimelineBody as FlowbiteTimelineBody } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelineBodyProps } from '@/types/shared/types/components/timeline';

const TimelineBody = forwardRef<any, TimelineBodyProps>(
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
    }: TimelineBodyProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTimelineBody
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
      </FlowbiteTimelineBody>
    );
  },
);

export default TimelineBody;
