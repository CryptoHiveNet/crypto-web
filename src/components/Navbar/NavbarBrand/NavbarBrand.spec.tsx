import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarBrand from './NavbarBrand';

describe('NavbarBrand component', () => {
  it('should render NavbarBrand component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#',
      testId: 'test-navbar-brand',
    };
    const { getByTestId } = render(
      <Navbar>
        <NavbarBrand {...mockProps}>Brand</NavbarBrand>
      </Navbar>,
    );
    waitFor(() => {
      expect(getByTestId('test-navbar-brand')).toBeInTheDocument();
      expect(getByTestId('test-navbar-brand')).toHaveAttribute('href', '#');
      expect(getByTestId('test-navbar-brand')).toHaveTextContent('Brand');
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(
      <Navbar>
        <NavbarBrand {...mockProps}>Brand</NavbarBrand>
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-brand'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
