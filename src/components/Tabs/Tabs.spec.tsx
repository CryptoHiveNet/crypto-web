import { fireEvent, render, screen } from '@testing-library/react';

import Tabs from './Tabs';

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
