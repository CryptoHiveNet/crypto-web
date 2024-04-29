import { fireEvent, render, waitFor } from '@testing-library/react';

import ListGroupContainer from './ListGroupContainer';

describe('ListGroupContainer component', () => {
  it('should render ListGroupContainer component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-list-group-container',
    };
    const { getByTestId } = render(<ListGroupContainer {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-list-group-container')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<ListGroupContainer {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-list-group-container'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = <div>Test Children</div>;
    const { getByText } = render(
      <ListGroupContainer>{mockChildren}</ListGroupContainer>,
    );
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
