import { fireEvent, render, waitFor } from '@testing-library/react';

import Avatar from './Avatar';

// Describe block for Avatar component tests
describe('Avatar component', () => {
  // Test case 1: Renders the component with required props
  it('should render Avatar component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      img: 'avatar.jpg',
      alt: 'Avatar Image',
      testId: 'test-avatar',
    };

    // Act
    const { getByTestId } = render(<Avatar {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-avatar')).toBeInTheDocument();
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
    const { getByTestId } = render(<Avatar {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = <div>Test Children</div>;

    // Act
    const { getByText } = render(<Avatar>{mockChildren}</Avatar>);

    // Assert
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
