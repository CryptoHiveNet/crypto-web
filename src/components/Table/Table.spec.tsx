import { render, waitFor } from '@testing-library/react';

import Table from './Table';

describe('Table component unit tests', () => {
  const mockProps = {
    id: 'test-table',
    striped: true,
    hoverable: true,
    className: 'custom-table',
    testId: 'test-table',
  };
  const { getByTestId } = render(<Table {...mockProps} />);
  it('should render Table component with required props', () => {
    waitFor(() => {
      const tableComponent = getByTestId('test-table');
      expect(tableComponent).toBeInTheDocument();
      expect(tableComponent).toHaveClass('custom-table');
    });
  });
});
