import { render, waitFor } from '@testing-library/react';

import Rating from '../Rating';
import RatingStar from './RatingStar';

// Describe block for RatingStar component tests
describe('RatingStar component', () => {
  // Test case 1: Renders the component with required props
  it('should render RatingStar component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-rating-star',
    };

    // Act
    const { getByTestId } = render(
      <Rating>
        <RatingStar {...mockProps} />
      </Rating>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-rating-star')).toBeInTheDocument();
    });
  });
});
