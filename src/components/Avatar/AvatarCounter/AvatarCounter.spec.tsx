import { fireEvent, render, screen } from '@testing-library/react';

import AvatarCounter from './AvatarCounter';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'test-class',
    total: 5,
    href: 'https://example.com',
    testId: 'test-avatar-counter',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('AvatarCounter component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });

    it('should render AvatarCounter component with all props', () => {
        render(<AvatarCounter {...mockProps} />);
        const avatarCounterComponent = screen.getByTestId(
            'test-avatar-counter',
        );

        expect(avatarCounterComponent).toBeInTheDocument();
        expect(avatarCounterComponent).toHaveAttribute('id', 'test-id');
        expect(avatarCounterComponent).toHaveClass('test-class');
        expect(avatarCounterComponent).toHaveAttribute(
            'href',
            'https://example.com',
        );
        expect(avatarCounterComponent).toHaveAttribute(
            'data-testid',
            'test-avatar-counter',
        );
    });

    it('should display the correct total', () => {
        render(<AvatarCounter {...mockProps} />);
        const avatarCounterComponent = screen.getByTestId(
            'test-avatar-counter',
        );

        expect(avatarCounterComponent).toHaveTextContent('5');
    });

    it('should handle onClick event', () => {
        render(<AvatarCounter {...mockProps} />);
        const avatarCounterComponent = screen.getByTestId(
            'test-avatar-counter',
        );
        fireEvent.click(avatarCounterComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<AvatarCounter {...mockProps} />);
        const avatarCounterComponent = screen.getByTestId(
            'test-avatar-counter',
        );
        fireEvent.mouseEnter(avatarCounterComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<AvatarCounter {...mockProps} />);
        const avatarCounterComponent = screen.getByTestId(
            'test-avatar-counter',
        );
        fireEvent.mouseLeave(avatarCounterComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
