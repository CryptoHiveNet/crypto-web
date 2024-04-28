import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarToggle from './NavbarToggle';

// Describe block for NavbarToggle component tests
describe('NavbarToggle component', () => {
  // Test case 1: Renders the component with required props
  it('should render NavbarToggle component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-navbar-toggle',
    };

    // Act
    const { getByTestId } = render(
      <Navbar>
        <NavbarToggle {...mockProps} />
      </Navbar>,
    );
    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar-toggle')).toBeInTheDocument();
    });
  });

  // Test case 2: Handles onClick event
  it('should handle onClick event', () => {
    // Arrange
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };

    // Act
    const { getByTestId } = render(
      <Navbar>
        <NavbarToggle {...mockProps} />
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-toggle'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
