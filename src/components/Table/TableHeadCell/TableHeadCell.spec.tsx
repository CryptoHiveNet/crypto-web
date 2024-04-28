import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableHead from '../TableHead/TableHead';
import TableHeadCell from './TableHeadCell';

// Describe block for TableHeadCell component tests
describe('TableHeadCell component', () => {
  // Test case 1: Renders the component with required props
  it('should render TableHeadCell component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table-head-cell',
      className: 'custom-table-head-cell',
      testId: 'test-table-head-cell',
    };

    // Act
    const { getByTestId } = render(
      <Table>
        <TableHead>
          <TableHeadCell {...mockProps} />
        </TableHead>
      </Table>,
    );

    // Assert
    waitFor(() => {
      const tableHeadCellComponent = getByTestId('test-table-head-cell');
      expect(tableHeadCellComponent).toBeInTheDocument();
      expect(tableHeadCellComponent).toHaveClass('custom-table-head-cell');
    });
  });
});
