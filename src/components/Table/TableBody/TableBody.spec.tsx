import { fireEvent, render, screen } from '@testing-library/react';

import Table from '../Table';
import TableBody from './TableBody';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-table-body',
    className: 'custom-table-body',
    testId: 'test-table-body',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TableBody component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TableBody component with required props', () => {
        render(
            <Table>
                <TableBody {...mockProps}>Table Body</TableBody>
            </Table>,
        );
        const tableBodyComponent = screen.getByTestId('test-table-body');
        expect(tableBodyComponent).toBeInTheDocument();
        expect(tableBodyComponent).toHaveClass('custom-table-body');
        expect(tableBodyComponent).toHaveTextContent('Table Body');
    });

    it('should handle onClick event', () => {
        render(
            <Table>
                <TableBody {...mockProps}>Table Body</TableBody>
            </Table>,
        );
        fireEvent.click(screen.getByTestId('test-table-body'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Table>
                <TableBody {...mockProps}>Table Body</TableBody>
            </Table>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-table-body'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Table>
                <TableBody {...mockProps}>Table Body</TableBody>
            </Table>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-table-body'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
