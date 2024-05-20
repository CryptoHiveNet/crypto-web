import { fireEvent, render, screen } from '@testing-library/react';

import Table from './Table';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table',
    striped: true,
    hoverable: true,
    className: 'custom-table',
    testId: 'test-table',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Table component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Table component with required props', () => {
        render(<Table {...mockProps} />);
        const tableComponent = screen.getByTestId('test-table');
        expect(tableComponent).toBeInTheDocument();
        expect(tableComponent).toHaveClass('custom-table');
    });

    it('should handle onClick event', () => {
        render(<Table {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-table'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Table {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-table'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Table {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-table'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
