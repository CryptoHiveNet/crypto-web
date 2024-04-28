import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalHeader from './ModalHeader';

// Describe block for ModalHeader component tests
describe('ModalHeader component', () => {
  // Test case 1: Renders the component with required props
  it('should render ModalHeader component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-modal-header',
      className: 'custom-modal-header',
      children: 'Test Modal Header',
      testId: 'test-modal-header',
    };

    // Act
    const { getByTestId, getByText } = render(
      <Modal>
        <ModalHeader {...mockProps} />
      </Modal>,
    );

    // Assert
    waitFor(() => {
      const modalHeaderComponent = getByTestId('test-modal-header');
      expect(modalHeaderComponent).toBeInTheDocument();
      expect(modalHeaderComponent).toHaveClass('custom-modal-header');
      expect(getByText('Test Modal Header')).toBeInTheDocument();
    });
  });
});
