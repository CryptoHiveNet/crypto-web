import { render, waitFor } from '@testing-library/react';

import Table from '../Table';
import TableBody from './TableBody';

describe('TableBody component unit tests', () => {
    const mockProps = {
        id: 'test-table-body',
        className: 'custom-table-body',
        testId: 'test-table-body',
    };
    const { getByTestId } = render(
        <Table>
            <TableBody {...mockProps} />
        </Table>,
    );
    it('should render TableBody component with required props', () => {
        waitFor(() => {
            const tableBodyComponent = getByTestId('test-table-body');
            expect(tableBodyComponent).toBeInTheDocument();
            expect(tableBodyComponent).toHaveClass('custom-table-body');
        });
    });
});
