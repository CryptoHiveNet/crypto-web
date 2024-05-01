import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from '../SidebarItemGroup/SidebarItemGroup';
import SidebarItems from '../SidebarItems/SidebarItems';
import SidebarItem from './SidebarItem';

describe('SidebarItem component unit tests', () => {
  const mockProps = {
    id: 'test-sidebar-item',
    href: '#',
    icon: 'icon-name',
    label: 'Test Label',
    labelColor: 'blue',
    className: 'sidebar-item',
    testId: 'test-sidebar-item',
  };
  const { getByTestId } = render(
    <Sidebar>
      <SidebarItemGroup>
        <SidebarItems>
          <SidebarItem {...mockProps} />
        </SidebarItems>
      </SidebarItemGroup>
    </Sidebar>,
  );
  it('should render SidebarItem component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-sidebar-item')).toBeInTheDocument();
    });
  });
});
