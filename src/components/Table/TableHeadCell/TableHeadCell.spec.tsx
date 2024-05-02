import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableHead from '../TableHead/TableHead';
import TableHeadCell from './TableHeadCell';

describe('TableHeadCell component unit tests', () => {
  const mockProps = {
    id: 'test-table-head-cell',
    className: 'custom-table-head-cell',
    testId: 'test-table-head-cell',
  };
  const { getByTestId } = render(
    <Table>
      <TableHead>
        <TableHeadCell {...mockProps} />
      </TableHead>
    </Table>,
  );
  it('should render TableHeadCell component with required props', () => {
    waitFor(() => {
      const tableHeadCellComponent = getByTestId('test-table-head-cell');
      expect(tableHeadCellComponent).toBeInTheDocument();
      expect(tableHeadCellComponent).toHaveClass('custom-table-head-cell');
    });
  });
});