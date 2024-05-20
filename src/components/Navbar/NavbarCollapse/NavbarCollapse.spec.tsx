import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarCollapse from './NavbarCollapse';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-navbar-collapse',
    testId: 'test-navbar-collapse',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('NavbarCollapse component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render NavbarCollapse component with required props', () => {
        render(
            <Navbar>
                <NavbarCollapse {...mockProps} />
            </Navbar>,
        );
        const navbarCollapseComponent = screen.getByTestId(
            'test-navbar-collapse',
        );
        expect(navbarCollapseComponent).toBeInTheDocument();
        expect(navbarCollapseComponent).toHaveClass('custom-navbar-collapse');
    });

    it('should handle onClick event', () => {
        render(
            <Navbar>
                <NavbarCollapse {...mockProps} />
            </Navbar>,
        );
        const navbarCollapseComponent = screen.getByTestId(
            'test-navbar-collapse',
        );
        fireEvent.click(navbarCollapseComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Navbar>
                <NavbarCollapse {...mockProps} />
            </Navbar>,
        );
        const navbarCollapseComponent = screen.getByTestId(
            'test-navbar-collapse',
        );
        fireEvent.mouseEnter(navbarCollapseComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Navbar>
                <NavbarCollapse {...mockProps} />
            </Navbar>,
        );
        const navbarCollapseComponent = screen.getByTestId(
            'test-navbar-collapse',
        );
        fireEvent.mouseLeave(navbarCollapseComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
