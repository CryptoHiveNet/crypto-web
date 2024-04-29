import { fireEvent, render, waitFor } from '@testing-library/react';

import TextBox from './TextBox';

describe('TextBox component', () => {
  it('should render TextBox component with required props', () => {
    const mockProps = {
      id: 'test-id',
      type: 'text',
      labelText: 'Test Label',
      placeholder: 'Test Placeholder',
      testId: 'test-textbox',
    };
    const { getByTestId, getByLabelText } = render(<TextBox {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-textbox')).toBeInTheDocument();
      expect(getByLabelText('Test Label')).toBeInTheDocument();
      expect(getByLabelText('Test Placeholder')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<TextBox {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('textbox'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render with provided value', () => {
    const mockProps = {
      value: 'Test Value',
    };
    const { getByDisplayValue } = render(<TextBox {...mockProps} />);
    waitFor(() => {
      expect(getByDisplayValue('Test Value')).toBeInTheDocument();
    });
  });
});
