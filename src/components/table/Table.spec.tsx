import { render, waitFor } from '@testing-library/react';

import Table from './Table';

// Describe block for Table component tests
describe('Table component', () => {
  // Test case 1: Renders the component with required props
  it('should render Table component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table',
      striped: true,
      hoverable: true,
      className: 'custom-table',
      testId: 'test-table',
    };

    // Act
    const { getByTestId } = render(<Table {...mockProps} />);

    // Assert
    waitFor(() => {
      const tableComponent = getByTestId('test-table');
      expect(tableComponent).toBeInTheDocument();
      expect(tableComponent).toHaveClass('custom-table');
    });
  });
});
