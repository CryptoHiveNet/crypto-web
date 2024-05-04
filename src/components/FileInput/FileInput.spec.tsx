import { fireEvent, render, waitFor } from '@testing-library/react';

import FileInput from './FileInput';

describe('FileInput component unit tests', () => {
    const onClickMock = jest.fn();
    const fileInputMockProps = {
        id: 'test-id',
        testId: 'test-file-input',
        onClick: onClickMock,
        multiple: true,
    };
    const { getByTestId } = render(<FileInput {...fileInputMockProps} />);
    it('should render FileInput component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-file-input')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-file-input'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render with multiple', () => {
        waitFor(() => {
            expect(getByTestId('test-file-input')).toHaveAttribute('multiple');
        });
    });
});
