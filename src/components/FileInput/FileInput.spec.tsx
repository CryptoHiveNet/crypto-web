import { fireEvent, render, waitFor } from '@testing-library/react';

import FileInput from './FileInput';

describe('FileInput component unit tests', () => {
    const onClickMock = jest.fn();
    const fileInputMockProps = {
        id: 'test-id',
        name: 'test-name', // Adding the required name prop
        testId: 'test-file-input',
        onClick: onClickMock,
        multiple: true,
    };

    it('should render FileInput component with required props', () => {
        const { getByTestId } = render(<FileInput {...fileInputMockProps} />);
        waitFor(() => {
            expect(getByTestId('test-file-input')).toBeInTheDocument();
            expect(getByTestId('test-file-input')).toHaveAttribute(
                'name',
                'test-name',
            );
        });
    });

    it('should handle onClick event', () => {
        const { getByTestId } = render(<FileInput {...fileInputMockProps} />);
        waitFor(() => {
            fireEvent.click(getByTestId('test-file-input'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });

    it('should render with multiple', () => {
        const { getByTestId } = render(<FileInput {...fileInputMockProps} />);
        waitFor(() => {
            expect(getByTestId('test-file-input')).toHaveAttribute('multiple');
        });
    });
});
