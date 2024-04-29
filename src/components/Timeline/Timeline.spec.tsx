import { render, waitFor } from '@testing-library/react';

import Timeline from './Timeline';

describe('Timeline component', () => {
  it('should render Timeline component with required props', () => {
    const mockProps = {
      id: 'test-timeline',
      horizontal: true,
      className: 'timeline',
      testId: 'test-timeline',
      onClick: jest.fn(),
    };
    const { getByTestId } = render(
      <Timeline {...mockProps}>Test Timeline</Timeline>,
    );
    waitFor(() => {
      const timeline = getByTestId('test-timeline');
      expect(timeline).toBeInTheDocument();
      expect(timeline).toHaveTextContent('Test Timeline');
    });
  });
});
