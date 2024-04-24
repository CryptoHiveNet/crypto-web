import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-navbar',
        fluid: true,
        rounded: false,
        onClick: onClickMock,
    };
    const { getByTestId } = render(<Navbar {...mockProps} />);
    it('should render Navbar component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-navbar')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-navbar'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render fluid and rounded props', () => {
        waitFor(() => {
            expect(getByTestId('test-navbar')).toHaveClass('fluid');
            expect(getByTestId('test-navbar')).not.toHaveClass('rounded');
        });
    });
});
