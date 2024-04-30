import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Banner from './Banner';

describe('Banner component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    testId: 'test-banner',
    onClick: onClickMock,
  };
  const mockChildren = <div>{test_children_text}</div>;
  const { getByTestId, getByText } = render(
    <Banner {...mockProps}>{mockChildren}</Banner>,
  );
  it('should render Banner component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-banner')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-banner'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
