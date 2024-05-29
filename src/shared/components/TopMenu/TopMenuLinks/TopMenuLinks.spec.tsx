import { useRouter } from 'next/router';

import { render } from '@testing-library/react';

import { TopMenuLinks } from './TopMenuLinks';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('TopMenuLinks', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correct number of links', () => {
        const { container } = render(<TopMenuLinks lng="en" />);
        const links = container.querySelectorAll('a');
        expect(links.length).toBe(5);
    });

    it('renders links with correct href attribute', () => {
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }));

        const { getByText } = render(<TopMenuLinks lng="en" />);
        const homeLink = getByText('Home');
        expect(homeLink).toHaveAttribute('href', '/');
    });

    it('activates link based on current pathname', () => {
        useRouter.mockImplementation(() => ({
            pathname: '/about-us',
        }));

        const { getByText } = render(<TopMenuLinks lng="en" />);
        const aboutUsLink = getByText('About Us');
        expect(aboutUsLink).toHaveClass('active');
    });
});
