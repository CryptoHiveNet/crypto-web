import { fireEvent, render, waitFor } from '@testing-library/react';

// Import the component to test
import FileInput from './FileInput';

// Describe block for FileInput component tests
describe('FileInput component', () => {
  // Test case 1: Renders the component with required props
  it('should render FileInput component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-file-input',
    };

    // Act
    const { getByTestId } = render(<FileInput {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-file-input')).toBeInTheDocument();
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
    const { getByTestId } = render(<FileInput {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-file-input'));
      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders with multiple
  it('should render with multiple', () => {
    // Arrange
    const mockProps = {
      multiple: true,
    };

    // Act
    const { getByTestId } = render(<FileInput {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-file-input')).toHaveAttribute('multiple');
    });
  });
});
