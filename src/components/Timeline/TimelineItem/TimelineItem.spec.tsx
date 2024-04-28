import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from './TimelineItem';

// Describe block for TimelineItem component tests
describe('TimelineItem component', () => {
  // Test case 1: Renders the component with required props
  it('should render TimelineItem component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline-item',
      className: 'timeline-item',
      testId: 'test-timeline-item',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem {...mockProps} />
      </Timeline>,
    );

    // Assert
    waitFor(() => {
      const timelineItem = getByTestId('test-timeline-item');
      expect(timelineItem).toBeInTheDocument();
      expect(timelineItem).toHaveClass('timeline-item');
    });
  });
});
