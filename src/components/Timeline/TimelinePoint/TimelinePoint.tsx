import { TimelinePoint as FlowbiteTimelinePoint } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelinePointProps } from '@/types/types/components/timeline';

const TimelinePoint = forwardRef<any, TimelinePointProps>(
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
    }: TimelinePointProps,
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
