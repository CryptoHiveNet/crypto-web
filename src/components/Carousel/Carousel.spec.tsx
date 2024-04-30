import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Carousel from './Carousel';

describe('Carousel component', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    slide: true,
    slideInterval: 5000,
    testId: 'test-carousel',
    onClick: onClickMock,
  };
  const mockChildren = (
    <>
      <div>{test_children_text} 1</div>
      <div>{test_children_text} 2</div>
    </>
  );
  const { getByTestId, getByText } = render(
    <Carousel {...mockProps}>{mockChildren}</Carousel>,
  );
  it('should render Carousel component with required props', () => {
    expect(getByTestId('test-carousel')).toBeInTheDocument();
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-carousel'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    waitFor(() => {
      expect(getByText(`${test_children_text} 1`)).toBeInTheDocument();
      expect(getByText(`${test_children_text} 2`)).toBeInTheDocument();
    });
  });
});
