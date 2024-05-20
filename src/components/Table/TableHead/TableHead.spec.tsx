import { fireEvent, render, screen } from '@testing-library/react';

import Table from '../Table';
import TableHead from './TableHead';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table-head',
    className: 'custom-table-head',
    testId: 'test-table-head',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TableHead component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TableHead component with required props', () => {
        render(
            <Table>
                <TableHead {...mockProps}>Table Head</TableHead>
            </Table>,
        );
        const tableHeadComponent = screen.getByTestId('test-table-head');
        expect(tableHeadComponent).toBeInTheDocument();
        expect(tableHeadComponent).toHaveClass('custom-table-head');
        expect(tableHeadComponent).toHaveTextContent('Table Head');
    });

    it('should handle onClick event', () => {
        render(
            <Table>
                <TableHead {...mockProps}>Table Head</TableHead>
            </Table>,
        );
        fireEvent.click(screen.getByTestId('test-table-head'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Table>
                <TableHead {...mockProps}>Table Head</TableHead>
            </Table>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-table-head'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Table>
                <TableHead {...mockProps}>Table Head</TableHead>
            </Table>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-table-head'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
