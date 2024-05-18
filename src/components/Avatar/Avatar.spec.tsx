import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from './Avatar';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const mockChildren = <div>Test Children</div>;

const mockProps = {
    id: 'test-id',
    img: 'avatar.jpg',
    alt: 'Avatar Image',
    rounded: true,
    stacked: false,
    bordered: true,
    color: 'gray',
    size: 'md',
    placeholderInitials: 'AB',
    status: 'online',
    statusPosition: 'top-right',
    testId: 'test-avatar',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Avatar component unit tests', () => {
    beforeEach(() => {
        onClickMock.mockClear();
        onMouseEnterMock.mockClear();
        onMouseLeaveMock.mockClear();
    });

    it('should render Avatar component with required props', () => {
        render(<Avatar {...mockProps} />);
        const avatarComponent = screen.getByTestId('test-avatar');
        const avatarImage = screen.getByTestId('flowbite-avatar-img');
        expect(avatarComponent).toBeInTheDocument();
        expect(avatarComponent).toHaveAttribute('id', 'test-id');
        expect(avatarImage).toHaveAttribute('src', 'avatar.jpg');
        expect(avatarImage).toHaveAttribute('alt', 'Avatar Image');
        expect(avatarComponent).toHaveClass('rounded');
        expect(avatarComponent).not.toHaveClass('stacked');
        expect(avatarComponent).toHaveClass('rounded');
        expect(avatarImage).toHaveClass('ring-gray-500');
        expect(avatarImage).toHaveClass('h-10 w-10');
    });

    it('should handle onClick event', () => {
        render(<Avatar {...mockProps} />);
        const avatarComponent = screen.getByTestId('test-avatar');
        fireEvent.click(avatarComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Avatar {...mockProps} />);
        const avatarComponent = screen.getByTestId('test-avatar');
        fireEvent.mouseEnter(avatarComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Avatar {...mockProps} />);
        const avatarComponent = screen.getByTestId('test-avatar');
        fireEvent.mouseLeave(avatarComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<Avatar {...mockProps}>{mockChildren}</Avatar>);
        const childrenComponent = screen.getByText('Test Children');
        expect(childrenComponent).toBeInTheDocument();
    });
});
