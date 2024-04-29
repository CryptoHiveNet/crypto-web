import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarGroup from './AvatarGroup';

describe('AvatarGroup component', () => {
  it('should render AvatarGroup component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-avatar-group',
    };

    const { getByTestId } = render(<AvatarGroup {...mockProps} />);

    waitFor(() => {
      expect(getByTestId('test-avatar-group')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<AvatarGroup {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-avatar-group'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = (
      <div>
        <span>Child 1</span>
        <span>Child 2</span>
      </div>
    );
    const { getByText } = render(<AvatarGroup>{mockChildren}</AvatarGroup>);
    waitFor(() => {
      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();
    });
  });
});
