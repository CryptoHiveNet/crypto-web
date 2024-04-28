import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from '../TableRow/TableRow';
import TableCell from './TableCell';

// Describe block for TableCell component tests
describe('TableCell component', () => {
  // Test case 1: Renders the component with required props
  it('should render TableCell component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-table-cell',
      className: 'custom-table-cell',
      testId: 'test-table-cell',
    };

    // Act
    const { getByTestId } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell {...mockProps} />
          </TableRow>
        </TableBody>
      </Table>,
    );

    // Assert
    waitFor(() => {
      const tableCellComponent = getByTestId('test-table-cell');
      expect(tableCellComponent).toBeInTheDocument();
      expect(tableCellComponent).toHaveClass('custom-table-cell');
    });
  });
});
