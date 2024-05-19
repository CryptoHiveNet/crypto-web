import { fireEvent, render, screen } from '@testing-library/react';

import CheckBox from './CheckBox';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-class',
    defaultChecked: true,
    disabled: false,
    testId: 'test-checkbox',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('CheckBox component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render CheckBox component with required props', () => {
        render(<CheckBox {...mockProps} />);
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        expect(checkBoxComponent).toBeInTheDocument();
        expect(checkBoxComponent).toHaveAttribute('id', mockProps.id);
        expect(checkBoxComponent).toHaveClass(mockProps.className);
    });

    it('should handle onClick event', () => {
        render(<CheckBox {...mockProps} />);
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        fireEvent.click(checkBoxComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render with defaultChecked', () => {
        render(<CheckBox {...mockProps} />);
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        expect(checkBoxComponent).toBeChecked();
    });

    it('should handle onMouseEnter event', () => {
        render(<CheckBox {...mockProps} />);
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseEnter(checkBoxComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<CheckBox {...mockProps} />);
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseLeave(checkBoxComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render as disabled when disabled prop is true', () => {
        render(
            <CheckBox
                {...mockProps}
                disabled={true}
            />,
        );
        const checkBoxComponent = screen.getByTestId(mockProps.testId);

        expect(checkBoxComponent).toBeDisabled();
    });
});
