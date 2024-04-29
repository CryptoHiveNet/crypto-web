import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from '../Tabs';
import TabsItem from './TabsItem';

describe('TabsItem component', () => {
  it('should render TabsItem component with required props', () => {
    const mockProps = {
      id: 'test-tab-item',
      active: false,
      disabled: false,
      title: 'Test Tab',
      icon: 'icon',
      className: 'tab-item',
      testId: 'test-tab-item',
    };
    const { getByTestId } = render(
      <Tabs>
        <TabsItem {...mockProps}>test</TabsItem>
      </Tabs>,
    );
    waitFor(() => {
      const tabItemComponent = getByTestId('test-tab-item');
      expect(tabItemComponent).toBeInTheDocument();
      expect(tabItemComponent).toHaveAttribute('title', 'Test Tab');
      expect(tabItemComponent).toHaveClass('tab-item');
    });
  });
  it('should fire onClick callback when the tab item is clicked', () => {
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
    const { getByTestId } = render(
      <Tabs>
        <TabsItem {...mockProps}>test</TabsItem>,
      </Tabs>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-tab-item'));
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
