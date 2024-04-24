import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterDivider from './FooterDivider';

// Describe block for FooterDivider component tests
describe('FooterDivider component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterDivider component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-footer-divider',
    };

    // Act
    const { getByTestId } = render(<FooterDivider {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-divider')).toBeInTheDocument();
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
    const { getByTestId } = render(<FooterDivider {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-divider'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
