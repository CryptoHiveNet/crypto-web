import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../Button/Button';
import Tooltip from './Tooltip';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-tooltip',
    content: 'Tooltip content',
    style: {},
    placement: 'top',
    trigger: 'hover',
    animation: 'fade',
    arrow: true,
    className: 'custom-tooltip',
    testId: 'test-tooltip-id',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <Button testId="test-button-id">Hover me</Button>,
};

describe('Tooltip component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Tooltip component with required props', () => {
        render(<Tooltip {...mockProps} />);
        const tooltipComponent = screen.getByTestId('test-tooltip-id');
        expect(tooltipComponent).toBeInTheDocument();
        expect(tooltipComponent).toHaveClass('custom-tooltip');
        expect(tooltipComponent).toHaveAttribute('id', 'test-tooltip');
    });

    it('should display content on hover', async () => {
        render(<Tooltip {...mockProps} />);
        const tooltipTrigger = screen.getByTestId('test-tooltip-id');
        fireEvent.mouseEnter(tooltipTrigger);
        expect(onMouseEnterMock).toHaveBeenCalled();
        const tooltipContent = await screen.findByText('Tooltip content');
        expect(tooltipContent).toBeInTheDocument();
        fireEvent.mouseLeave(tooltipTrigger);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should handle onClick event', () => {
        render(<Tooltip {...mockProps} />);
        const tooltipTrigger = screen.getByTestId('test-tooltip-id');
        fireEvent.click(tooltipTrigger);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Tooltip {...mockProps} />);
        const tooltipTrigger = screen.getByTestId('test-tooltip-id');
        fireEvent.mouseEnter(tooltipTrigger);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Tooltip {...mockProps} />);
        const tooltipTrigger = screen.getByTestId('test-tooltip-id');
        fireEvent.mouseLeave(tooltipTrigger);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
