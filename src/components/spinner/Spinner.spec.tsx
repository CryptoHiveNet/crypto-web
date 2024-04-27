import { render, waitFor } from '@testing-library/react';

import Spinner from './Spinner';

// Describe block for Spinner component tests
describe('Spinner component', () => {
  // Test case 1: Renders the component with required props
  it('should render Spinner component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-spinner',
      ariaLabel: 'Loading spinner',
      color: 'blue',
      size: 'medium',
      className: 'custom-spinner',
      testId: 'test-spinner',
    };

    // Act
    const { getByTestId } = render(<Spinner {...mockProps} />);

    // Assert
    waitFor(() => {
      const spinnerComponent = getByTestId('test-spinner');
      expect(spinnerComponent).toBeInTheDocument();
      expect(spinnerComponent).toHaveAttribute('aria-label', 'Loading spinner');
      expect(spinnerComponent).toHaveClass('custom-spinner');
    });
  });
});
