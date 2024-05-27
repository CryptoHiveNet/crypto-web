import { fireEvent, render, screen } from '@testing-library/react';

import Table from '../Table';
import TableHead from '../TableHead/TableHead';
import TableHeadCell from './TableHeadCell';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table-head-cell',
    className: 'custom-table-head-cell',
    testId: 'test-table-head-cell',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TableHeadCell component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TableHeadCell component with required props', () => {
        render(
            <Table>
                <TableHead>
                    <TableHeadCell {...mockProps} />
                </TableHead>
            </Table>,
        );
        const tableHeadCellComponent = screen.getByTestId(
            'test-table-head-cell',
        );
        expect(tableHeadCellComponent).toBeInTheDocument();
        expect(tableHeadCellComponent).toHaveClass('custom-table-head-cell');
    });

    it('should handle onClick event', () => {
        render(
            <Table>
                <TableHead>
                    <TableHeadCell {...mockProps} />
                </TableHead>
            </Table>,
        );
        fireEvent.click(screen.getByTestId('test-table-head-cell'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Table>
                <TableHead>
                    <TableHeadCell {...mockProps} />
                </TableHead>
            </Table>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-table-head-cell'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Table>
                <TableHead>
                    <TableHeadCell {...mockProps} />
                </TableHead>
            </Table>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-table-head-cell'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
