import { fireEvent, render, waitFor } from '@testing-library/react';

import TextBox from './TextBox';

describe('TextBox component unit tests', () => {
  const onClickMock = jest.fn();
  const mockProps = {
    value: 'Test Value',
    id: 'test-id',
    type: 'text',
    labelText: 'Test Label',
    placeholder: 'Test Placeholder',
    testId: 'test-textbox',
    onClick: onClickMock,
  };
  const { getByTestId, getByLabelText, getByDisplayValue } = render(
    <TextBox {...mockProps} />,
  );
  it('should render TextBox component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-textbox')).toBeInTheDocument();
      expect(getByLabelText('Test Label')).toBeInTheDocument();
      expect(getByLabelText('Test Placeholder')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    waitFor(() => {
      fireEvent.click(getByTestId('textbox'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render with provided value', () => {
    waitFor(() => {
      expect(getByDisplayValue('Test Value')).toBeInTheDocument();
    });
  });
});
