import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarLogo from './SidebarLogo';

// Describe block for SidebarLogo component tests
describe('SidebarLogo component', () => {
  // Test case 1: Renders the component with required props
  it('should render SidebarLogo component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-logo',
      href: '/',
      img: '/path/to/image.png',
      imgAlt: 'Logo',
      testId: 'test-sidebar-logo',
    };

    // Act
    const { getByTestId } = render(
      <Sidebar>
        <SidebarLogo {...mockProps} />
      </Sidebar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-sidebar-logo')).toBeInTheDocument();
    });
  });
});
