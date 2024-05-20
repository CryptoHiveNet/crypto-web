import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from './SidebarItemGroup';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-item-group',
    className: 'custom-sidebar-item-group',
    testId: 'test-sidebar-item-group',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarItemGroup component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarItemGroup component with required props', () => {
        render(
            <Sidebar>
                <SidebarItemGroup {...mockProps} />
            </Sidebar>,
        );
        const sidebarItemGroupComponent = screen.getByTestId(
            'test-sidebar-item-group',
        );
        expect(sidebarItemGroupComponent).toBeInTheDocument();
        expect(sidebarItemGroupComponent).toHaveClass(
            'custom-sidebar-item-group',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup {...mockProps} />
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-item-group'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-item-group'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-item-group'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
