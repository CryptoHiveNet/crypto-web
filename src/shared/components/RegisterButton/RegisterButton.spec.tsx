import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { render, screen } from '@testing-library/react';

import RegisterButton from './RegisterButton';

// Mock the useSession hook
jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
}));

// Mock the useRouter hook
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('RegisterButton', () => {
    const mockUseSession = useSession as jest.Mock;
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    });

    it('should render the button with the text "register"', () => {
        mockUseSession.mockReturnValue({
            data: null,
            status: 'unauthenticated',
            update: jest.fn(), // Add update mock
        });

        render(<RegisterButton />);

        const button = screen.getByRole('button', { name: /register/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('register');
        expect(button).not.toBeDisabled();
    });

    it('should navigate to /register on click when unauthenticated', () => {
        mockUseSession.mockReturnValue({
            data: null,
            status: 'unauthenticated',
            update: jest.fn(), // Add update mock
        });

        render(<RegisterButton />);

        const button = screen.getByRole('button', { name: /register/i });
        button.click();
        expect(mockPush).toHaveBeenCalledWith('/register');
    });

    it('should be disabled when authenticated', () => {
        mockUseSession.mockReturnValue({
            data: { user: { name: 'John Doe', address: '123 Main St' } }, // Include address
            status: 'authenticated',
            update: jest.fn(), // Add update mock
        });

        render(<RegisterButton />);

        const button = screen.getByRole('button', { name: /register/i });
        expect(button).toBeDisabled();
    });
});
