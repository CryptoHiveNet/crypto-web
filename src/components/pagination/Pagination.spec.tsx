import { fireEvent, render, waitFor } from '@testing-library/react';

import Pagination from './Pagination';

// Describe block for Pagination component tests
describe('Pagination component', () => {
  // Test case 1: Renders the component with required props
  it('should render Pagination component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      currentPage: 1,
      totalPages: 10,
      onPageChange: jest.fn(),
      testId: 'test-pagination',
    };

    // Act
    const { getByTestId } = render(<Pagination {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-pagination')).toBeInTheDocument();
    });
  });

  // Test case 2: Handles onPageChange event
  it('should handle onPageChange event', () => {
    // Arrange
    const onPageChangeMock = jest.fn();
    const mockProps = {
      currentPage: 1,
      totalPages: 10,
      onPageChange: onPageChangeMock,
    };

    // Act
    const { getByTestId } = render(<Pagination {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('pagination-next'));

      // Assert
      expect(onPageChangeMock).toHaveBeenCalled();
    });
  });
});
