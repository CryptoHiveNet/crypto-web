import { fireEvent, render, waitFor } from '@testing-library/react';

import Toast from '../Toast';
import ToastToggle from './ToastToggle';

describe('ToastToggle component', () => {
  it('should render ToastToggle component with required props', () => {
    const mockProps = {
      id: 'test-toast-toggle',
      className: 'custom-toast-toggle',
      testId: 'test-toast-toggle',
      onDismiss: jest.fn(),
    };
    const { getByTestId } = render(
      <Toast>
        <ToastToggle {...mockProps} />
      </Toast>,
    );
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      expect(toastToggleComponent).toBeInTheDocument();
      expect(toastToggleComponent).toHaveClass('custom-toast-toggle');
    });
  });
  it('should handle onClick event', () => {
    const mockOnClick = jest.fn();
    const mockProps = {
      id: 'test-toast-toggle',
      onClick: mockOnClick,
    };
    const { getByTestId } = render(
      <Toast>
        <ToastToggle {...mockProps} />
      </Toast>,
    );
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      fireEvent.click(toastToggleComponent);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
