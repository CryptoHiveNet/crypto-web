import { fireEvent, render, waitFor } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox component', () => {
  it('should render CheckBox component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-checkbox',
    };
    const { getByTestId } = render(<CheckBox {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-checkbox')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<CheckBox {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-checkbox'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render with defaultChecked', () => {
    const mockProps = {
      defaultChecked: true,
    };
    const { getByTestId } = render(<CheckBox {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-checkbox')).toBeChecked();
    });
  });
});
