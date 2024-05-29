import React from 'react';

import { ToastType } from '@/types/shared/types/components/toast';
import { render, screen } from '@testing-library/react';

import NotificationToast from './NotificationToast';

const testMessage = 'Test message';

const renderComponent = (type?: ToastType) => {
    render(
        <NotificationToast
            message={testMessage}
            type={type}
        />,
    );
};
describe('NotificationToast', () => {
    it('renders success toast with correct styles and content', () => {
        renderComponent(ToastType.Success);
        const toastElement = screen.getByText(testMessage);
        expect(toastElement).toBeInTheDocument();
        expect(toastElement).toHaveClass('text-green-500');
    });

    it('renders warning toast with correct styles and content', () => {
        renderComponent(ToastType.Warning);
        const toastElement = screen.getByText(testMessage);
        expect(toastElement).toBeInTheDocument();
        expect(toastElement).toHaveClass('text-orange-500');
    });

    it('renders danger toast with correct styles and content', () => {
        renderComponent(ToastType.Danger);
        const toastElement = screen.getByText(testMessage);
        expect(toastElement).toBeInTheDocument();
        expect(toastElement).toHaveClass('text-red-500');
    });

    it('renders default toast with correct styles and content', () => {
        renderComponent();
        const toastElement = screen.getByText(testMessage);
        expect(toastElement).toBeInTheDocument();
        expect(toastElement).toHaveClass('text-gray-500');
    });

    it('renders close button', () => {
        renderComponent(ToastType.Success);
        const closeButton = screen.getByRole('button');
        expect(closeButton).toBeInTheDocument();
    });

    it('assigns the correct testId', () => {
        const testId = 'notification-toast';
        render(
            <NotificationToast
                message={testMessage}
                type={ToastType.Success}
                testId={testId}
            />,
        );
        const toastElement = screen.getByTestId(testId);
        expect(toastElement).toBeInTheDocument();
    });
});
