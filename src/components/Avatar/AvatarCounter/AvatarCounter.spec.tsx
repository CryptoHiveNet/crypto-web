import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarCounter from './AvatarCounter';

describe('AvatarCounter component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        total: 5,
        testId: 'test-avatar-counter',
        onClick: onClickMock,
    };
    it('should render AvatarCounter component with required props', () => {
        const { getByTestId } = render(<AvatarCounter {...mockProps} />);
        waitFor(() => {
            expect(getByTestId('test-avatar-counter')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        const { getByTestId } = render(<AvatarCounter {...mockProps} />);
        waitFor(() => {
            fireEvent.click(getByTestId('test-avatar-counter'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
