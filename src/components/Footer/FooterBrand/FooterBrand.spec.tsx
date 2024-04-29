import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterBrand from './FooterBrand';

describe('FooterBrand component', () => {
  it('should render FooterBrand component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#',
      src: 'logo.png',
      alt: 'Logo',
      name: 'My Brand',
      testId: 'test-footer-brand',
    };
    const { getByTestId } = render(<FooterBrand {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-brand')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterBrand {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-brand'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render href, src, alt, and name', () => {
    const mockHref = '#';
    const mockSrc = 'logo.png';
    const mockAlt = 'Logo';
    const mockName = 'My Brand';
    const { getByTestId } = render(
      <FooterBrand
        href={mockHref}
        src={mockSrc}
        alt={mockAlt}
        name={mockName}
      />,
    );
    waitFor(() => {
      expect(getByTestId('test-footer-brand')).toHaveAttribute('href', '#');
      expect(getByTestId('test-footer-brand')).toHaveAttribute(
        'src',
        'logo.png',
      );
      expect(getByTestId('test-footer-brand')).toHaveAttribute('alt', 'Logo');
      expect(getByTestId('test-footer-brand')).toHaveTextContent('My Brand');
    });
  });
});
