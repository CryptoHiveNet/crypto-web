import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../timelineContent/TimelineContent';
import TimelineItem from '../timelineItem/TimelineItem';
import TimelineBody from './TimelineBody';

// Describe block for TimelineBody component tests
describe('TimelineBody component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelineBody component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-body',
      className: 'timeline-body',
      testId: 'test-timeline-body',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelineContent>
            <TimelineBody {...mockProps} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelineBody = getByTestId('test-timeline-body');
      expect(timelineBody).toBeInTheDocument();
      expect(timelineBody).toHaveClass('timeline-body');
    });
  });
});
