import { forwardRef } from 'react';

import { RatingAdvanced as FlowbiteRatingAdvanced } from 'flowbite-react';

import { RatingAdvancedProps } from '@/types/shared/types/components/rating';

// eslint-disable-next-line react/display-name
const RatingAdvanced = forwardRef<any, RatingAdvancedProps>(
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
        }: RatingAdvancedProps,
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
