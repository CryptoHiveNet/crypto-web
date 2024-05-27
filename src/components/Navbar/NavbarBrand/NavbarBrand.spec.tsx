import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarBrand from './NavbarBrand';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-navbar-brand',
    as: 'a',
    href: '#',
    children: 'Test Navbar Brand',
    testId: 'test-navbar-brand',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('NavbarBrand component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render NavbarBrand component with required props', () => {
        render(
            <Navbar>
                <NavbarBrand {...mockProps} />
            </Navbar>,
        );
        const navbarBrandComponent = screen.getByTestId('test-navbar-brand');
        expect(navbarBrandComponent).toBeInTheDocument();
        expect(navbarBrandComponent).toHaveClass('custom-navbar-brand');
        expect(navbarBrandComponent.tagName.toLowerCase()).toBe('a');
        expect(navbarBrandComponent).toHaveAttribute('href', '#');
        expect(navbarBrandComponent).toHaveTextContent('Test Navbar Brand');
    });

    it('should handle onClick event', () => {
        render(
            <Navbar>
                <NavbarBrand {...mockProps} />
            </Navbar>,
        );
        const navbarBrandComponent = screen.getByTestId('test-navbar-brand');
        fireEvent.click(navbarBrandComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Navbar>
                <NavbarBrand {...mockProps} />
            </Navbar>,
        );
        const navbarBrandComponent = screen.getByTestId('test-navbar-brand');
        fireEvent.mouseEnter(navbarBrandComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Navbar>
                <NavbarBrand {...mockProps} />
            </Navbar>,
        );
        const navbarBrandComponent = screen.getByTestId('test-navbar-brand');
        fireEvent.mouseLeave(navbarBrandComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
