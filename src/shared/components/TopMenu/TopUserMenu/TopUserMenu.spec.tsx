import { signIn, signOut, useSession } from 'next-auth/react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import TopUserMenu from './TopUserMenu';

// Mock the useSession hook
jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));

describe('TopUserMenu', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls after each test
    });

    it('renders login button when user is not authenticated', () => {
        useSession.mockReturnValue({ data: null }); // Mock unauthenticated session
        const { getByText } = render(<TopUserMenu />);
        expect(getByText('Login / Register')).toBeInTheDocument();
    });

    it('renders user menu when user is authenticated', () => {
        const mockUser = {
            name: 'Bonnie Green',
            email: 'name@flowbite.com',
            pic: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        };
        useSession.mockReturnValue({ data: { user: mockUser } }); // Mock authenticated session
        const { getByText, getByAltText } = render(<TopUserMenu />);
        expect(
            getByAltText('Bonnie Green profile picture'),
        ).toBeInTheDocument();
        expect(getByText('Hi, Bonnie')).toBeInTheDocument();
        expect(getByText('name@flowbite.com')).toBeInTheDocument();
    });

    it('calls signIn when "Login / Register" button is clicked', () => {
        useSession.mockReturnValue({ data: null }); // Mock unauthenticated session
        const { getByText } = render(<TopUserMenu />);
        fireEvent.click(getByText('Login / Register'));
        expect(signIn).toHaveBeenCalled();
    });

    it('calls signOut when "Sign Out" button is clicked', async () => {
        const mockUser = {
            name: 'Bonnie Green',
            email: 'name@flowbite.com',
            pic: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
        };
        useSession.mockReturnValue({ data: { user: mockUser } }); // Mock authenticated session
        const { getByText } = render(<TopUserMenu />);
        fireEvent.click(getByText('Sign Out'));
        await waitFor(() => {
            expect(signOut).toHaveBeenCalled();
        });
    });
});
