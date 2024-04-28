import { fireEvent, render, waitFor } from '@testing-library/react';

import Modal from './Modal';

// Describe block for Modal component tests
describe('Modal component', () => {
  // Test case 1: Renders the component with required props
  it('should render Modal component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-modal',
      show: true,
      onClose: jest.fn(),
      dismissible: true,
      size: 'large',
      popup: true,
      initialFocus: 'button',
      position: 'center',
      className: 'custom-modal',
      testId: 'test-modal',
    };

    // Act
    const { getByTestId } = render(<Modal {...mockProps} />);

    // Assert
    waitFor(() => {
      const modalComponent = getByTestId('test-modal');
      expect(modalComponent).toBeInTheDocument();
      expect(modalComponent).toHaveClass('custom-modal');
    });
  });

  // Test case 2: Executes onClose function when the modal is closed
  it('should execute onClose function when the modal is closed', () => {
    // Arrange
    const onCloseMock = jest.fn();
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
    };

    // Act
    const { getByTestId } = render(<Modal {...mockProps} />);
    waitFor(() => {
      const modalComponent = getByTestId('test-modal');
      fireEvent.click(modalComponent);

      // Assert
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
