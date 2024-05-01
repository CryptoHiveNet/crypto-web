import { fireEvent, render, waitFor } from '@testing-library/react';

import ListGroupItem from './ListGroupItem';

describe('ListGroupItem component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    testId: 'test-list-group-item',
    onClick: onClickMock,
  };
  const mockChildren = <div>Test Children</div>;
  const { getByTestId, getByText } = render(
    <ListGroupItem {...mockProps}>{mockChildren}</ListGroupItem>,
  );
  it('should render ListGroupItem component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-list-group-item')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-list-group-item'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
