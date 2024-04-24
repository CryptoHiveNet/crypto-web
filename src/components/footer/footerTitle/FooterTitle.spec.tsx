import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterTitle from './FooterTitle';

// Describe block for FooterTitle component tests
describe('FooterTitle component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterTitle component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      title: 'Footer Title',
      testId: 'test-footer-title',
    };

    // Act
    const { getByTestId } = render(<FooterTitle {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-title')).toBeInTheDocument();
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
    const { getByTestId } = render(<FooterTitle {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-title'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders title
  it('should render title', () => {
    // Arrange
    const mockTitle = 'Footer Title';

    // Act
    const { getByText } = render(<FooterTitle title={mockTitle} />);

    // Assert
    waitFor(() => {
      expect(getByText('Footer Title')).toBeInTheDocument();
    });
  });
});
