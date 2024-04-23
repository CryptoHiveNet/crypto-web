import { fireEvent, render, waitFor } from '@testing-library/react';

import BannerCollapseButton from './BannerCollapseButton';

// Describe block for BannerCollapseButton component tests
describe('BannerCollapseButton component', () => {
  // Test case 1: Renders the component with required props
  it('should render BannerCollapseButton component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      color: 'red',
      testId: 'test-banner-collapse-button',
    };

    // Act
    const { getByTestId } = render(<BannerCollapseButton {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-banner-collapse-button')).toBeInTheDocument();
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
    const { getByTestId } = render(<BannerCollapseButton {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-banner-collapse-button'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = <div>Test Children</div>;

    // Act
    const { getByText } = render(
      <BannerCollapseButton>{mockChildren}</BannerCollapseButton>,
    );

    // Assert
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
