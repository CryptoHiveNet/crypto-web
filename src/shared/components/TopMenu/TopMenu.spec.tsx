import '@testing-library/jest-dom';

import { Session } from 'next-auth';
import * as nextAuthReact from 'next-auth/react';

import { render, screen, waitFor } from '@testing-library/react';

import TopMenu from './TopMenu';

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));

describe('TopMenu', () => {
    it('shows user name and sign out button when user is signed in', () => {
        jest.spyOn(nextAuthReact, 'useSession').mockReturnValue({
            data: {
                user: {
                    name: 'John Doe',
                    address: '123 Main St',
                },
                expires: '',
            },
            status: 'authenticated',
            update: function (data?: any): Promise<Session | null> {
                throw new Error('Function not implemented.');
            },
        });

        render(<TopMenu />);
        waitFor(() => {
            expect(screen.getByText('John Doe,')).toBeInTheDocument();
            expect(
                screen.getByRole('button', { name: /sign out/i }),
            ).toBeInTheDocument();
        });
    });

    it('shows sign in button when user is not signed in', () => {
        jest.spyOn(nextAuthReact, 'useSession').mockReturnValue({
            data: null,
            status: 'unauthenticated',
            update: function (data?: any): Promise<Session | null> {
                throw new Error('Function not implemented.');
            },
        });

        render(<TopMenu />);
        waitFor(() => {
            expect(
                screen.getByRole('button', { name: /sign in/i }),
            ).toBeInTheDocument();
        });
    });
});
