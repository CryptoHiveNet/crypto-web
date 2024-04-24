import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from '../Navbar';
import NavbarBrand from './NavbarBrand';

// Describe block for NavbarBrand component tests
describe('NavbarBrand component', () => {
  // Test case 1: Renders the component with required props
  it('should render NavbarBrand component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#',
      testId: 'test-navbar-brand',
    };

    // Act
    const { getByTestId } = render(
      <Navbar>
        <NavbarBrand {...mockProps}>Brand</NavbarBrand>
      </Navbar>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar-brand')).toBeInTheDocument();
      expect(getByTestId('test-navbar-brand')).toHaveAttribute('href', '#');
      expect(getByTestId('test-navbar-brand')).toHaveTextContent('Brand');
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
        <NavbarBrand {...mockProps}>Brand</NavbarBrand>
      </Navbar>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar-brand'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
