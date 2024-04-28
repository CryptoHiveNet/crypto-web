import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineContent from '../TimelineContent/TimelineContent';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineTitle from './TimelineTitle';

// Describe block for TimelineTitle component tests
describe('TimelineTitle component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelineTitle component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-title',
      className: 'timeline-title',
      testId: 'test-timeline-title',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelineContent>
            <TimelineTitle {...mockProps}>Test Timeline Title</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelineTitle = getByTestId('test-timeline-title');
      expect(timelineTitle).toBeInTheDocument();
      expect(timelineTitle).toHaveTextContent('Test Timeline Title');
    });
  });
});
