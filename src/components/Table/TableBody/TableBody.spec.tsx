import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from './TableBody';

const mockProps = {
    id: 'test-table-body',
    className: 'custom-table-body',
    testId: 'test-table-body',
};
describe('TableBody component unit tests', () => {
    it('should render TableBody component with required props', () => {
        const { getByTestId } = render(
            <Table>
                <TableBody {...mockProps} />
            </Table>,
        );
        waitFor(() => {
            const tableBodyComponent = getByTestId('test-table-body');
            expect(tableBodyComponent).toBeInTheDocument();
            expect(tableBodyComponent).toHaveClass('custom-table-body');
        });
    });
});
