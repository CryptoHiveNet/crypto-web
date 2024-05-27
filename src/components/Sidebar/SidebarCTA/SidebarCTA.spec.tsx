import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from '../Sidebar';
import SidebarCTA from './SidebarCTA';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar-cta',
    className: 'custom-sidebar-cta',
    testId: 'test-sidebar-cta',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('SidebarCTA component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render SidebarCTA component with required props', () => {
        render(
            <Sidebar>
                <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
            </Sidebar>,
        );
        const sidebarCtaComponent = screen.getByTestId('test-sidebar-cta');
        expect(sidebarCtaComponent).toBeInTheDocument();
        expect(sidebarCtaComponent).toHaveClass('custom-sidebar-cta');
        expect(screen.getByText('Test CTA')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <Sidebar>
                <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
            </Sidebar>,
        );
        fireEvent.click(screen.getByTestId('test-sidebar-cta'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Sidebar>
                <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
            </Sidebar>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar-cta'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Sidebar>
                <SidebarCTA {...mockProps}>Test CTA</SidebarCTA>
            </Sidebar>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar-cta'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
