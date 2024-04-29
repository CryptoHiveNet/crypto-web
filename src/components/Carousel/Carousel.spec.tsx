import { fireEvent, render, waitFor } from '@testing-library/react';

import Carousel from './Carousel';

describe('Carousel component', () => {
  it('should render Carousel component with required props', () => {
    const mockProps = {
      id: 'test-id',
      slide: true,
      slideInterval: 5000,
      testId: 'test-carousel',
    };
    const { getByTestId } = render(<Carousel {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-carousel')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<Carousel {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-carousel'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = (
      <>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </>
    );
    const { getByText } = render(<Carousel>{mockChildren}</Carousel>);
    waitFor(() => {
      expect(getByText('Slide 1')).toBeInTheDocument();
      expect(getByText('Slide 2')).toBeInTheDocument();
    });
  });
});
