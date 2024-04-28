import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarItemGroup from '../SidebarItemGroup/SidebarItemGroup';
import SidebarItems from '../SidebarItems/SidebarItems';
import SidebarCollapse from './SidebarCollapse';

// Describe block for SidebarCollapse component tests
describe('SidebarCollapse component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarCollapse component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-sidebar-collapse',
      icon: 'icon',
      label: 'Collapse',
      className: 'sidebar-collapse',
      testId: 'test-sidebar-collapse',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarCollapse {...mockProps}>
              <SidebarItem>Test Collapse</SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      const sidebarCollapse = getByTestId('test-sidebar-collapse');
      expect(sidebarCollapse).toBeInTheDocument();
      expect(sidebarCollapse).toHaveTextContent('Test Collapse');
    });
  });
});
