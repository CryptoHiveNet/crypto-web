import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineTitle from './TimelineTitle';

describe('TimelineTitle component unit tests', () => {
    const mockProps = {
        id: 'test-timeline-title',
        className: 'timeline-title',
        testId: 'test-timeline-title',
        onClick: jest.fn(),
    };
    const { getByTestId } = render(
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
    it('should render TimelineTitle component with required props', () => {
        waitFor(() => {
            const timelineTitle = getByTestId('test-timeline-title');
            expect(timelineTitle).toBeInTheDocument();
            expect(timelineTitle).toHaveTextContent('Test Timeline Title');
        });
    });
});
