import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarBrand from './NavbarBrand';

describe('NavbarBrand component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        href: '#',
        testId: 'test-navbar-brand',
        onClick: onClickMock,
    };
    const { getByTestId } = render(
        <Navbar>
            <NavbarBrand {...mockProps}>Brand</NavbarBrand>
        </Navbar>,
    );
    it('should render NavbarBrand component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-navbar-brand')).toBeInTheDocument();
            expect(getByTestId('test-navbar-brand')).toHaveAttribute(
                'href',
                '#',
            );
            expect(getByTestId('test-navbar-brand')).toHaveTextContent('Brand');
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-navbar-brand'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
