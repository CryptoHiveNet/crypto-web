import { fireEvent, render, waitFor } from '@testing-library/react';

import Toast from '../Toast';
import ToastToggle from './ToastToggle';

describe('ToastToggle component unit tests', () => {
  const mockOnClick = jest.fn();
  const mockProps = {
    id: 'test-toast-toggle',
    className: 'custom-toast-toggle',
    testId: 'test-toast-toggle',
    onDismiss: jest.fn(),
    onClick: mockOnClick,
  };
  const { getByTestId } = render(
    <Toast>
      <ToastToggle {...mockProps} />
    </Toast>,
  );
  it('should render ToastToggle component with required props', () => {
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      expect(toastToggleComponent).toBeInTheDocument();
      expect(toastToggleComponent).toHaveClass('custom-toast-toggle');
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      const toastToggleComponent = getByTestId('test-toast-toggle');
      fireEvent.click(toastToggleComponent);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
