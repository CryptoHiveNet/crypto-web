import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from '../sidebarItemGroup/SidebarItemGroup';
import SidebarItems from '../sidebarItems/SidebarItems';
import SidebarItem from './SidebarItem';

// Describe block for SidebarItem component tests
describe('SidebarItem component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarItem component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-sidebar-item',
      href: '#',
      icon: 'icon-name',
      label: 'Test Label',
      labelColor: 'blue',
      className: 'sidebar-item',
      testId: 'test-sidebar-item',
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarItemGroup>
          <SidebarItems>
            <SidebarItem {...mockProps} />
          </SidebarItems>
        </SidebarItemGroup>
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-sidebar-item')).toBeInTheDocument();
    });
  });
});
