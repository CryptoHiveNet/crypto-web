import { render, waitFor } from '@testing-library/react';

import Toast from './Toast';

// Describe block for Toast component tests
describe('Toast component', () => {
  // Test case 1: Renders the component with required props
  it('should render Toast component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-toast',
      className: 'custom-toast',
      testId: 'test-toast',
    };

    // Act
    const { getByTestId } = render(<Toast {...mockProps}>Test message</Toast>);

    // Assert
    waitFor(() => {
      const toastComponent = getByTestId('test-toast');
      expect(toastComponent).toBeInTheDocument();
      expect(toastComponent).toHaveTextContent('Test message');
      expect(toastComponent).toHaveClass('custom-toast');
    });
  });
});
