import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalBody from './ModalBody';

describe('ModalBody component', () => {
  it('should render ModalBody component with required props', () => {
    const mockProps = {
      id: 'test-modal-body',
      className: 'custom-modal-body',
      children: 'Test Modal Body',
      testId: 'test-modal-body',
    };
    const { getByTestId, getByText } = render(
      <Modal>
        <ModalBody {...mockProps} />
      </Modal>,
    );
    waitFor(() => {
      const modalBodyComponent = getByTestId('test-modal-body');
      expect(modalBodyComponent).toBeInTheDocument();
      expect(modalBodyComponent).toHaveClass('custom-modal-body');
      expect(getByText('Test Modal Body')).toBeInTheDocument();
    });
  });
});
