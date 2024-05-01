import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarToggle from './NavbarToggle';

describe('NavbarToggle component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    testId: 'test-navbar-toggle',
    onClick: onClickMock,
  };
  const { getByTestId } = render(
    <Navbar>
      <NavbarToggle {...mockProps} />
    </Navbar>,
  );
  it('should render NavbarToggle component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-navbar-toggle')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-toggle'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
