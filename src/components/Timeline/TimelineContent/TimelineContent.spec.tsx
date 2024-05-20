import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineContent from './TimelineContent';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-content',
    className: 'custom-timeline-content',
    testId: 'test-timeline-content',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <div>Test Content</div>,
};

describe('TimelineContent component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelineContent component with required props', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        const timelineContentComponent = screen.getByTestId(
            'test-timeline-content',
        );
        expect(timelineContentComponent).toBeInTheDocument();
        expect(timelineContentComponent).toHaveClass('custom-timeline-content');
        expect(timelineContentComponent).toHaveAttribute(
            'id',
            'test-timeline-content',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-content'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-content'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-content'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the TimelineContent component', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        const childElement = screen.getByText('Test Content');
        expect(childElement).toBeInTheDocument();
    });
});
