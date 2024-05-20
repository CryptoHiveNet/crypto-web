import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItemGroup from '../SidebarItemGroup/SidebarItemGroup';
import SidebarItems from '../SidebarItems/SidebarItems';
import SidebarItem from './SidebarItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-item',
    href: '/home',
    icon: 'home',
    label: 'Home',
    labelColor: 'blue',
    className: 'custom-sidebar-item',
    testId: 'test-sidebar-item',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarItem component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarItem component with required props', () => {
        render(
            <Sidebar>
                <SidebarItemGroup>
                    <SidebarItems>
                        <SidebarItem {...mockProps} />
                    </SidebarItems>
                </SidebarItemGroup>
            </Sidebar>,
        );
        const sidebarItemComponent = screen.getByTestId('test-sidebar-item');
        expect(sidebarItemComponent).toBeInTheDocument();
        expect(sidebarItemComponent).toHaveAttribute('href', '/home');
        expect(sidebarItemComponent).toHaveClass('custom-sidebar-item');
        // Add additional assertions based on the specific behavior of the SidebarItem component
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup>
                    <SidebarItems>
                        <SidebarItem {...mockProps} />
                    </SidebarItems>
                </SidebarItemGroup>
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-item'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup>
                    <SidebarItems>
                        <SidebarItem {...mockProps} />
                    </SidebarItems>
                </SidebarItemGroup>
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-item'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarItemGroup>
                    <SidebarItems>
                        <SidebarItem {...mockProps} />
                    </SidebarItems>
                </SidebarItemGroup>
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-item'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
