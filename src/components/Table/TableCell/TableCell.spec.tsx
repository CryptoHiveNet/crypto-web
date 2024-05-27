import { fireEvent, render, screen } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from '../TableRow/TableRow';
import TableCell from './TableCell';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table-cell',
    className: 'custom-table-cell',
    testId: 'test-table-cell',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TableCell component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TableCell component with required props', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell {...mockProps}>Table Cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );
        const tableCellComponent = screen.getByTestId('test-table-cell');
        expect(tableCellComponent).toBeInTheDocument();
        expect(tableCellComponent).toHaveClass('custom-table-cell');
        expect(tableCellComponent).toHaveTextContent('Table Cell');
    });

    it('should handle onClick event', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell {...mockProps}>Table Cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );
        fireEvent.click(screen.getByTestId('test-table-cell'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell {...mockProps}>Table Cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-table-cell'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell {...mockProps}>Table Cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-table-cell'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
