import { Rating as FlowbiteRating } from 'flowbite-react';
import { forwardRef } from 'react';

import { RatingProps } from '@/types/types/components/rating';

const Rating = forwardRef<any, RatingProps>(
  (
    {
      id,
      className,
      children,
      size,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: RatingProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteRating
        id={id}
        className={className}
        size={size}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteRating>
    );
  },
);

export default Rating;
