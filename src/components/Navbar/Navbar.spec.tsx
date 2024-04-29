import { fireEvent, render, waitFor } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render Navbar component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-navbar',
    };
    const { getByTestId } = render(<Navbar {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-navbar')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<Navbar {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-navbar'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render fluid and rounded props', () => {
    const mockFluid = true;
    const mockRounded = false;
    const { getByTestId } = render(
      <Navbar
        fluid={mockFluid}
        rounded={mockRounded}
      />,
    );
    waitFor(() => {
      expect(getByTestId('test-navbar')).toHaveClass('fluid');
      expect(getByTestId('test-navbar')).not.toHaveClass('rounded');
    });
  });
});
