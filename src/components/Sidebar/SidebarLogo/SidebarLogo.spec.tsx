import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarLogo from './SidebarLogo';

describe('SidebarLogo component', () => {
  it('should render SidebarLogo component with required props', () => {
    const mockProps = {
      id: 'test-logo',
      href: '/',
      img: '/path/to/image.png',
      imgAlt: 'Logo',
      testId: 'test-sidebar-logo',
    };
    const { getByTestId } = render(
      <Sidebar>
        <SidebarLogo {...mockProps} />
      </Sidebar>,
    );
    waitFor(() => {
      expect(getByTestId('test-sidebar-logo')).toBeInTheDocument();
    });
  });
});
