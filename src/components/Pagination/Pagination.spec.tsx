import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from './Pagination';

const onPageChangeMock = jest.fn();
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-pagination',
    className: 'custom-pagination',
    currentPage: 1,
    totalPages: 10,
    onPageChange: onPageChangeMock,
    showIcons: true,
    layout: 'default',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    testId: 'test-pagination',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Pagination component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Pagination component with required props', () => {
        render(<Pagination {...mockProps} />);
        const paginationComponent = screen.getByTestId('test-pagination');
        expect(paginationComponent).toBeInTheDocument();
        expect(paginationComponent).toHaveClass('custom-pagination');
    });

    it('should handle onPageChange event', () => {
        render(<Pagination {...mockProps} />);
        fireEvent.click(screen.getByText('Next'));
        expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });

    it('should handle onClick event', () => {
        render(<Pagination {...mockProps} />);
        fireEvent.click(screen.getByText('Next'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Pagination {...mockProps} />);
        fireEvent.mouseEnter(screen.getByText('Next'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Pagination {...mockProps} />);
        fireEvent.mouseLeave(screen.getByText('Next'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
