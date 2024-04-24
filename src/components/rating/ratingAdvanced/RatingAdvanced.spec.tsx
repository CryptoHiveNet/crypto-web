import { render, waitFor } from '@testing-library/react';

import RatingAdvanced from './RatingAdvanced';

// Describe block for RatingAdvanced component tests
describe('RatingAdvanced component', () => {
  // Test case 1: Renders the component with required props
  it('should render RatingAdvanced component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      percentFilled: 50,
      testId: 'test-rating-advanced',
    };

    // Act
    const { getByTestId } = render(<RatingAdvanced {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-rating-advanced')).toBeInTheDocument();
    });
  });
});
