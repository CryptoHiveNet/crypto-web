import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarCollapse from './NavbarCollapse';

describe('NavbarCollapse component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-navbar-collapse',
        onClick: onClickMock,
    };
    const { getByTestId } = render(
        <Navbar>
            <NavbarCollapse {...mockProps} />
        </Navbar>,
    );
    it('should render NavbarCollapse component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-navbar-collapse')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-navbar-collapse'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
