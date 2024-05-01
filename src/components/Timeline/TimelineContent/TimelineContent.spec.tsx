import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import TimelineContent from './TimelineContent';

describe('TimelineContent component unit tests', () => {
  const mockProps = {
    id: 'test-timeline-content',
    className: 'timeline-content',
    testId: 'test-timeline-content',
    onClick: jest.fn(),
  };
  const { getByTestId } = render(
    <Timeline>
      <TimelineItem>
        <TimelineContent {...mockProps} />
      </TimelineItem>
    </Timeline>,
  );
  it('should render TimelineContent component with required props', () => {
    waitFor(() => {
      const timelineContent = getByTestId('test-timeline-content');
      expect(timelineContent).toBeInTheDocument();
      expect(timelineContent).toHaveClass('timeline-content');
    });
  });
});
