import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineBody from './TimelineBody';

describe('TimelineBody component unit tests', () => {
    const mockProps = {
        id: 'test-timeline-body',
        className: 'timeline-body',
        testId: 'test-timeline-body',
        onClick: jest.fn(),
    };
    const { getByTestId } = render(
        <Timeline>
            <TimelineItem>
                <TimelineContent>
                    <TimelineBody {...mockProps} />
                </TimelineContent>
            </TimelineItem>
        </Timeline>,
    );
    it('should render TimelineBody component with required props', () => {
        waitFor(() => {
            const timelineBody = getByTestId('test-timeline-body');
            expect(timelineBody).toBeInTheDocument();
            expect(timelineBody).toHaveClass('timeline-body');
        });
    });
});
