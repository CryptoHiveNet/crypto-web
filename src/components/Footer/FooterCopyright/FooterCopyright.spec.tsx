import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterCopyright from './FooterCopyright';

describe('FooterCopyright component', () => {
  it('should render FooterCopyright component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#',
      by: 'John Doe',
      year: '2024',
      testId: 'test-footer-copyright',
    };
    const { getByTestId } = render(<FooterCopyright {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-copyright')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterCopyright {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-copyright'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render by and year', () => {
    const mockBy = 'John Doe';
    const mockYear = '2024';
    const { getByText } = render(
      <FooterCopyright
        href='#'
        by={mockBy}
        year={mockYear}
      />,
    );
    waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('2024')).toBeInTheDocument();
    });
  });
});
