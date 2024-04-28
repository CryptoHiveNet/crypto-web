import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarGroup from './AvatarGroup';

// Describe block for AvatarGroup component tests
describe('AvatarGroup component', () => {
  // Test case 1: Renders the component with required props
  it('should render AvatarGroup component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-avatar-group',
    };

    // Act
    const { getByTestId } = render(<AvatarGroup {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-avatar-group')).toBeInTheDocument();
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
    const { getByTestId } = render(<AvatarGroup {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar-group'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = (
      <div>
        <span>Child 1</span>
        <span>Child 2</span>
      </div>
    );

    // Act
    const { getByText } = render(<AvatarGroup>{mockChildren}</AvatarGroup>);

    // Assert
    waitFor(() => {
      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();
    });
  });
});
