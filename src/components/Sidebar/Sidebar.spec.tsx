import { fireEvent, render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-sidebar',
    ariaLabel: 'Test Sidebar',
    className: 'custom-sidebar',
    testId: 'test-sidebar',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Sidebar component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Sidebar component with required props', () => {
        render(<Sidebar {...mockProps} />);
        const sidebarComponent = screen.getByTestId('test-sidebar');
        expect(sidebarComponent).toBeInTheDocument();
        expect(sidebarComponent).toHaveClass('custom-sidebar');
    });

    it('should handle onClick event', () => {
        render(<Sidebar {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-sidebar'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Sidebar {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-sidebar'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Sidebar {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-sidebar'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
