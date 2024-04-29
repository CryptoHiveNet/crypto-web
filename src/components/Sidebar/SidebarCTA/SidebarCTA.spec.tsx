import { render, waitFor } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarCTA from './SidebarCTA';

describe('SidebarCTA component', () => {
  it('should render SidebarCTA component with required props', () => {
    const mockProps = {
      id: 'test-sidebar-cta',
      className: 'sidebar-cta',
      testId: 'test-sidebar-cta',
      onClick: jest.fn(),
    };
    const { getByTestId } = render(
      <Sidebar>
        <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
      </Sidebar>,
    );
    waitFor(() => {
      const sidebarCTA = getByTestId('test-sidebar-cta');
      expect(sidebarCTA).toBeInTheDocument();
      expect(sidebarCTA).toHaveTextContent('Test CTA');
    });
  });
});
