import { fireEvent, render, screen } from '@testing-library/react';

import ListGroupItem from './ListGroupItem';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    testId: 'test-list-group-item',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};
const children = 'Test Children';

describe('ListGroupItem component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render ListGroupItem component with required props', () => {
        render(<ListGroupItem {...mockProps}>{children}</ListGroupItem>);
        expect(screen.getByTestId('test-list-group-item')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<ListGroupItem {...mockProps}>{children}</ListGroupItem>);
        fireEvent.click(screen.getByTestId('test-list-group-item'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<ListGroupItem {...mockProps}>{children}</ListGroupItem>);
        expect(screen.getByText('Test Children')).toBeInTheDocument();
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<ListGroupItem {...mockProps}>{children}</ListGroupItem>);
        fireEvent.mouseEnter(screen.getByTestId('test-list-group-item'));
        fireEvent.mouseLeave(screen.getByTestId('test-list-group-item'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
