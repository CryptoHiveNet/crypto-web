import { fireEvent, render, screen } from '@testing-library/react';

import RatingAdvanced from './RatingAdvanced';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-rating-advanced',
    percentFilled: 80,
    className: 'custom-rating-advanced',
    testId: 'test-rating-advanced',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('RatingAdvanced component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render RatingAdvanced component with required props', () => {
        render(<RatingAdvanced {...mockProps} />);
        const ratingAdvancedComponent = screen.getByTestId(
            'test-rating-advanced',
        );
        expect(ratingAdvancedComponent).toBeInTheDocument();
        expect(ratingAdvancedComponent).toHaveClass('custom-rating-advanced');
    });

    it('should handle onClick event', () => {
        render(<RatingAdvanced {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-rating-advanced'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<RatingAdvanced {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-rating-advanced'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<RatingAdvanced {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-rating-advanced'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
