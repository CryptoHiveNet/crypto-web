import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from './Tabs';
import TabsItem from './TabsItem/TabsItem';

describe('Tabs component', () => {
  it('should render Tabs component with required props', () => {
    const mockProps = {
      id: 'test-tabs',
      ariaLabel: 'Test Tabs',
      onActiveTabChange: jest.fn(),
      className: 'tabs',
      testId: 'test-tabs',
    };
    const { getByTestId } = render(
      <Tabs {...mockProps}>
        <TabsItem title='Tab 1'>Tab 1 Content</TabsItem>
      </Tabs>,
    );
    waitFor(() => {
      const tabsComponent = getByTestId('test-tabs');
      expect(tabsComponent).toBeInTheDocument();
      expect(tabsComponent).toHaveAttribute('aria-label', 'Test Tabs');
      expect(tabsComponent).toHaveClass('tabs');
    });
  });
  it('should fire onActiveTabChange callback when a tab is clicked', () => {
    const mockOnActiveTabChange = jest.fn();
    const mockProps = {
      id: 'test-tabs',
      ariaLabel: 'Test Tabs',
      onActiveTabChange: mockOnActiveTabChange,
      className: 'tabs',
      testId: 'test-tabs',
    };
    const { getByText } = render(
      <Tabs {...mockProps}>
        <TabsItem title='Tab 1'>Tab 1 Content</TabsItem>
        <TabsItem title='Tab 2'>Tab 2 Content</TabsItem>
      </Tabs>,
    );
    waitFor(() => {
      fireEvent.click(getByText('Tab 2'));
      expect(mockOnActiveTabChange).toHaveBeenCalledWith('Tab 2');
    });
  });
});
