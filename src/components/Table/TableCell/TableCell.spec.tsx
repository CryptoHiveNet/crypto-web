import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from '../TableRow/TableRow';
import TableCell from './TableCell';

describe('TableCell component unit tests', () => {
  const mockProps = {
    id: 'test-table-cell',
    className: 'custom-table-cell',
    testId: 'test-table-cell',
  };
  const { getByTestId } = render(
    <Table>
      <TableBody>
        <TableRow>
          <TableCell {...mockProps} />
        </TableRow>
      </TableBody>
    </Table>,
  );
  it('should render TableCell component with required props', () => {
    waitFor(() => {
      const tableCellComponent = getByTestId('test-table-cell');
      expect(tableCellComponent).toBeInTheDocument();
      expect(tableCellComponent).toHaveClass('custom-table-cell');
    });
  });
});
