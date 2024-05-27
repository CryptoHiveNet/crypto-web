import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineBody from './TimelineBody';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-body',
    className: 'custom-timeline-body',
    testId: 'test-timeline-body',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: <div>Test Body</div>,
};

describe('TimelineBody component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelineBody component with required props', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineBody {...mockProps} />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        const timelineBodyComponent = screen.getByTestId('test-timeline-body');
        expect(timelineBodyComponent).toBeInTheDocument();
        expect(timelineBodyComponent).toHaveClass('custom-timeline-body');
        expect(timelineBodyComponent).toHaveAttribute(
            'id',
            'test-timeline-body',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineBody {...mockProps} />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-body'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineBody {...mockProps} />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-body'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineBody {...mockProps} />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-body'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the TimelineBody component', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineBody {...mockProps} />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        const childElement = screen.getByText('Test Body');
        expect(childElement).toBeInTheDocument();
    });
});
