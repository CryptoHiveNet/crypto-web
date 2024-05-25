import { ToastType } from '@/types/shared/types/components/toast';
import { fireEvent, render, screen } from '@testing-library/react';

import NotificationToast from './NotificationToast';

describe('NotificationToast component unit tests', () => {
    it('should render NotificationToast component with success type', () => {
        render(
            <NotificationToast
                testId="notification-toast-container"
                message="Success message"
                type={ToastType.Success}
            />,
        );
        const toastContainer = screen.getByTestId(
            'notification-toast-container',
        );

        // Check container color
        expect(toastContainer).toHaveClass('bg-green-100');

        // Check icon and its color
        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute('name', 'HiCheck');
        expect(icon).toHaveClass('text-green-500');

        // Check message color
        const message = screen.getByText('Success message');
        expect(message).toHaveClass('text-green-500');

        // Check close button color
        const closeButton = screen.getByRole('button');
        expect(closeButton).toHaveClass('bg-green-100');
    });
});
