import { TimelinePoint as FlowbiteTimelinePoint } from 'flowbite-react';
import { forwardRef } from 'react';

import { TimelinePointProps } from '@/types/shared/types/components/timeline';

// eslint-disable-next-line react/display-name
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
