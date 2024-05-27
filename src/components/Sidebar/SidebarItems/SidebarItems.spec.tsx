import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItems from './SidebarItems';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-items',
    className: 'custom-sidebar-items',
    testId: 'test-sidebar-items',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarItems component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarItems component with required props', () => {
        render(
            <Sidebar>
                <SidebarItems {...mockProps} />
            </Sidebar>,
        );
        const sidebarItemsComponent = screen.getByTestId('test-sidebar-items');
        expect(sidebarItemsComponent).toBeInTheDocument();
        expect(sidebarItemsComponent).toHaveClass('custom-sidebar-items');
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarItems {...mockProps} />
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-items'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarItems {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-items'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarItems {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-items'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
