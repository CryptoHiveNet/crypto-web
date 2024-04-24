import { RatingAdvanced as FlowbiteRatingAdvanced } from 'flowbite-react';
import { forwardRef } from 'react';

import { iRatingAdvancedProps } from '@/types/types/components/rating';

const RatingAdvanced = forwardRef<any, iRatingAdvancedProps>(
  (
    {
      id,
      percentFilled,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iRatingAdvancedProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteRatingAdvanced
        id={id}
        percentFilled={percentFilled}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteRatingAdvanced>
    );
  },
);

export default RatingAdvanced;
