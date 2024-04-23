import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarCounter from './AvatarCounter';

// Describe block for AvatarCounter component tests
describe('AvatarCounter component', () => {
  // Test case 1: Renders the component with required props
  it('should render AvatarCounter component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      total: 5,
      testId: 'test-avatar-counter',
    };

    // Act
    const { getByTestId } = render(<AvatarCounter {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-avatar-counter')).toBeInTheDocument();
    });
  });

  // Test case 2: Handles onClick event
  it('should handle onClick event', () => {
    // Arrange
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };

    // Act
    const { getByTestId } = render(<AvatarCounter {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar-counter'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
