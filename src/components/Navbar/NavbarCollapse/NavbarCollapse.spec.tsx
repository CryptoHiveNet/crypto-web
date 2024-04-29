import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarCollapse from './NavbarCollapse';

describe('NavbarCollapse component', () => {
  it('should render NavbarCollapse component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-navbar-collapse',
    };
    const { getByTestId } = render(
      <Navbar>
        <NavbarCollapse {...mockProps} />
      </Navbar>,
    );
    waitFor(() => {
      expect(getByTestId('test-navbar-collapse')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(
      <Navbar>
        <NavbarCollapse {...mockProps} />
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-collapse'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
