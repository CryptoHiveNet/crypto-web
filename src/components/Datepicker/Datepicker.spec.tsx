import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Datepicker from './Datepicker';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    language: 'en',
    labelTodayButton: 'Today',
    labelClearButton: 'Clear',
    minDate: new Date('2023-01-01'),
    maxDate: new Date('2023-12-31'),
    weekStart: 1,
    autoHide: true,
    title: 'Datepicker',
    className: 'custom-class',
    testId: 'test-datepicker',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Datepicker component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Datepicker component with required props', () => {
        render(<Datepicker {...mockProps} />);
        const datepickerComponent = screen.getByTestId(mockProps.testId);

        expect(datepickerComponent).toBeInTheDocument();
        expect(datepickerComponent).toHaveAttribute('id', mockProps.id);
    });
    it('should render Datepicker component with true inline', () => {
        render(
            <Datepicker
                {...mockProps}
                inline={true}
            />,
        );
        expect(
            screen.getByText(mockProps.labelClearButton),
        ).toBeInTheDocument();
        expect(
            screen.getByText(mockProps.labelTodayButton),
        ).toBeInTheDocument();

        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    });
    it('should handle onClick event', async () => {
        render(<Datepicker {...mockProps} />);
        const datepickerComponent = screen.getByTestId(mockProps.testId);

        fireEvent.click(datepickerComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Datepicker {...mockProps} />);
        const datepickerComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseEnter(datepickerComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Datepicker {...mockProps} />);
        const datepickerComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseLeave(datepickerComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
