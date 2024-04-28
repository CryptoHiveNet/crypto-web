import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
// Import the component to test
import SidebarItems from './SidebarItems';

// Describe block for SidebarItems component tests
describe('SidebarItems component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarItems component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-sidebar-items',
      className: 'sidebar-items',
      testId: 'test-sidebar-items',
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarItems {...mockProps} />
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-sidebar-items')).toBeInTheDocument();
    });
  });
});
