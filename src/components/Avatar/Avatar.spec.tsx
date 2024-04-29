import { fireEvent, render, waitFor } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar component', () => {
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
    const mockChildren = <div>Test Children</div>;
    const { getByText } = render(<Avatar>{mockChildren}</Avatar>);
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
