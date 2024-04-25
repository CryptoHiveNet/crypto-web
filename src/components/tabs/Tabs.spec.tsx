import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from './Tabs';
import TabsItem from './tabsItem/TabsItem';

// Describe block for Tabs component tests
describe('Tabs component', () => {
  // Test case 1: Renders the component with required props
  it('should render Tabs component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-tabs',
      ariaLabel: 'Test Tabs',
      onActiveTabChange: jest.fn(), // Mock onActiveTabChange function
      className: 'tabs',
      testId: 'test-tabs',
    };

    // Act
    const { getByTestId } = render(
      <Tabs {...mockProps}>
        <TabsItem title='Tab 1'>Tab 1 Content</TabsItem>
      </Tabs>,
    );

    // Assert
    waitFor(() => {
      const tabsComponent = getByTestId('test-tabs');
      expect(tabsComponent).toBeInTheDocument();
      expect(tabsComponent).toHaveAttribute('aria-label', 'Test Tabs');
      expect(tabsComponent).toHaveClass('tabs');
    });
  });

  // Test case 2: Fires onActiveTabChange callback when a tab is clicked
  it('should fire onActiveTabChange callback when a tab is clicked', () => {
    // Arrange
    const mockOnActiveTabChange = jest.fn();
    const mockProps = {
      id: 'test-tabs',
      ariaLabel: 'Test Tabs',
      onActiveTabChange: mockOnActiveTabChange,
      className: 'tabs',
      testId: 'test-tabs',
    };

    // Act
    const { getByText } = render(
      <Tabs {...mockProps}>
        <TabsItem title='Tab 1'>Tab 1 Content</TabsItem>
        <TabsItem title='Tab 2'>Tab 2 Content</TabsItem>
      </Tabs>,
    );

    // Assert
    waitFor(() => {
      // Click on the second tab
      fireEvent.click(getByText('Tab 2'));
      expect(mockOnActiveTabChange).toHaveBeenCalledWith('Tab 2');
    });
  });

  // Add more test cases as needed...
});
