import { fireEvent, render, screen } from '@testing-library/react';

import Modal from '../Modal';
import ModalBody from './ModalBody';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const mockProps = {
    id: 'test-modal-body',
    className: 'custom-modal-body',
    children: 'Test Modal Body',
    testId: 'test-modal-body',
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
describe('ModalBody component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render ModalBody component with required props', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalBody {...mockProps} />
            </Modal>,
        );
        const modalBodyComponent = screen.getByTestId('test-modal-body');
        expect(modalBodyComponent).toBeInTheDocument();
        expect(modalBodyComponent).toHaveClass('custom-modal-body');
        expect(screen.getByText('Test Modal Body')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalBody {...mockProps} />
            </Modal>,
        );
        const modalBodyComponent = screen.getByTestId('test-modal-body');
        fireEvent.click(modalBodyComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalBody {...mockProps} />
            </Modal>,
        );
        const modalBodyComponent = screen.getByTestId('test-modal-body');
        fireEvent.mouseEnter(modalBodyComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalBody {...mockProps} />
            </Modal>,
        );
        const modalBodyComponent = screen.getByTestId('test-modal-body');
        fireEvent.mouseLeave(modalBodyComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children correctly', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalBody {...mockProps} />
            </Modal>,
        );
        expect(screen.getByText('Test Modal Body')).toBeInTheDocument();
    });
});
