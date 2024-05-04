import { test_children_text } from '@/types/__mocks__/textMock';
import { fireEvent, render, waitFor } from '@testing-library/react';

import AvatarGroup from './AvatarGroup';

describe('AvatarGroup component unit tests', () => {
    const mockChildren = (
        <div>
            <span>{test_children_text} 1</span>
            <span>{test_children_text} 2</span>
        </div>
    );
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-avatar-group',
        onClick: onClickMock,
    };
    it('should render AvatarGroup component with required props', () => {
        const { getByTestId } = render(<AvatarGroup {...mockProps} />);

        waitFor(() => {
            expect(getByTestId('test-avatar-group')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        const { getByTestId } = render(<AvatarGroup {...mockProps} />);
        waitFor(() => {
            fireEvent.click(getByTestId('test-avatar-group'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render children', () => {
        const { getByText } = render(<AvatarGroup>{mockChildren}</AvatarGroup>);
        waitFor(() => {
            expect(getByText(`${test_children_text} 1`)).toBeInTheDocument();
            expect(getByText(`${test_children_text} 2`)).toBeInTheDocument();
        });
    });
});
