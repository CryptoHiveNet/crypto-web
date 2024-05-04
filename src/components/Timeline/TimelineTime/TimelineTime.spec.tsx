import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineTime from './TimelineTime';

describe('TimelineTime component unit tests', () => {
    const mockProps = {
        id: 'test-timeline-time',
        className: 'timeline-time',
        testId: 'test-timeline-time',
        onClick: jest.fn(),
    };
    const { getByTestId } = render(
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
    it('should render TimelineTime component with required props', () => {
        waitFor(() => {
            const timelineTime = getByTestId('test-timeline-time');
            expect(timelineTime).toBeInTheDocument();
            expect(timelineTime).toHaveTextContent('Test Timeline Time');
        });
    });
});
