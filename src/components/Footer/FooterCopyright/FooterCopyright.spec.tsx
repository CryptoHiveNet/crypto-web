import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterCopyright from './FooterCopyright';

describe('FooterCopyright component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    id: 'test-id',
    href: '#',
    by: 'John Doe',
    year: '2024',
    testId: 'test-footer-copyright',
    onClick: onClickMock,
  };
  const { getByTestId, getByText } = render(<FooterCopyright {...mockProps} />);
  it('should render FooterCopyright component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-footer-copyright')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-copyright'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render by and year', () => {
    waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('2024')).toBeInTheDocument();
    });
  });
});
