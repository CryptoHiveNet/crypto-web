import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelinePoint from './TimelinePoint';

// Describe block for TimelinePoint component tests
describe('TimelinePoint component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelinePoint component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-point',
      className: 'timeline-point',
      testId: 'test-timeline-point',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelinePoint {...mockProps} />
        </TimelineItem>
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelinePoint = getByTestId('test-timeline-point');
      expect(timelinePoint).toBeInTheDocument();
      expect(timelinePoint).toHaveClass('timeline-point');
      expect(timelinePoint).toHaveClass('fas fa-circle'); // Ensure icon class is applied
    });
  });
});
