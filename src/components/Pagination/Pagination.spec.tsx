import { fireEvent, render, waitFor } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination component', () => {
  it('should render Pagination component with required props', () => {
    const mockProps = {
      id: 'test-id',
      currentPage: 1,
      totalPages: 10,
      onPageChange: jest.fn(),
      testId: 'test-pagination',
    };
    const { getByTestId } = render(<Pagination {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-pagination')).toBeInTheDocument();
    });
  });
  it('should handle onPageChange event', () => {
    const onPageChangeMock = jest.fn();
    const mockProps = {
      currentPage: 1,
      totalPages: 10,
      onPageChange: onPageChangeMock,
    };
    const { getByTestId } = render(<Pagination {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('pagination-next'));
      expect(onPageChangeMock).toHaveBeenCalled();
    });
  });
});
