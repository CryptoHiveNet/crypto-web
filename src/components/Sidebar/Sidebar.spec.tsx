import { render, waitFor } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Sidebar component unit tests', () => {
  const mockProps = {
    id: 'test-id',
    ariaLabel: 'test-sidebar',
    testId: 'test-sidebar',
  };
  const { getByTestId } = render(<Sidebar {...mockProps} />);
  it('should render Sidebar component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-sidebar')).toBeInTheDocument();
    });
  });
});
