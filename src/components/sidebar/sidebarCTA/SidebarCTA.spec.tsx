import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarCTA from './SidebarCTA';

// Describe block for SidebarCTA component tests
describe('SidebarCTA component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarCTA component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-sidebar-cta',
      className: 'sidebar-cta',
      testId: 'test-sidebar-cta',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      const sidebarCTA = getByTestId('test-sidebar-cta');
      expect(sidebarCTA).toBeInTheDocument();
      expect(sidebarCTA).toHaveTextContent('Test CTA');
    });
  });
});
