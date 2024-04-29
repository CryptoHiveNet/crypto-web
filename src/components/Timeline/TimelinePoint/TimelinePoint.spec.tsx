import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelinePoint from './TimelinePoint';

describe('TimelinePoint component', () => {
  it('should render TimelinePoint component with required props', () => {
    const mockProps = {
      id: 'test-timeline-point',
      className: 'timeline-point',
      testId: 'test-timeline-point',
      onClick: jest.fn(),
    };
    const { getByTestId } = render(
      <Timeline>
        <TimelineItem>
          <TimelinePoint {...mockProps} />
        </TimelineItem>
      </Timeline>,
    );
    waitFor(() => {
      const timelinePoint = getByTestId('test-timeline-point');
      expect(timelinePoint).toBeInTheDocument();
      expect(timelinePoint).toHaveClass('timeline-point');
      expect(timelinePoint).toHaveClass('fas fa-circle'); // Ensure icon class is applied
    });
  });
});
