import { fireEvent, render, waitFor } from '@testing-library/react';

// Import the component to test
import TextBox from './TextBox'; // Assuming this is the file path

// Describe block for TextBox component tests
describe('TextBox component', () => {
  // Test case 1: Renders the component with required props
  it('should render TextBox component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      type: 'text',
      labelText: 'Test Label',
      placeholder: 'Test Placeholder',
      testId: 'test-textbox',
    };

    // Act
    const { getByTestId, getByLabelText } = render(<TextBox {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-textbox')).toBeInTheDocument();
      expect(getByLabelText('Test Label')).toBeInTheDocument();
      expect(getByLabelText('Test Placeholder')).toBeInTheDocument();
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
    const { getByTestId } = render(<TextBox {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('textbox'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders with provided value
  it('should render with provided value', () => {
    // Arrange
    const mockProps = {
      value: 'Test Value',
    };

    // Act
    const { getByDisplayValue } = render(<TextBox {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByDisplayValue('Test Value')).toBeInTheDocument();
    });
  });

  // Add more test cases as needed...
});
