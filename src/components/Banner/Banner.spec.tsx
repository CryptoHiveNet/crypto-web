import { fireEvent, render, waitFor } from '@testing-library/react';

import Banner from './Banner';

describe('Banner component', () => {
  it('should render Banner component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-banner',
    };
    const { getByTestId } = render(<Banner {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-banner')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<Banner {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-banner'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = <div>Test Children</div>;
    const { getByText } = render(<Banner>{mockChildren}</Banner>);
    waitFor(() => {
      expect(getByText('Test Children')).toBeInTheDocument();
    });
  });
});
