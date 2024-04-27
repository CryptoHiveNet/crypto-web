import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalBody from './ModalBody';

// Describe block for ModalBody component tests
describe('ModalBody component', () => {
  // Test case 1: Renders the component with required props
  it('should render ModalBody component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-modal-body',
      className: 'custom-modal-body',
      children: 'Test Modal Body',
      testId: 'test-modal-body',
    };

    // Act
    const { getByTestId, getByText } = render(
      <Modal>
        <ModalBody {...mockProps} />
      </Modal>,
    );

    // Assert
    waitFor(() => {
      const modalBodyComponent = getByTestId('test-modal-body');
      expect(modalBodyComponent).toBeInTheDocument();
      expect(modalBodyComponent).toHaveClass('custom-modal-body');
      expect(getByText('Test Modal Body')).toBeInTheDocument();
    });
  });
});
