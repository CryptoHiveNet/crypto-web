import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineTime from './TimelineTime';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-time',
    className: 'custom-timeline-time',
    testId: 'test-timeline-time',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: 'Timeline Time',
};

describe('TimelineTime component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelineTime component with required props', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTime {...mockProps}>
                            Test Timeline Time
                        </TimelineTime>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        const timelineTimeComponent = screen.getByTestId('test-timeline-time');
        expect(timelineTimeComponent).toBeInTheDocument();
        expect(timelineTimeComponent).toHaveClass('custom-timeline-time');
        expect(timelineTimeComponent).toHaveAttribute(
            'id',
            'test-timeline-time',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTime {...mockProps}>
                            Test Timeline Time
                        </TimelineTime>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-time'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTime {...mockProps}>
                            Test Timeline Time
                        </TimelineTime>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-time'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTime {...mockProps}>
                            Test Timeline Time
                        </TimelineTime>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-time'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the TimelineTime component', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTime {...mockProps}>
                            Test Timeline Time
                        </TimelineTime>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        expect(screen.getByText('Test Timeline Time')).toBeInTheDocument();
    });
});
