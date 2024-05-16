import { HiEye } from 'react-icons/hi';

import { waitFor } from '@testing-library/dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Alert from './Alert';

const mockOnDismiss = jest.fn();
const mockOnClick = jest.fn();
const mockOnMouseEnter = jest.fn();
const mockOnMouseLeave = jest.fn();

const mockProps = {
    className: 'alert-class',
    color: 'warning',
    icon: HiEye,
    testId: 'my-alert',
    onDismiss: mockOnDismiss,
    onClick: mockOnClick,
    onMouseEnter: mockOnMouseEnter,
    onMouseLeave: mockOnMouseLeave,
};

describe('Alert component unit tests', () => {
    beforeEach(() => {
        mockOnDismiss.mockClear();
        mockOnClick.mockClear();
        mockOnMouseEnter.mockClear();
        mockOnMouseLeave.mockClear();
    });

    it('should render the alert with default props and message', () => {
        render(<Alert {...mockProps}>This is an alert message.</Alert>);
        const alertComponent = screen.getByTestId('my-alert');
        expect(alertComponent).toHaveTextContent('This is an alert message.');
    });

    it('should render the alert with custom props', () => {
        const AdditionalContent = () => <div>Additional Content</div>;
        render(
            <Alert
                {...mockProps}
                additionalContent={<AdditionalContent />}
            >
                Hello
            </Alert>,
        );
        expect(screen.getByText('Additional Content')).toBeInTheDocument();
    });

    it('should render the close button and close the alert when clicked', () => {
        render(<Alert {...mockProps}>This is an alert message.</Alert>);
        const alertComponent = screen.getByTestId('my-alert');
        const closeButton = alertComponent.querySelector(
            'button[aria-label="Dismiss"]',
        );

        expect(alertComponent).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();

        fireEvent.click(closeButton);

        waitFor(() => {
            expect(alertComponent).not.toBeInTheDocument();
        });
    });

    it('calls onDismiss function when dismiss button is clicked', () => {
        render(<Alert {...mockProps}>Hello</Alert>);
        const closeButton = screen.getByLabelText('Dismiss');
        fireEvent.click(closeButton);
        waitFor(() => {
            expect(onDismissMock).toHaveBeenCalledTimes(1);
        });
    });

    it('should call onClick when clicked', () => {
        render(<Alert {...mockProps}>Clickable Alert</Alert>);
        const alertComponent = screen.getByTestId('my-alert');
        fireEvent.click(alertComponent);
        waitFor(() => {
            expect(mockProps.onClick).toHaveBeenCalled();
        });
    });

    it('should call onMouseEnter when mouse enters', () => {
        render(<Alert {...mockProps}>Hoverable Alert</Alert>);
        const alertComponent = screen.getByTestId('my-alert');
        fireEvent.mouseEnter(alertComponent);
        waitFor(() => {
            expect(mockProps.onMouseEnter).toHaveBeenCalled();
        });
    });

    it('should call onMouseLeave when mouse leaves', () => {
        render(<Alert {...mockProps}>Hoverable Alert</Alert>);
        const alertComponent = screen.getByTestId('my-alert');
        fireEvent.mouseLeave(alertComponent);
        waitFor(() => {
            expect(mockProps.onMouseLeave).toHaveBeenCalled();
        });
    });
});
