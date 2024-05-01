import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarLink from './NavbarLink';

describe('NavbarLink component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    href: '#',
    testId: 'test-navbar-link',
    onClick: onClickMock,
  };
  const { getByTestId } = render(
    <Navbar>
      <NavbarLink {...mockProps}>Link</NavbarLink>
    </Navbar>,
  );
  it('should render NavbarLink component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-navbar-link')).toBeInTheDocument();
      expect(getByTestId('test-navbar-link')).toHaveAttribute('href', '#');
      expect(getByTestId('test-navbar-link')).toHaveTextContent('Link');
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-link'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
