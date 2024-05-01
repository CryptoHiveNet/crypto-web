import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItems from './SidebarItems';

describe('SidebarItems component unit tests', () => {
  const mockProps = {
    id: 'test-sidebar-items',
    className: 'sidebar-items',
    testId: 'test-sidebar-items',
  };
  const { getByTestId } = render(
    <Sidebar>
      <SidebarItems {...mockProps} />
    </Sidebar>,
  );
  it('should render SidebarItems component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-sidebar-items')).toBeInTheDocument();
    });
  });
});
