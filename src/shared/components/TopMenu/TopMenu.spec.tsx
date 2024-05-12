import { render, screen } from '@testing-library/react';

import TopMenu from './TopMenu';

describe('TopMenu', () => {
    it('renders without crashing', () => {
        render(
            <TopMenu
                lng="en"
                testId="navbar-test-id"
            />,
        );
        const navbar = screen.getByTestId('navbar-test-id');
        expect(navbar).toBeInTheDocument(); // Use the toBeInTheDocument function
    });

    it('renders NavbarBrand with correct content', () => {
        render(
            <TopMenu
                lng="en"
                testId="navbar-test-id"
            />,
        );
        const logo = screen.getByAltText('Flowbite React Logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders TopMenuUserMenu component', () => {
        render(<TopMenu lng="en" />);
        const userMenu = screen.getByRole('button', { name: 'user menu' });
        expect(userMenu).toBeInTheDocument();
    });

    it('renders NavbarToggle component', () => {
        render(<TopMenu lng="en" />);
        const toggleButton = screen.getByRole('button', {
            name: 'toggle menu',
        });
        expect(toggleButton).toBeInTheDocument();
    });

    it('renders NavbarCollapse component', () => {
        render(<TopMenu lng="en" />);
        const collapse = screen.getByRole('navigation', { name: 'menu' });
        expect(collapse).toBeInTheDocument();
    });

    it('renders TopMenuLinks component', () => {
        render(<TopMenu lng="en" />);
        const links = screen.getByRole('navigation', { name: 'menu' });
        expect(links).toBeInTheDocument();
    });
});
