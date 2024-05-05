import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableHead from '../TableHead/TableHead';
import TableHeadCell from './TableHeadCell';

const mockProps = {
    id: 'test-table-head-cell',
    className: 'custom-table-head-cell',
    testId: 'test-table-head-cell',
};
describe('TableHeadCell component unit tests', () => {
    it('should render TableHeadCell component with required props', () => {
        const { getByTestId } = render(
            <Table>
                <TableHead>
                    <TableHeadCell {...mockProps} />
                </TableHead>
            </Table>,
        );
        waitFor(() => {
            const tableHeadCellComponent = getByTestId('test-table-head-cell');
            expect(tableHeadCellComponent).toBeInTheDocument();
            expect(tableHeadCellComponent).toHaveClass(
                'custom-table-head-cell',
            );
        });
    });
});
