import { fireEvent, render, screen } from '@testing-library/react';

import ListGroupContainer from './ListGroupContainer';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    testId: 'test-list-group-container',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};
const children = 'Test Children';
describe('ListGroupContainer component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render ListGroupContainer component with required props', () => {
        render(
            <ListGroupContainer {...mockProps}>{children}</ListGroupContainer>,
        );
        expect(
            screen.getByTestId('test-list-group-container'),
        ).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(
            <ListGroupContainer {...mockProps}>{children}</ListGroupContainer>,
        );
        fireEvent.click(screen.getByTestId('test-list-group-container'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(
            <ListGroupContainer {...mockProps}>{children}</ListGroupContainer>,
        );
        expect(screen.getByText('Test Children')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
        render(
            <ListGroupContainer {...mockProps}>{children}</ListGroupContainer>,
        );
        expect(screen.getByTestId('test-list-group-container')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(
            <ListGroupContainer {...mockProps}>{children}</ListGroupContainer>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-list-group-container'));
        fireEvent.mouseLeave(screen.getByTestId('test-list-group-container'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
