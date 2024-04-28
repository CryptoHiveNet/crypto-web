import { fireEvent, render, waitFor } from '@testing-library/react';

// Import the component to test
import ListGroupContainer from './ListGroupContainer'; // Assuming this is the file path

// Describe block for ListGroupContainer component tests
describe('ListGroupContainer component', () => {
  // Test case 1: Renders the component with required props
  it('should render ListGroupContainer component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-list-group-container',
    };

    // Act
    const { getByTestId } = render(<ListGroupContainer {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-list-group-container')).toBeInTheDocument();
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
    const { getByTestId } = render(<ListGroupContainer {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-list-group-container'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = <div>Test Children</div>;

    // Act
    const { getByText } = render(
      <ListGroupContainer>{mockChildren}</ListGroupContainer>,
    );

    // Assert
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
