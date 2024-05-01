import { render, waitFor } from '@testing-library/react';

import Timeline from '../Timeline';
import TimelineItem from './TimelineItem';

describe('TimelineItem component unit tests', () => {
  const mockProps = {
    id: 'test-timeline-item',
    className: 'timeline-item',
    testId: 'test-timeline-item',
    onClick: jest.fn(),
  };
  const { getByTestId } = render(
    <Timeline>
      <TimelineItem {...mockProps} />
    </Timeline>,
  );
  it('should render TimelineItem component with required props', () => {
    waitFor(() => {
      const timelineItem = getByTestId('test-timeline-item');
      expect(timelineItem).toBeInTheDocument();
      expect(timelineItem).toHaveClass('timeline-item');
    });
  });
});
