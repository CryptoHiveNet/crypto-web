import { fireEvent, render, waitFor } from '@testing-library/react';

import ListGroupItem from './ListGroupItem';

describe('ListGroupItem component', () => {
  it('should render ListGroupItem component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-list-group-item',
    };
    const { getByTestId } = render(<ListGroupItem {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-list-group-item')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<ListGroupItem {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-list-group-item'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = <div>Test Children</div>;
    const { getByText } = render(<ListGroupItem>{mockChildren}</ListGroupItem>);
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
