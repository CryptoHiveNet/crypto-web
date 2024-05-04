import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from './Tabs';
import TabsItem from './TabsItem/TabsItem';

describe('Tabs component unit tests', () => {
    const mockOnActiveTabChange = jest.fn();
    const mockProps = {
        id: 'test-tabs',
        ariaLabel: 'Test Tabs',
        className: 'tabs',
        testId: 'test-tabs',
        onActiveTabChange: mockOnActiveTabChange,
    };
    const { getByTestId, getByText } = render(
        <Tabs {...mockProps}>
            <TabsItem title="Tab 1">Tab 1 Content</TabsItem>
            <TabsItem title="Tab 2">Tab 2 Content</TabsItem>
        </Tabs>,
    );
    it('should render Tabs component with required props', () => {
        waitFor(() => {
            const tabsComponent = getByTestId('test-tabs');
            expect(tabsComponent).toBeInTheDocument();
            expect(tabsComponent).toHaveAttribute('aria-label', 'Test Tabs');
            expect(tabsComponent).toHaveClass('tabs');
        });
    });
    it('should fire onActiveTabChange callback when a tab is clicked', () => {
        waitFor(() => {
            fireEvent.click(getByText('Tab 2'));
            expect(mockOnActiveTabChange).toHaveBeenCalledWith('Tab 2');
        });
    });
});
