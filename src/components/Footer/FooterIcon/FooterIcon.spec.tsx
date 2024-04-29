import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterIcon from './FooterIcon';

describe('FooterIcon component', () => {
  it('should render FooterIcon component with required props', () => {
    const mockProps = {
      id: 'test-id',
      href: '#home',
      icon: 'home',
      testId: 'test-footer-icon',
    };
    const { getByTestId } = render(<FooterIcon {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-icon')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      id: 'test-id',
      href: '#home',
      icon: 'home',
      testId: 'test-footer-icon',
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterIcon {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-icon'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render icon', () => {
    const mockIcon = 'home';
    const { getByTestId } = render(
      <FooterIcon
        href='#home'
        icon={mockIcon}
      />,
    );
    waitFor(() => {
      expect(getByTestId('test-footer-icon')).toHaveAttribute('icon', 'home');
    });
  });
});
