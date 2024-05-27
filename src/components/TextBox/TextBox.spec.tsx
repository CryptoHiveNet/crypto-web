import { HiAdjustments } from 'react-icons/hi';

import { fireEvent, render, screen } from '@testing-library/react';

import TextBox from './TextBox';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-text-box',
    type: 'text',
    sizing: 'md',
    labelText: 'Test Label',
    placeholder: 'Enter text',
    shadow: true,
    required: true,
    disabled: false,
    value: 'Initial value',
    icon: HiAdjustments,
    rightIcon: HiAdjustments,
    color: 'primary',
    helperText: 'Helper text',
    addon: 'Addon',
    testId: 'test-id-text-box',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TextBox component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TextBox component with required props', () => {
        render(<TextBox {...mockProps} />);
        const textBoxComponent = screen.getByTestId('test-id-text-box');
        expect(textBoxComponent).toBeInTheDocument();
        expect(textBoxComponent).toHaveAttribute('placeholder', 'Enter text');
        expect(textBoxComponent).toHaveAttribute('value', 'Initial value');
    });

    it('should handle onClick event', () => {
        render(<TextBox {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-id-text-box'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<TextBox {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-id-text-box'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<TextBox {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-id-text-box'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should display helper text and addon', () => {
        render(<TextBox {...mockProps} />);
        expect(screen.getByText('Helper text')).toBeInTheDocument();
        expect(screen.getByText('Addon')).toBeInTheDocument();
    });
});
