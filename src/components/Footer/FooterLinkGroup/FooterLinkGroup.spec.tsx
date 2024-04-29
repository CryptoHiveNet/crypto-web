import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLinkGroup from './FooterLinkGroup';

describe('FooterLinkGroup component', () => {
  it('should render FooterLinkGroup component with required props', () => {
    const mockProps = {
      id: 'test-id',
      col: 3,
      testId: 'test-footer-link-group',
    };
    const { getByTestId } = render(<FooterLinkGroup {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-footer-link-group')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterLinkGroup {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-link-group'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render children', () => {
    const mockChildren = (
      <>
        <div>Group 1</div>
        <div>Group 2</div>
      </>
    );
    const { getByText } = render(
      <FooterLinkGroup col={3}>{mockChildren}</FooterLinkGroup>,
    );
    waitFor(() => {
      expect(getByText('Group 1')).toBeInTheDocument();
      expect(getByText('Group 2')).toBeInTheDocument();
    });
  });
});
