import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from './Navbar';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-navbar',
    fluid: true,
    rounded: false,
    testId: 'test-navbar',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: 'Test Navbar Content',
};

describe('Navbar component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Navbar component with required props', () => {
        render(<Navbar {...mockProps} />);
        const navbarComponent = screen.getByTestId('test-navbar');
        expect(navbarComponent).toBeInTheDocument();
        expect(navbarComponent).toHaveClass('custom-navbar');
        expect(screen.getByText('Test Navbar Content')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<Navbar {...mockProps} />);
        const navbarComponent = screen.getByTestId('test-navbar');
        fireEvent.click(navbarComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Navbar {...mockProps} />);
        const navbarComponent = screen.getByTestId('test-navbar');
        fireEvent.mouseEnter(navbarComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Navbar {...mockProps} />);
        const navbarComponent = screen.getByTestId('test-navbar');
        fireEvent.mouseLeave(navbarComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render rounded prop correctly', () => {
        render(<Navbar {...mockProps} />);
        const navbarComponent = screen.getByTestId('test-navbar');
        expect(navbarComponent).not.toHaveClass('navbar-rounded');
    });

    it('should render children correctly', () => {
        render(<Navbar {...mockProps} />);
        expect(screen.getByText('Test Navbar Content')).toBeInTheDocument();
    });
});
