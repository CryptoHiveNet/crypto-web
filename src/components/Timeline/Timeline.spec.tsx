import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from './Timeline';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline',
    horizontal: true,
    className: 'custom-timeline',
    testId: 'test-timeline',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <div>Timeline Item</div>,
};

describe('Timeline component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Timeline component with required props', () => {
        render(<Timeline {...mockProps} />);
        const timelineComponent = screen.getByTestId('test-timeline');
        expect(timelineComponent).toBeInTheDocument();
        expect(timelineComponent).toHaveClass('custom-timeline');
        expect(timelineComponent).toHaveAttribute('id', 'test-timeline');
    });

    it('should handle onClick event', () => {
        render(<Timeline {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-timeline'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Timeline {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-timeline'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Timeline {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId('test-timeline'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the Timeline component', () => {
        render(<Timeline {...mockProps} />);
        expect(screen.getByText('Timeline Item')).toBeInTheDocument();
    });
});
