import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterDivider from './FooterDivider';

describe('FooterDivider component', () => {
  it('should render FooterDivider component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-footer-divider',
    };
    const { getByTestId } = render(<FooterDivider {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-divider')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterDivider {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-divider'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
