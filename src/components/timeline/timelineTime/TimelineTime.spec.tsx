import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../timelineContent/TimelineContent';
import TimelineItem from '../timelineItem/TimelineItem';
import TimelineTime from './TimelineTime';

// Describe block for TimelineTime component tests
describe('TimelineTime component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelineTime component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-time',
      className: 'timeline-time',
      testId: 'test-timeline-time',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelineContent>
            <TimelineTime {...mockProps}>Test Timeline Time</TimelineTime>
          </TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelineTime = getByTestId('test-timeline-time');
      expect(timelineTime).toBeInTheDocument();
      expect(timelineTime).toHaveTextContent('Test Timeline Time');
    });
  });
});
