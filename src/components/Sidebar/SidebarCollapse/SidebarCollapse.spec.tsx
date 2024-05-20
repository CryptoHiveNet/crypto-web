import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem/SidebarItem';
import SidebarItemGroup from '../SidebarItemGroup/SidebarItemGroup';
import SidebarItems from '../SidebarItems/SidebarItems';
import SidebarCollapse from './SidebarCollapse';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-collapse',
    icon: 'icon-class',
    label: 'Collapse Item',
    className: 'custom-sidebar-collapse',
    testId: 'test-sidebar-collapse',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarCollapse component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarCollapse component with required props', () => {
        render(
            <Sidebar>
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarCollapse {...mockProps}>
                            <SidebarItem>Test Collapse</SidebarItem>
                        </SidebarCollapse>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>,
        );
        const sidebarCollapseComponent = screen.getByTestId(
            'test-sidebar-collapse',
        );
        expect(sidebarCollapseComponent).toBeInTheDocument();
        expect(sidebarCollapseComponent).toHaveClass('custom-sidebar-collapse');
        expect(screen.getByText('Collapse Item')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarCollapse {...mockProps}>
                            <SidebarItem>Test Collapse</SidebarItem>
                        </SidebarCollapse>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-collapse'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarCollapse {...mockProps}>
                            <SidebarItem>Test Collapse</SidebarItem>
                        </SidebarCollapse>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-collapse'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarCollapse {...mockProps}>
                            <SidebarItem>Test Collapse</SidebarItem>
                        </SidebarCollapse>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-collapse'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
