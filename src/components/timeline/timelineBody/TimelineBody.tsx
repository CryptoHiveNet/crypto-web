import { TimelineBody as FlowbiteTimelineBody } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTimelineBodyProps } from '@/types/types/components/timeline';

const TimelineBody = forwardRef<any, iTimelineBodyProps>(
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
    }: iTimelineBodyProps,
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
