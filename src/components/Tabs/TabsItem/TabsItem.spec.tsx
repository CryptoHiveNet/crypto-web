import { fireEvent, render, screen } from '@testing-library/react';

import Tabs from '../Tabs';
import TabsItem from './TabsItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-tabs-item',
    active: false,
    disabled: false,
    title: 'Test Tab',
    icon: <span>Icon</span>,
    className: 'custom-tabs-item',
    testId: 'test-tabs-item',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TabsItem component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TabsItem component with required props', () => {
        render(<TabsItem {...mockProps}>TabsItem Content</TabsItem>);
        const tabsItemComponent = screen.getByText('TabsItem Content');
        expect(tabsItemComponent).toBeInTheDocument();
        expect(tabsItemComponent).toHaveClass('custom-tabs-item');
    });

    it('should handle onClick event', () => {
        render(<TabsItem {...mockProps}>TabsItem Content</TabsItem>);
        const tabsItemComponent = screen.getByText('TabsItem Content');
        fireEvent.click(tabsItemComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<TabsItem {...mockProps}>TabsItem Content</TabsItem>);
        const tabsItemComponent = screen.getByText('TabsItem Content');
        fireEvent.mouseEnter(tabsItemComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<TabsItem {...mockProps}>TabsItem Content</TabsItem>);
        const tabsItemComponent = screen.getByText('TabsItem Content');
        fireEvent.mouseLeave(tabsItemComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
