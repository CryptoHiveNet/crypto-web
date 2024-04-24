import { fireEvent, render, waitFor } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination component unit tests', () => {
    const mockProps = {
        id: 'test-id',
        currentPage: 1,
        totalPages: 10,
        onPageChange: jest.fn(),
        testId: 'test-pagination',
    };
    const { getByTestId } = render(<Pagination {...mockProps} />);
    it('should render Pagination component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-pagination')).toBeInTheDocument();
        });
    });
    it('should handle onPageChange event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('pagination-next'));
            expect(onPageChangeMock).toHaveBeenCalled();
        });
    });
});
