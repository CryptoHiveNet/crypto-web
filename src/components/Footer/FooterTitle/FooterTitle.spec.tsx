import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterTitle from './FooterTitle';

describe('FooterTitle component', () => {
  it('should render FooterTitle component with required props', () => {
    const mockProps = {
      id: 'test-id',
      title: 'Footer Title',
      testId: 'test-footer-title',
    };
    const { getByTestId } = render(<FooterTitle {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-title')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterTitle {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-title'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render title', () => {
    const mockTitle = 'Footer Title';
    const { getByText } = render(<FooterTitle title={mockTitle} />);
    waitFor(() => {
      expect(getByText('Footer Title')).toBeInTheDocument();
    });
  });
});
