import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarToggle from './NavbarToggle';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-navbar-toggle',
    testId: 'test-navbar-toggle',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('NavbarToggle component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render NavbarToggle component with required props', () => {
        render(
            <Navbar>
                <NavbarToggle {...mockProps} />
            </Navbar>,
        );
        const navbarToggleComponent = screen.getByTestId('test-navbar-toggle');
        expect(navbarToggleComponent).toBeInTheDocument();
        expect(navbarToggleComponent).toHaveClass('custom-navbar-toggle');
    });

    it('should handle onClick event', () => {
        render(
            <Navbar>
                <NavbarToggle {...mockProps} />
            </Navbar>,
        );
        const navbarToggleComponent = screen.getByTestId('test-navbar-toggle');
        fireEvent.click(navbarToggleComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Navbar>
                <NavbarToggle {...mockProps} />
            </Navbar>,
        );
        const navbarToggleComponent = screen.getByTestId('test-navbar-toggle');
        fireEvent.mouseEnter(navbarToggleComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Navbar>
                <NavbarToggle {...mockProps} />
            </Navbar>,
        );
        const navbarToggleComponent = screen.getByTestId('test-navbar-toggle');
        fireEvent.mouseLeave(navbarToggleComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
