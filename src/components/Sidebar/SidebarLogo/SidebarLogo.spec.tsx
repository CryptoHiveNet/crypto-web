import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarLogo from './SidebarLogo';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-logo',
    href: '#',
    img: '/logo.png',
    imgAlt: 'Logo',
    className: 'custom-sidebar-logo',
    testId: 'test-sidebar-logo',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarLogo component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarLogo component with required props', () => {
        render(
            <Sidebar>
                <SidebarLogo {...mockProps} />
            </Sidebar>,
        );
        const sidebarLogoComponent = screen.getByTestId('test-sidebar-logo');
        expect(sidebarLogoComponent).toBeInTheDocument();
        expect(sidebarLogoComponent).toHaveClass('custom-sidebar-logo');
        expect(screen.getByAltText('Logo')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarLogo {...mockProps} />
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-logo'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarLogo {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-logo'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarLogo {...mockProps} />
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-logo'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
