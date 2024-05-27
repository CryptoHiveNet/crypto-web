import { fireEvent, render, screen } from '@testing-library/react';

import AvatarGroup from './AvatarGroup';

const mockChildren = (
    <div>
        <span>Test Children 1</span>
        <span>Test Children 2</span>
    </div>
);
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'test-class',
    testId: 'test-avatar-group',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('AvatarGroup component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });

    it('should render AvatarGroup component with required props', () => {
        render(<AvatarGroup {...mockProps} />);
        const avatarGroupComponent = screen.getByTestId('test-avatar-group');

        expect(avatarGroupComponent).toBeInTheDocument();
        expect(avatarGroupComponent).toHaveAttribute('id', 'test-id');
        expect(avatarGroupComponent).toHaveClass('test-class');
    });

    it('should handle onClick event', () => {
        render(<AvatarGroup {...mockProps} />);
        const avatarGroupComponent = screen.getByTestId('test-avatar-group');
        fireEvent.click(avatarGroupComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<AvatarGroup {...mockProps} />);
        const avatarGroupComponent = screen.getByTestId('test-avatar-group');
        fireEvent.mouseEnter(avatarGroupComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<AvatarGroup {...mockProps} />);
        const avatarGroupComponent = screen.getByTestId('test-avatar-group');
        fireEvent.mouseLeave(avatarGroupComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<AvatarGroup {...mockProps}>{mockChildren}</AvatarGroup>);
        expect(screen.getByText('Test Children 1')).toBeInTheDocument();
        expect(screen.getByText('Test Children 2')).toBeInTheDocument();
    });
});
