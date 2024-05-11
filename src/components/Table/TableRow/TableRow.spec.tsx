import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from './TableRow';

const mockProps = {
    id: 'test-table-row',
    className: 'custom-table-row',
    testId: 'test-table-row',
};
describe('TableRow component unit tests', () => {
    it('should render TableRow component with required props', () => {
        render(
            <Table>
                <TableBody>
                    <TableRow {...mockProps} />
                </TableBody>
            </Table>,
        );
        waitFor(() => {
            const tableRowComponent = screen.getByTestId('test-table-row');
            expect(tableRowComponent).toBeInTheDocument();
            expect(tableRowComponent).toHaveClass('custom-table-row');
        });
    });
});
