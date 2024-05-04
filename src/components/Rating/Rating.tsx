import { forwardRef } from 'react';

import { Rating as FlowbiteRating } from 'flowbite-react';

import { RatingProps } from '@/types/shared/types/components/rating';

// eslint-disable-next-line react/display-name
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
