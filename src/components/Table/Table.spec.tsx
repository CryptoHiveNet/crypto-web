import { render, waitFor } from '@testing-library/react';

import Table from './Table';

describe('Table component', () => {
  it('should render Table component with required props', () => {
    const mockProps = {
      id: 'test-table',
      striped: true,
      hoverable: true,
      className: 'custom-table',
      testId: 'test-table',
    };
    const { getByTestId } = render(<Table {...mockProps} />);
    waitFor(() => {
      const tableComponent = getByTestId('test-table');
      expect(tableComponent).toBeInTheDocument();
      expect(tableComponent).toHaveClass('custom-table');
    });
  });
});
