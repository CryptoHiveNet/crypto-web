import { fireEvent, render, screen } from '@testing-library/react';

import Spinner from './Spinner';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-spinner',
    ariaLabel: 'Loading Spinner',
    color: 'blue',
    size: 'large',
    className: 'custom-spinner',
    testId: 'test-spinner',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Spinner component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Spinner component with required props', () => {
        render(<Spinner {...mockProps} />);
        const spinnerComponent = screen.getByTestId('test-spinner');
        expect(spinnerComponent).toBeInTheDocument();
    });

    it('should have correct aria-label', () => {
        render(<Spinner {...mockProps} />);
        const spinnerComponent = screen.getByTestId('test-spinner');
        expect(spinnerComponent).toHaveAttribute(
            'aria-label',
            'Loading Spinner',
        );
    });

    it('should handle onClick event', () => {
        render(<Spinner {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-spinner'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Spinner {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-spinner'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Spinner {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-spinner'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
