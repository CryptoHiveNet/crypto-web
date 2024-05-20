import { fireEvent, render, screen } from '@testing-library/react';

import Toast from './Toast';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-toast',
    className: 'custom-toast',
    testId: 'test-toast',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <div>Test Toast Message</div>,
};

describe('Toast component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Toast component with required props', () => {
        render(<Toast {...mockProps} />);
        const toastComponent = screen.getByTestId('test-toast');
        expect(toastComponent).toBeInTheDocument();
        expect(toastComponent).toHaveClass('custom-toast');
        expect(toastComponent).toHaveAttribute('id', 'test-toast');
    });

    it('should handle onClick event', () => {
        render(<Toast {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-toast'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Toast {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-toast'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Toast {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-toast'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the Toast component', () => {
        render(<Toast {...mockProps} />);
        const childElement = screen.getByText('Test Toast Message');
        expect(childElement).toBeInTheDocument();
    });
});
