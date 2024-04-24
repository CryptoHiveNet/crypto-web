import { fireEvent, render, waitFor } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        container: true,
        bgDark: false,
        testId: 'test-footer',
        onClick: onClickMock,
    };
    const mockChildren = (
        <>
            <div>Contact Us</div>
            <div>Privacy Policy</div>
        </>
    );
    const { getByTestId, getByText } = render(
        <Footer {...mockProps}>{mockChildren}</Footer>,
    );
    it('should render Footer component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText('Contact Us')).toBeInTheDocument();
            expect(getByText('Privacy Policy')).toBeInTheDocument();
        });
    });
});
