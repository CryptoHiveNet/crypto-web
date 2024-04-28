import { fireEvent, render, waitFor } from '@testing-library/react';

import Toast from '../Toast';
import ToastToggle from './ToastToggle';

// Describe block for ToastToggle component tests
describe('ToastToggle component', () => {
  // Test case 1: Renders the component with required props
  it('should render ToastToggle component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-toast-toggle',
      className: 'custom-toast-toggle',
      testId: 'test-toast-toggle',
      onDismiss: jest.fn(), // Mock function for onDismiss
    };

    // Act
    const { getByTestId } = render(
      <Toast>
        <ToastToggle {...mockProps} />
      </Toast>,
    );

    // Assert
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      expect(toastToggleComponent).toBeInTheDocument();
      expect(toastToggleComponent).toHaveClass('custom-toast-toggle');
    });
  });

  // Test case 2: Handles onClick event
  it('should handle onClick event', () => {
    // Arrange
    const mockOnClick = jest.fn();
    const mockProps = {
      id: 'test-toast-toggle',
      onClick: mockOnClick,
    };

    // Act
    const { getByTestId } = render(
      <Toast>
        <ToastToggle {...mockProps} />
      </Toast>,
    );
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      fireEvent.click(toastToggleComponent);

      // Assert
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
