import { fireEvent, render, screen } from '@testing-library/react';

import Rating from './Rating';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-rating',
    className: 'custom-rating',
    size: 'md',
    testId: 'test-rating',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Rating component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Rating component with required props', () => {
        render(<Rating {...mockProps} />);
        const ratingComponent = screen.getByTestId('test-rating');
        expect(ratingComponent).toBeInTheDocument();
        expect(ratingComponent).toHaveClass('custom-rating');
    });

    it('should handle onClick event', () => {
        render(<Rating {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-rating'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Rating {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-rating'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Rating {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-rating'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
