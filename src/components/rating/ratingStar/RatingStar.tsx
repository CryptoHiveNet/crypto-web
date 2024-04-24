import { RatingStar as FlowbiteRatingStar } from 'flowbite-react';
import { forwardRef } from 'react';

import { iRatingStarProps } from '@/types/types/components/rating';

const RatingStar = forwardRef<any, iRatingStarProps>(
  (
    {
      id,
      className,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iRatingStarProps,
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
