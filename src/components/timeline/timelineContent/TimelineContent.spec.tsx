import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../timelineItem/TimelineItem';
import TimelineContent from './TimelineContent';

// Describe block for TimelineContent component tests
describe('TimelineContent component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelineContent component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-content',
      className: 'timeline-content',
      testId: 'test-timeline-content',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelineContent {...mockProps} />
        </TimelineItem>
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelineContent = getByTestId('test-timeline-content');
      expect(timelineContent).toBeInTheDocument();
      expect(timelineContent).toHaveClass('timeline-content');
    });
  });
});
