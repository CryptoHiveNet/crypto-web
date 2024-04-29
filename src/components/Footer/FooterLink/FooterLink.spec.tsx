import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLink from './FooterLink';

describe('FooterLink component', () => {
  it('should render FooterLink component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#home',
      testId: 'test-footer-link',
    };
    const { getByTestId } = render(
      <FooterLink {...mockProps}>Home</FooterLink>,
    );
    waitFor(() => {
      expect(getByTestId('test-footer-link')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(
      <FooterLink {...mockProps}>Home</FooterLink>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-link'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = 'Home';
    const { getByText } = render(
      <FooterLink href='#home'>{mockChildren}</FooterLink>,
    );
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
