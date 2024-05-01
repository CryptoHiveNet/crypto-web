import { RatingStar as FlowbiteRatingStar } from 'flowbite-react';
import { forwardRef } from 'react';

import { RatingStarProps } from '@/types/types/components/rating';

const RatingStar = forwardRef<any, RatingStarProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: RatingStarProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteRatingStar
        id={id}
        className={className}
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

export default RatingStar;
