import { render, waitFor } from '@testing-library/react';

import Progress from './Progress';

// Describe block for Progress component tests
describe('Progress component', () => {
  // Test case 1: Renders the component with required props
  it('should render Progress component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      progress: 50,
      testId: 'test-progress',
    };

    // Act
    const { getByTestId } = render(<Progress {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-progress')).toBeInTheDocument();
    });
  });
});
