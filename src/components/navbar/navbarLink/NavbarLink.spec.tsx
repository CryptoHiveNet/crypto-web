import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarLink from './NavbarLink';

// Describe block for NavbarLink component tests
describe('NavbarLink component', () => {
  // Test case 1: Renders the component with required props
  it('should render NavbarLink component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#',
      testId: 'test-navbar-link',
    };

    // Act
    const { getByTestId } = render(
      <Navbar>
        <NavbarLink {...mockProps}>Link</NavbarLink>
      </Navbar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar-link')).toBeInTheDocument();
      expect(getByTestId('test-navbar-link')).toHaveAttribute('href', '#');
      expect(getByTestId('test-navbar-link')).toHaveTextContent('Link');
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
        <NavbarLink {...mockProps}>Link</NavbarLink>
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-link'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
