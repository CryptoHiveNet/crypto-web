import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from './TimelineItem';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-item',
    className: 'custom-timeline-item',
    testId: 'test-timeline-item',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <div>Test Content</div>,
};

describe('TimelineItem component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelineItem component with required props', () => {
        render(
            <Timeline>
                <TimelineItem {...mockProps} />
            </Timeline>,
        );
        const timelineItemComponent = screen.getByTestId('test-timeline-item');
        expect(timelineItemComponent).toBeInTheDocument();
        expect(timelineItemComponent).toHaveClass('custom-timeline-item');
        expect(timelineItemComponent).toHaveAttribute(
            'id',
            'test-timeline-item',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem {...mockProps} />
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-item'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem {...mockProps} />
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-item'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem {...mockProps} />
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-item'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the TimelineItem component', () => {
        render(
            <Timeline>
                <TimelineItem {...mockProps} />
            </Timeline>,
        );
        const childElement = screen.getByText('Test Content');
        expect(childElement).toBeInTheDocument();
    });
});
