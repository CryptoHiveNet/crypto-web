import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from './TableRow';

// Describe block for TableRow component tests
describe('TableRow component', () => {
  // Test case 1: Renders the component with required props
  it('should render TableRow component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table-row',
      className: 'custom-table-row',
      testId: 'test-table-row',
    };

    // Act
    const { getByTestId } = render(
      <Table>
        <TableBody>
          <TableRow {...mockProps} />
        </TableBody>
      </Table>,
    );

    // Assert
    waitFor(() => {
      const tableRowComponent = getByTestId('test-table-row');
      expect(tableRowComponent).toBeInTheDocument();
      expect(tableRowComponent).toHaveClass('custom-table-row');
    });
  });
});
