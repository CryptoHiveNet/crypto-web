import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from './TableRow';

describe('TableRow component unit tests', () => {
  const mockProps = {
    id: 'test-table-row',
    className: 'custom-table-row',
    testId: 'test-table-row',
  };
  const { getByTestId } = render(
    <Table>
      <TableBody>
        <TableRow {...mockProps} />
      </TableBody>
    </Table>,
  );
  it('should render TableRow component with required props', () => {
    waitFor(() => {
      const tableRowComponent = getByTestId('test-table-row');
      expect(tableRowComponent).toBeInTheDocument();
      expect(tableRowComponent).toHaveClass('custom-table-row');
    });
  });
});
