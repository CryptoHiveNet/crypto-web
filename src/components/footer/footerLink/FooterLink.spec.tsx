import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLink from './FooterLink';

// Describe block for FooterLink component tests
describe('FooterLink component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterLink component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#home',
      testId: 'test-footer-link',
    };

    // Act
    const { getByTestId } = render(
      <FooterLink {...mockProps}>Home</FooterLink>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-link')).toBeInTheDocument();
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
      <FooterLink {...mockProps}>Home</FooterLink>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-link'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = 'Home';

    // Act
    const { getByText } = render(
      <FooterLink href='#home'>{mockChildren}</FooterLink>,
    );

    // Assert
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
