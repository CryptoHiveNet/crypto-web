import { fireEvent, render, screen } from '@testing-library/react';

import Toast from '../Toast';
import ToastToggle from './ToastToggle';

const onDismissMock = jest.fn();
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-toast-toggle',
    className: 'custom-toast-toggle',
    testId: 'test-toast-toggle',
    onDismiss: onDismissMock,
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('ToastToggle component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render ToastToggle component with required props', () => {
        render(
            <Toast>
                <ToastToggle {...mockProps} />
            </Toast>,
        );
        const toastToggleComponent = screen.getByTestId('test-toast-toggle');
        expect(toastToggleComponent).toBeInTheDocument();
        expect(toastToggleComponent).toHaveClass('custom-toast-toggle');
        expect(toastToggleComponent).toHaveAttribute('id', 'test-toast-toggle');
    });

    it('should handle onDismiss event', () => {
        render(
            <Toast>
                <ToastToggle {...mockProps} />
            </Toast>,
        );
        fireEvent.click(screen.getByTestId('test-toast-toggle'));
        expect(onDismissMock).toHaveBeenCalled();
    });

    it('should handle onClick event', () => {
        render(
            <Toast>
                <ToastToggle {...mockProps} />
            </Toast>,
        );
        fireEvent.click(screen.getByTestId('test-toast-toggle'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Toast>
                <ToastToggle {...mockProps} />
            </Toast>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-toast-toggle'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Toast>
                <ToastToggle {...mockProps} />
            </Toast>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-toast-toggle'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
