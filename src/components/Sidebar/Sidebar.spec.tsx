import { render, waitFor } from '@testing-library/react';

import Sidebar from './Sidebar';

// Describe block for Sidebar component tests
describe('Sidebar component', () => {
  // Test case 1: Renders the component with required props
  it('should render Sidebar component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      ariaLabel: 'test-sidebar',
      testId: 'test-sidebar',
    };

    // Act
    const { getByTestId } = render(<Sidebar {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-sidebar')).toBeInTheDocument();
    });
  });
});
