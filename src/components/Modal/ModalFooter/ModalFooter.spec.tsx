import { fireEvent, render, screen } from '@testing-library/react';

import Modal from '../Modal';
import ModalFooter from './ModalFooter';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const mockProps = {
    id: 'test-modal-footer',
    className: 'custom-modal-footer',
    children: 'Test Modal Footer',
    testId: 'test-modal-footer',
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
describe('ModalFooter component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render ModalFooter component with required props', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalFooter {...mockProps} />
            </Modal>,
        );
        const modalFooterComponent = screen.getByTestId('test-modal-footer');
        expect(modalFooterComponent).toBeInTheDocument();
        expect(modalFooterComponent).toHaveClass('custom-modal-footer');
        expect(screen.getByText('Test Modal Footer')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalFooter {...mockProps} />
            </Modal>,
        );
        const modalFooterComponent = screen.getByTestId('test-modal-footer');
        fireEvent.click(modalFooterComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalFooter {...mockProps} />
            </Modal>,
        );
        const modalFooterComponent = screen.getByTestId('test-modal-footer');
        fireEvent.mouseEnter(modalFooterComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalFooter {...mockProps} />
            </Modal>,
        );
        const modalFooterComponent = screen.getByTestId('test-modal-footer');
        fireEvent.mouseLeave(modalFooterComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children correctly', () => {
        render(
            <Modal {...mockModalProps}>
                <ModalFooter {...mockProps} />
            </Modal>,
        );
        expect(screen.getByText('Test Modal Footer')).toBeInTheDocument();
    });
});
