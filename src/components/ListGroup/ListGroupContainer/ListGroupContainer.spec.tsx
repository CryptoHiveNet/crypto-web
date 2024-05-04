import { fireEvent, render, waitFor } from '@testing-library/react';

import ListGroupContainer from './ListGroupContainer';

describe('ListGroupContainer component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-list-group-container',
        onClick: onClickMock,
    };
    const mockChildren = <div>Test Children</div>;
    const { getByTestId, getByText } = render(
        <ListGroupContainer {...mockProps}>{mockChildren}</ListGroupContainer>,
    );
    it('should render ListGroupContainer component with required props', () => {
        waitFor(() => {
            expect(
                getByTestId('test-list-group-container'),
            ).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-list-group-container'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        waitFor(() => {
            expect(getByText('Test Children')).toBeInTheDocument();
        });
    });
});
