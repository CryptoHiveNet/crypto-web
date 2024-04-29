import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from './SidebarItemGroup';

describe('SidebarItemGroup component', () => {
  it('should render SidebarItemGroup component with required props', () => {
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
    waitFor(() => {
      expect(getByTestId('test-sidebar-item-group')).toBeInTheDocument();
    });
  });
});
