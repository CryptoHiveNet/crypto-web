import { fireEvent, render, screen } from '@testing-library/react';

import Rating from '../Rating';
import RatingStar from './RatingStar';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-rating-star',
    className: 'custom-rating-star',
    testId: 'test-rating-star',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('RatingStar component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render RatingStar component with required props', () => {
        render(
            <Rating>
                <RatingStar {...mockProps} />
            </Rating>,
        );
        const ratingStarComponent = screen.getByTestId('test-rating-star');
        expect(ratingStarComponent).toBeInTheDocument();
        expect(ratingStarComponent).toHaveClass('custom-rating-star');
    });

    it('should handle onClick event', () => {
        render(
            <Rating>
                <RatingStar {...mockProps} />
            </Rating>,
        );
        fireEvent.click(screen.getByTestId('test-rating-star'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Rating>
                <RatingStar {...mockProps} />
            </Rating>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-rating-star'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Rating>
                <RatingStar {...mockProps} />
            </Rating>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-rating-star'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
