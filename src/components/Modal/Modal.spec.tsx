import { fireEvent, render, screen } from '@testing-library/react';

import Modal from './Modal';

const onCloseMock = jest.fn();
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const mockProps = {
    id: 'test-modal',
    show: true,
    onClose: onCloseMock,
    dismissible: true,
    size: 'large',
    popup: true,
    initialFocus: 'button',
    position: 'center',
    className: 'custom-modal',
    testId: 'test-modal',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};
const mockChildren = <div>Modal Content</div>;

describe('Modal component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Modal component with required props', () => {
        render(<Modal {...mockProps}>{mockChildren}</Modal>);
        const modalContainer = screen.getAllByTestId('test-modal')[0];
        expect(modalContainer).toBeInTheDocument();
        expect(modalContainer).toHaveClass('custom-modal');
    });

    it('should render children inside the modal', () => {
        render(<Modal {...mockProps}>{mockChildren}</Modal>);
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<Modal {...mockProps}>{mockChildren}</Modal>);
        const modalContainer = screen.getAllByTestId('test-modal')[0];
        fireEvent.click(modalContainer);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Modal {...mockProps}>{mockChildren}</Modal>);
        const modalContainer = screen.getAllByTestId('test-modal')[0];
        fireEvent.mouseEnter(modalContainer);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Modal {...mockProps}>{mockChildren}</Modal>);
        const modalContainer = screen.getAllByTestId('test-modal')[0];
        fireEvent.mouseLeave(modalContainer);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should not call onClose when dismissible is false and modal is clicked', () => {
        const nonDismissibleProps = { ...mockProps, dismissible: false };
        render(<Modal {...nonDismissibleProps}>{mockChildren}</Modal>);
        const modalContainer = screen.getAllByTestId('test-modal')[0];
        fireEvent.click(modalContainer);
        expect(onCloseMock).not.toHaveBeenCalled();
    });
});
