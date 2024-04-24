import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from './SidebarItemGroup';

// Describe block for SidebarItemGroup component tests
describe('SidebarItemGroup component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarItemGroup component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-sidebar-item-group',
      className: 'sidebar-item-group',
      testId: 'test-sidebar-item-group',
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarItemGroup {...mockProps} />
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-sidebar-item-group')).toBeInTheDocument();
    });
  });
});
