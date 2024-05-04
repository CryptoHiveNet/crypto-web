import { fireEvent, render, waitFor } from '@testing-library/react';

import Tabs from '../Tabs';
import TabsItem from './TabsItem';

describe('TabsItem component unit tests', () => {
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
            <TabsItem {...mockProps}>test</TabsItem>
        </Tabs>,
    );
    it('should render TabsItem component with required props', () => {
        waitFor(() => {
            const tabItemComponent = getByTestId('test-tab-item');
            expect(tabItemComponent).toBeInTheDocument();
            expect(tabItemComponent).toHaveAttribute('title', 'Test Tab');
            expect(tabItemComponent).toHaveClass('tab-item');
        });
    });
    it('should fire onClick callback when the tab item is clicked', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-tab-item'));
            expect(mockOnClick).toHaveBeenCalled();
        });
    });
});
