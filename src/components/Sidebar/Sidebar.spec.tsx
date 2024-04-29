import { render, waitFor } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  it('should render Sidebar component with required props', () => {
    const mockProps = {
      id: 'test-id',
      ariaLabel: 'test-sidebar',
      testId: 'test-sidebar',
    };
    const { getByTestId } = render(<Sidebar {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-sidebar')).toBeInTheDocument();
    });
  });
});
