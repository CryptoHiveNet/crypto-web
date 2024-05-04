import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalFooter from './ModalFooter';

describe('ModalFooter component unit tests', () => {
    const mockProps = {
        id: 'test-modal-footer',
        className: 'custom-modal-footer',
        children: 'Test Modal Footer',
        testId: 'test-modal-footer',
    };
    const { getByTestId, getByText } = render(
        <Modal>
            <ModalFooter {...mockProps} />
        </Modal>,
    );
    it('should render ModalFooter component with required props', () => {
        waitFor(() => {
            const modalFooterComponent = getByTestId('test-modal-footer');
            expect(modalFooterComponent).toBeInTheDocument();
            expect(modalFooterComponent).toHaveClass('custom-modal-footer');
            expect(getByText('Test Modal Footer')).toBeInTheDocument();
        });
    });
});
