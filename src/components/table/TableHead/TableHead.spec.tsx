import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableHead from './TableHead';

// Describe block for TableHead component tests
describe('TableHead component', () => {
  // Test case 1: Renders the component with required props
  it('should render TableHead component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table-head',
      className: 'custom-table-head',
      testId: 'test-table-head',
    };

    // Act
    const { getByTestId } = render(
      <Table>
        <TableHead {...mockProps} />
      </Table>,
    );

    // Assert
    waitFor(() => {
      const tableHeadComponent = getByTestId('test-table-head');
      expect(tableHeadComponent).toBeInTheDocument();
      expect(tableHeadComponent).toHaveClass('custom-table-head');
    });
  });
});
