import { fireEvent, render, screen } from '@testing-library/react';

import Table from '../Table';
import TableRow from './TableRow';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table-row',
    className: 'custom-table-row',
    testId: 'test-table-row',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TableRow component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TableRow component with required props', () => {
        render(
            <Table>
                <TableRow {...mockProps} />
            </Table>,
        );
        const tableRowComponent = screen.getByTestId('test-table-row');
        expect(tableRowComponent).toBeInTheDocument();
        expect(tableRowComponent).toHaveClass('custom-table-row');
    });

    it('should handle onClick event', () => {
        render(
            <Table>
                <TableRow {...mockProps} />
            </Table>,
        );
        fireEvent.click(screen.getByTestId('test-table-row'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Table>
                <TableRow {...mockProps} />
            </Table>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-table-row'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Table>
                <TableRow {...mockProps} />
            </Table>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-table-row'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
