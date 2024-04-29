import { fireEvent, render, waitFor } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
  it('should render Footer component with required props', () => {
    const mockProps = {
      id: 'test-id',
      container: true,
      bgDark: false,
      testId: 'test-footer',
    };
    const { getByTestId } = render(<Footer {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<Footer {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = (
      <>
        <div>Contact Us</div>
        <div>Privacy Policy</div>
      </>
    );
    const { getByText } = render(<Footer>{mockChildren}</Footer>);
    waitFor(() => {
      expect(getByText('Contact Us')).toBeInTheDocument();
      expect(getByText('Privacy Policy')).toBeInTheDocument();
    });
  });
});
