import { TimelinePoint as FlowbiteTimelinePoint } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTimelinePointProps } from '@/types/types/components/timeline';

const TimelinePoint = forwardRef<any, iTimelinePointProps>(
  (
    {
      id,
      className,
      icon,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTimelinePointProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTimelinePoint
        id={id}
        className={className}
        icon={icon}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      />
    );
  },
);

export default TimelinePoint;
