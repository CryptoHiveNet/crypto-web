import { forwardRef } from 'react';

import { Carousel as FlowbiteCarousel } from 'flowbite-react';

import { CarouselProps } from '@/types/shared/types/components/carousel';

// eslint-disable-next-line react/display-name
const Carousel = forwardRef<any, CarouselProps>(
    (
        {
            id,
            className,
            slide,
            slideInterval,
            leftControl,
            rightControl,
            indicators,
            pauseOnHover,
            onSlideChange,
            children,
            testId,
            onClick,
            onMouseEnter,
            onMouseLeave,
            ...rest
        }: CarouselProps,
        ref: React.Ref<any> | null,
    ) => {
        return (
            <FlowbiteCarousel
                id={id}
                className={className}
                slide={slide}
                slideInterval={slideInterval}
                leftControl={leftControl}
                rightControl={rightControl}
                indicators={indicators}
                pauseOnHover={pauseOnHover}
                onSlideChange={onSlideChange}
                data-testid={testId}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                ref={ref}
                {...rest}
            >
                {children}
            </FlowbiteCarousel>
        );
    },
);

export default Carousel;
