import { render, waitFor } from '@testing-library/react';

import Rating from './Rating';

// Describe block for Rating component tests
describe('Rating component', () => {
  // Test case 1: Renders the component with required props
  it('should render Rating component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      size: 'medium',
      testId: 'test-rating',
    };

    // Act
    const { getByTestId } = render(<Rating {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-rating')).toBeInTheDocument();
    });
  });
});
