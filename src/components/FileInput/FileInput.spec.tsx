import { fireEvent, render, waitFor } from '@testing-library/react';

import FileInput from './FileInput';

describe('FileInput component', () => {
  it('should render FileInput component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-file-input',
    };
    const { getByTestId } = render(<FileInput {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-file-input')).toBeInTheDocument();
    });
  });
  it('should handle onClick event', () => {
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };
    const { getByTestId } = render(<FileInput {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-file-input'));
      expect(onClickMock).toHaveBeenCalled();
    });
  });
  it('should render with multiple', () => {
    const mockProps = {
      multiple: true,
    };
    const { getByTestId } = render(<FileInput {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-file-input')).toHaveAttribute('multiple');
    });
  });
});
