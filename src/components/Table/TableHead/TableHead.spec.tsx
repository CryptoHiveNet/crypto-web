import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableHead from './TableHead';

describe('TableHead component unit tests', () => {
  const mockProps = {
    id: 'test-table-head',
    className: 'custom-table-head',
    testId: 'test-table-head',
  };
  const { getByTestId } = render(
    <Table>
      <TableHead {...mockProps} />
    </Table>,
  );
  it('should render TableHead component with required props', () => {
    waitFor(() => {
      const tableHeadComponent = getByTestId('test-table-head');
      expect(tableHeadComponent).toBeInTheDocument();
      expect(tableHeadComponent).toHaveClass('custom-table-head');
    });
  });
});
