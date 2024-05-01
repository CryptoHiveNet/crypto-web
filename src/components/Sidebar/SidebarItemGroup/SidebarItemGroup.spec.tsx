import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from './SidebarItemGroup';

describe('SidebarItemGroup component unit tests', () => {
  const mockProps = {
    id: 'test-sidebar-item-group',
    className: 'sidebar-item-group',
    testId: 'test-sidebar-item-group',
  };
  const { getByTestId } = render(
    <Sidebar>
      <SidebarItemGroup {...mockProps} />
    </Sidebar>,
  );
  it('should render SidebarItemGroup component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-sidebar-item-group')).toBeInTheDocument();
    });
  });
});
