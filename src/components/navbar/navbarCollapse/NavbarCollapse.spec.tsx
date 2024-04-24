import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarCollapse from './NavbarCollapse';

// Describe block for NavbarCollapse component tests
describe('NavbarCollapse component', () => {
  // Test case 1: Renders the component with required props
  it('should render NavbarCollapse component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-navbar-collapse',
    };

    // Act
    const { getByTestId } = render(
      <Navbar>
        <NavbarCollapse {...mockProps} />
      </Navbar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar-collapse')).toBeInTheDocument();
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
        <NavbarCollapse {...mockProps} />
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-collapse'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
