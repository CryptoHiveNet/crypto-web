import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarCounter from './AvatarCounter';

describe('AvatarCounter component', () => {
  it('should render AvatarCounter component with required props', () => {
    const mockProps = {
      id: 'test-id',
      total: 5,
      testId: 'test-avatar-counter',
    };
    const { getByTestId } = render(<AvatarCounter {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-avatar-counter')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<AvatarCounter {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar-counter'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
