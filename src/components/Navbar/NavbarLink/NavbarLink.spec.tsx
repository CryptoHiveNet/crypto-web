import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarLink from './NavbarLink';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-navbar-link',
    href: '/test',
    testId: 'test-navbar-link',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('NavbarLink component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render NavbarLink component with required props', () => {
        render(
            <Navbar>
                <NavbarLink {...mockProps}>Test Link</NavbarLink>
            </Navbar>,
        );
        const navbarLinkComponent = screen.getByTestId('test-navbar-link');
        expect(navbarLinkComponent).toBeInTheDocument();
        expect(navbarLinkComponent).toHaveClass('custom-navbar-link');
        expect(navbarLinkComponent).toHaveAttribute('href', '/test');
        expect(navbarLinkComponent).toHaveTextContent('Test Link');
    });

    it('should handle onClick event', () => {
        render(
            <Navbar>
                <NavbarLink {...mockProps}>Test Link</NavbarLink>
            </Navbar>,
        );
        const navbarLinkComponent = screen.getByTestId('test-navbar-link');
        fireEvent.click(navbarLinkComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Navbar>
                <NavbarLink {...mockProps}>Test Link</NavbarLink>
            </Navbar>,
        );
        const navbarLinkComponent = screen.getByTestId('test-navbar-link');
        fireEvent.mouseEnter(navbarLinkComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Navbar>
                <NavbarLink {...mockProps}>Test Link</NavbarLink>
            </Navbar>,
        );
        const navbarLinkComponent = screen.getByTestId('test-navbar-link');
        fireEvent.mouseLeave(navbarLinkComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
