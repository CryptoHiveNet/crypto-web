import '@testing-library/jest-dom';

import { useTranslation } from 'react-i18next';

import { useToastContext } from '@/types/modules/shared/components/ToastContextProvider/ToastContextProvider';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from '@testing-library/react';

import { useRegistration } from '../../hooks/useRegisterUser';
import RegistrationForm from './RegistrationForm';

jest.mock('../../hooks/useRegisterUser');
jest.mock(
    '@/types/modules/shared/components/ToastContextProvider/ToastContextProvider',
);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

const submitMock = jest.fn();
const createToastMock = jest.fn();
const deleteAllToastsMock = jest.fn();
const useRegistrationMock = useRegistration as jest.MockedFunction<
    typeof useRegistration
>;
const useToastContextMock = useToastContext as jest.MockedFunction<
    typeof useToastContext
>;

describe('RegistrationForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useRegistrationMock.mockReturnValue({
            submit: submitMock,
            isPending: false,
            errorMessages: [],
            isSuccess: false,
        });
        useToastContextMock.mockReturnValue({
            createToast: createToastMock,
            deleteToast: jest.fn(),
            deleteAllToasts: deleteAllToastsMock,
        });
    });

    it('should render registration form', () => {
        render(<RegistrationForm />);

        const registrationForm = screen.getByTestId('registrationForm');
        expect(registrationForm).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('enter-your-username'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('email-place-holder'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('enter-your-first-name'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('enter-your-last-name'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('enter-your-password'),
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('enter-your-password-again'),
        ).toBeInTheDocument();
        const agreementCheckbox =
            within(registrationForm).getByRole('checkbox');
        expect(agreementCheckbox).toBeInTheDocument();
        const submitButton = within(registrationForm).getByRole('button', {
            name: 'register-new-user',
        });
        expect(submitButton).toBeInTheDocument();
    });

    // it('should disable the submit button if the form is not completed yet', () => {
    //     render(<RegistrationForm />);
    //     const registrationForm = screen.getByTestId('registrationForm');
    //     const submitButton = within(registrationForm).getByRole('button', {
    //         name: 'register-new-user',
    //     });
    //     expect(submitButton).toBeDisabled();
    // });

    // it('should disable the submit button if the form is not completed correctly', async () => {
    //     render(<RegistrationForm />);
    //     const registrationForm = screen.getByTestId('registrationForm');

    //     fireEvent.change(screen.getByPlaceholderText('enter-your-username'), {
    //         target: { value: 'testuser' },
    //     });
    //     fireEvent.change(screen.getByPlaceholderText('email-place-holder'), {
    //         target: { value: 'invalid-email' },
    //     });
    //     fireEvent.change(screen.getByPlaceholderText('enter-your-password'), {
    //         target: { value: 'password123' },
    //     });
    //     fireEvent.change(
    //         screen.getByPlaceholderText('enter-your-password-again'),
    //         { target: { value: 'password123' } },
    //     );

    //     const submitButton = within(registrationForm).getByRole('button', {
    //         name: 'register-new-user',
    //     });
    //     expect(submitButton).toBeDisabled();
    // });

    it('should show an error if the username has been taken', async () => {
        useRegistrationMock.mockReturnValue({
            submit: submitMock,
            isPending: false,
            errorMessages: ['username-already-taken'],
            isSuccess: false,
        });

        render(<RegistrationForm />);

        await waitFor(() => {
            expect(createToastMock).toHaveBeenCalledWith({
                message: 'username-already-taken',
                type: 'danger',
            });
        });
    });

    it('should enable the submit button if the form is completed correctly', async () => {
        render(<RegistrationForm />);
        const registrationForm = screen.getByTestId('registrationForm');

        fireEvent.change(screen.getByPlaceholderText('enter-your-username'), {
            target: { value: 'testuser' },
        });
        fireEvent.change(screen.getByPlaceholderText('email-place-holder'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText('enter-your-first-name'), {
            target: { value: 'John' },
        });
        fireEvent.change(screen.getByPlaceholderText('enter-your-last-name'), {
            target: { value: 'Doe' },
        });
        fireEvent.change(screen.getByPlaceholderText('enter-your-password'), {
            target: { value: 'password123' },
        });
        fireEvent.change(
            screen.getByPlaceholderText('enter-your-password-again'),
            { target: { value: 'password123' } },
        );
        fireEvent.click(screen.getByText('i-agree-with-the'));

        const submitButton = within(registrationForm).getByRole('button', {
            name: 'register-new-user',
        });
        await waitFor(() => expect(submitButton).not.toBeDisabled());
    });

    it('should hide the submit button and show a loading state when the form is submitted', async () => {
        useRegistrationMock.mockReturnValue({
            submit: submitMock,
            isPending: true,
            errorMessages: [],
            isSuccess: false,
        });

        render(<RegistrationForm />);
        const registrationForm = screen.getByTestId('registrationForm');
        const submitButton = within(registrationForm).getByRole('button', {
            name: 'register-new-user',
        });
        fireEvent.click(submitButton);

        await waitFor(() => {
            const spinner = screen.getByRole('status');
            expect(submitButton).toBeDisabled();
            expect(spinner).toBeInTheDocument();
        });
    });

    it('should show the submit button and hide the loading state if there is an error during submission', async () => {
        useRegistrationMock.mockReturnValue({
            submit: submitMock,
            isPending: false,
            errorMessages: ['some-error'],
            isSuccess: false,
        });

        render(<RegistrationForm />);
        const registrationForm = screen.getByTestId('registrationForm');
        const submitButton = within(registrationForm).getByRole('button', {
            name: 'register-new-user',
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(submitButton).not.toBeDisabled();
            expect(submitButton).not.toHaveClass('isProcessing');
            expect(createToastMock).toHaveBeenCalledWith({
                message: 'some-error',
                type: 'danger',
            });
        });
    });

    it('should hide the submit button and show a success message if the user is being registered successfully', async () => {
        useRegistrationMock.mockReturnValue({
            submit: submitMock,
            isPending: false,
            errorMessages: [],
            isSuccess: true,
        });

        render(<RegistrationForm />);

        await waitFor(() => {
            expect(
                screen.getByText('please-go-to-the-login-page'),
            ).toBeInTheDocument();
            expect(
                screen.queryByTestId('registrationForm'),
            ).not.toBeInTheDocument();
        });
    });
});
