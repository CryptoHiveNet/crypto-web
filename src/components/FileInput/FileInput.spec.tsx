import { fireEvent, render, screen } from '@testing-library/react';

import FileInput from './FileInput';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const fileInputMockProps = {
    id: 'test-id',
    name: 'test-name',
    className: 'test-class',
    helperText: 'Select a file',
    multiple: true,
    sizing: 'lg',
    testId: 'test-file-input',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('FileInput component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FileInput component with required props', () => {
        render(<FileInput {...fileInputMockProps} />);
        const fileInput = screen.getByTestId('test-file-input');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('name', 'test-name');
    });

    it('should handle onClick event', () => {
        render(<FileInput {...fileInputMockProps} />);
        fireEvent.click(screen.getByTestId('test-file-input'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render with multiple attribute', () => {
        render(<FileInput {...fileInputMockProps} />);
        const fileInput = screen.getByTestId('test-file-input');
        expect(fileInput).toHaveAttribute('multiple');
    });

    it('should display helper text', () => {
        render(<FileInput {...fileInputMockProps} />);
        expect(screen.getByText('Select a file')).toBeInTheDocument();
    });

    it('should handle onMouseEnter event', () => {
        render(<FileInput {...fileInputMockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-file-input'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<FileInput {...fileInputMockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-file-input'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render with the correct sizing', () => {
        render(<FileInput {...fileInputMockProps} />);
        const fileInput = screen.getByTestId('test-file-input');
        expect(fileInput).toHaveClass('sm:text-base');
    });
});
