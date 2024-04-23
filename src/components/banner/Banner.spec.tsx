import { fireEvent, render, waitFor } from '@testing-library/react';

import Banner from './Banner';

// Describe block for Banner component tests
describe('Banner component', () => {
  // Test case 1: Renders the component with required props
  it('should render Banner component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      testId: 'test-banner',
    };

    // Act
    const { getByTestId } = render(<Banner {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-banner')).toBeInTheDocument();
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
    const { getByTestId } = render(<Banner {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-banner'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = <div>Test Children</div>;

    // Act
    const { getByText } = render(<Banner>{mockChildren}</Banner>);

    // Assert
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
