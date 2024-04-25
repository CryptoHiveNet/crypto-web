import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from '../Tabs';
import TabsItem from './TabsItem';

// Describe block for TabsItem component tests
describe('TabsItem component', () => {
  // Test case 1: Renders the component with required props
  it('should render TabsItem component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-tab-item',
      active: false,
      disabled: false,
      title: 'Test Tab',
      icon: 'icon',
      className: 'tab-item',
      testId: 'test-tab-item',
    };

    // Act
    const { getByTestId } = render(
      <Tabs>
        <TabsItem {...mockProps}>test</TabsItem>
      </Tabs>,
    );

    // Assert
    waitFor(() => {
      const tabItemComponent = getByTestId('test-tab-item');
      expect(tabItemComponent).toBeInTheDocument();
      expect(tabItemComponent).toHaveAttribute('title', 'Test Tab');
      expect(tabItemComponent).toHaveClass('tab-item');
    });
  });

  // Test case 2: Fires onClick callback when the tab item is clicked
  it('should fire onClick callback when the tab item is clicked', () => {
    // Arrange
    const mockOnClick = jest.fn();
    const mockProps = {
      id: 'test-tab-item',
      active: false,
      disabled: false,
      title: 'Test Tab',
      icon: 'icon',
      className: 'tab-item',
      testId: 'test-tab-item',
      onClick: mockOnClick,
    };

    // Act
    const { getByTestId } = render(
      <Tabs>
        <TabsItem {...mockProps}>test</TabsItem>,
      </Tabs>,
    );

    // Click on the tab item
    waitFor(() => {
      fireEvent.click(getByTestId('test-tab-item'));

      // Assert
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
