import { fireEvent, render, screen } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineTitle from './TimelineTitle';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-timeline-title',
    className: 'custom-timeline-title',
    testId: 'test-timeline-title',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
    children: 'Timeline Title',
};

describe('TimelineTitle component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TimelineTitle component with required props', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTitle {...mockProps}>
                            Test Timeline Title
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        const timelineTitleComponent = screen.getByTestId(
            'test-timeline-title',
        );
        expect(timelineTitleComponent).toBeInTheDocument();
        expect(timelineTitleComponent).toHaveClass('custom-timeline-title');
        expect(timelineTitleComponent).toHaveAttribute(
            'id',
            'test-timeline-title',
        );
    });

    it('should handle onClick event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTitle {...mockProps}>
                            Test Timeline Title
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.click(screen.getByTestId('test-timeline-title'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTitle {...mockProps}>
                            Test Timeline Title
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseEnter(screen.getByTestId('test-timeline-title'));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTitle {...mockProps}>
                            Test Timeline Title
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        fireEvent.mouseLeave(screen.getByTestId('test-timeline-title'));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should render children inside the TimelineTitle component', () => {
        render(
            <Timeline>
                <TimelineItem>
                    <TimelineContent>
                        <TimelineTitle {...mockProps}>
                            Test Timeline Title
                        </TimelineTitle>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>,
        );
        expect(screen.getByText('Test Timeline Title')).toBeInTheDocument();
    });
});
