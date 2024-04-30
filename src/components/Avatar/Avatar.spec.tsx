import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar component unit tests', () => {
  it('should render Avatar component with required props', () => {
    const mockProps = {
      id: 'test-id',
      img: 'avatar.jpg',
      alt: 'Avatar Image',
      testId: 'test-avatar',
    };

    const { getByTestId } = render(<Avatar {...mockProps} />);

    waitFor(() => {
      expect(getByTestId('test-avatar')).toBeInTheDocument();
    });
  });

  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };

    const { getByTestId } = render(<Avatar {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  it('should render children', () => {
    const mockChildren = <div>{test_children_text}</div>;
    const { getByText } = render(<Avatar>{mockChildren}</Avatar>);
    waitFor(() => {
      expect(getByText(test_children_text)).toBeInTheDocument();
    });
  });
});
