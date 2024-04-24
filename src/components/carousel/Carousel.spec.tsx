import { fireEvent, render, waitFor } from '@testing-library/react';

import Carousel from './Carousel';

// Describe block for Carousel component tests
describe('Carousel component', () => {
  // Test case 1: Renders the component with required props
  it('should render Carousel component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      slide: true,
      slideInterval: 5000,
      testId: 'test-carousel',
    };

    // Act
    const { getByTestId } = render(<Carousel {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-carousel')).toBeInTheDocument();
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
    const { getByTestId } = render(<Carousel {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-carousel'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = (
      <>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </>
    );

    // Act
    const { getByText } = render(<Carousel>{mockChildren}</Carousel>);

    // Assert
    waitFor(() => {
      expect(getByText('Slide 1')).toBeInTheDocument();
      expect(getByText('Slide 2')).toBeInTheDocument();
    });
  });
});
