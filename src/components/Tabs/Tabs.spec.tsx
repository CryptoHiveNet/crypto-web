import { fireEvent, render, screen } from '@testing-library/react';

import Tabs from './Tabs';
import TabsItem from './TabsItem/TabsItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const onActiveTabChangeMock = jest.fn();

const mockProps = {
    id: 'test-tabs',
    ariaLabel: 'Test Tabs',
    onActiveTabChange: onActiveTabChangeMock,
    className: 'custom-tabs',
    testId: 'test-tabs',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Tabs component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render Tabs component with required props', () => {
        render(
            <Tabs {...mockProps}>
                <TabsItem title="Tab 1">Tab 1 Content</TabsItem>
                <TabsItem title="Tab 2">Tab 2 Content</TabsItem>
            </Tabs>,
        );

        const tabsComponent = screen.getByTestId('test-tabs');

        expect(tabsComponent).toBeInTheDocument();
        expect(tabsComponent).toHaveAttribute('aria-label', 'Test Tabs');
        expect(tabsComponent).toHaveClass('custom-tabs');
    });

    it('should fire onActiveTabChange callback when a tab is clicked', () => {
        render(
            <Tabs {...mockProps}>
                <TabsItem title="Tab 1">Tab 1 Content</TabsItem>
                <TabsItem title="Tab 2">Tab 2 Content</TabsItem>
            </Tabs>,
        );

        fireEvent.click(screen.getByText('Tab 2'));
        expect(onActiveTabChangeMock).toHaveBeenCalledWith(1);
    });
    it('should render Tabs component with required props', () => {
        render(<Tabs {...mockProps}>Tabs Content</Tabs>);
        const tabsComponent = screen.getByTestId('test-tabs');
        expect(tabsComponent).toBeInTheDocument();
        expect(tabsComponent).toHaveClass('custom-tabs');
    });

    it('should handle onClick event', () => {
        render(<Tabs {...mockProps}>Tabs Content</Tabs>);
        fireEvent.click(screen.getByTestId('test-tabs'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Tabs {...mockProps}>Tabs Content</Tabs>);
        fireEvent.mouseEnter(screen.getByTestId('test-tabs'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Tabs {...mockProps}>Tabs Content</Tabs>);
        fireEvent.mouseLeave(screen.getByTestId('test-tabs'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
