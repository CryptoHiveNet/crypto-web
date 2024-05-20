import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../Button/Button';
import Popover from './Popover';

const onOpenChangeMock = jest.fn();
const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-popover',
    ariaLabelledby: 'popover-label',
    content: 'Popover content',
    trigger: 'click',
    open: true,
    onOpenChange: onOpenChangeMock,
    placement: 'bottom',
    arrow: true,
    className: 'custom-popover',
    testId: 'test-popover',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};
const children = <Button>Popover Trigger</Button>;
describe('Popover component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Popover component with required props', () => {
        render(<Popover {...mockProps}>{children}</Popover>);
        const popoverComponent = screen.getByTestId('test-popover');
        expect(popoverComponent).toBeInTheDocument();
        expect(popoverComponent).toHaveClass('custom-popover');
        expect(popoverComponent).toHaveAttribute(
            'aria-labelledby',
            'popover-label',
        );
    });

    it('should handle onClick event', () => {
        render(<Popover {...mockProps}>{children}</Popover>);
        fireEvent.click(screen.getByTestId('test-popover'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Popover {...mockProps}>{children}</Popover>);
        fireEvent.mouseEnter(screen.getByTestId('test-popover'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Popover {...mockProps}>{children}</Popover>);
        fireEvent.mouseLeave(screen.getByTestId('test-popover'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
