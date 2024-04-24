import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from './Navbar';

// Describe block for Navbar component tests
describe('Navbar component', () => {
  // Test case 1: Renders the component with required props
  it('should render Navbar component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-navbar',
    };

    // Act
    const { getByTestId } = render(<Navbar {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar')).toBeInTheDocument();
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
    const { getByTestId } = render(<Navbar {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders fluid and rounded props
  it('should render fluid and rounded props', () => {
    // Arrange
    const mockFluid = true;
    const mockRounded = false;

    // Act
    const { getByTestId } = render(
      <Navbar
        fluid={mockFluid}
        rounded={mockRounded}
      />,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-navbar')).toHaveClass('fluid');
      expect(getByTestId('test-navbar')).not.toHaveClass('rounded');
    });
  });
});
