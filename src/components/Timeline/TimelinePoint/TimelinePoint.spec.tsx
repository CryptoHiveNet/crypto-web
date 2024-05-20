import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelinePoint from './TimelinePoint';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-point',
    className: 'custom-timeline-point',
    icon: 'test-icon',
    testId: 'test-timeline-point',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('TimelinePoint component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelinePoint component with required props', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelinePoint {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        const timelinePointComponent = screen.getByTestId(
            'test-timeline-point',
        );
        expect(timelinePointComponent).toBeInTheDocument();
        expect(timelinePointComponent).toHaveClass('custom-timeline-point');
        expect(timelinePointComponent).toHaveAttribute(
            'id',
            'test-timeline-point',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelinePoint {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-point'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelinePoint {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-point'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelinePoint {...mockProps} />
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-point'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
