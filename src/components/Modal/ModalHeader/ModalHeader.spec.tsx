import { fireEvent, render, screen } from '@testing-library/react';

import Modal from '../Modal';
import ModalHeader from './ModalHeader';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const mockProps = {
    id: 'modal-header',
    className: 'custom-modal-header',
    children: 'Test Modal Header',
    testId: 'test-modal-header',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};
const mockModalProps = {
    id: 'test-modal',
    show: true,
    dismissible: true,
    size: 'large',
    popup: true,
    initialFocus: 'button',
    position: 'center',
    className: 'custom-modal',
    testId: 'test-modal',
};
describe('ModalHeader component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render ModalHeader component with required props', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalHeader {...mockProps} />
            </Modal>,
        );
        const modalHeaderComponent = screen.getByTestId('test-modal-header');
        expect(modalHeaderComponent).toBeInTheDocument();
        expect(modalHeaderComponent).toHaveClass('custom-modal-header');
        expect(screen.getByText('Test Modal Header')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalHeader {...mockProps} />
            </Modal>,
        );
        const modalHeaderComponent = screen.getByTestId('test-modal-header');
        fireEvent.click(modalHeaderComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalHeader {...mockProps} />
            </Modal>,
        );
        const modalHeaderComponent = screen.getByTestId('test-modal-header');
        fireEvent.mouseEnter(modalHeaderComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalHeader {...mockProps} />
            </Modal>,
        );
        const modalHeaderComponent = screen.getByTestId('test-modal-header');
        fireEvent.mouseLeave(modalHeaderComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children correctly', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalHeader {...mockProps} />
            </Modal>,
        );
        expect(screen.getByText('Test Modal Header')).toBeInTheDocument();
    });
});
