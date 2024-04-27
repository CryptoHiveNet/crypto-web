import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalFooter from './ModalFooter';

// Describe block for ModalFooter component tests
describe('ModalFooter component', () => {
  // Test case 1: Renders the component with required props
  it('should render ModalFooter component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-modal-footer',
      className: 'custom-modal-footer',
      children: 'Test Modal Footer',
      testId: 'test-modal-footer',
    };

    // Act
    const { getByTestId, getByText } = render(
      <Modal>
        <ModalFooter {...mockProps} />
      </Modal>,
    );

    // Assert
    waitFor(() => {
      const modalFooterComponent = getByTestId('test-modal-footer');
      expect(modalFooterComponent).toBeInTheDocument();
      expect(modalFooterComponent).toHaveClass('custom-modal-footer');
      expect(getByText('Test Modal Footer')).toBeInTheDocument();
    });
  });
});
