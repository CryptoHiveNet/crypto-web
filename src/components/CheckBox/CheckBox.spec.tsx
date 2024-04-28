import { fireEvent, render, waitFor } from '@testing-library/react';

// Import the component to test
import CheckBox from './CheckBox'; // Assuming this is the file path

// Describe block for CheckBox component tests
describe('CheckBox component', () => {
  // Test case 1: Renders the component with required props
  it('should render CheckBox component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-checkbox',
    };

    // Act
    const { getByTestId } = render(<CheckBox {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-checkbox')).toBeInTheDocument();
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
    const { getByTestId } = render(<CheckBox {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-checkbox'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders with defaultChecked
  it('should render with defaultChecked', () => {
    // Arrange
    const mockProps = {
      defaultChecked: true,
    };

    // Act
    const { getByTestId } = render(<CheckBox {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-checkbox')).toBeChecked();
    });
  });
});
