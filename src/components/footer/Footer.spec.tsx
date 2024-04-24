import { fireEvent, render, waitFor } from '@testing-library/react';

import Footer from './Footer';

// Describe block for Footer component tests
describe('Footer component', () => {
  // Test case 1: Renders the component with required props
  it('should render Footer component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      container: true,
      bgDark: false,
      testId: 'test-footer',
    };

    // Act
    const { getByTestId } = render(<Footer {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer')).toBeInTheDocument();
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
    const { getByTestId } = render(<Footer {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = (
      <>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
      </>
    );

    // Act
    const { getByText } = render(<Footer>{mockChildren}</Footer>);

    // Assert
    waitFor(() => {
      expect(getByText('Contact Us')).toBeInTheDocument();
      expect(getByText('Privacy Policy')).toBeInTheDocument();
    });
  });
});
