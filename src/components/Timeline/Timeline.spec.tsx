import { render, waitFor } from '@testing-library/react';

import Timeline from './Timeline';

describe('Timeline component unit tests', () => {
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
  it('should render Timeline component with required props', () => {
    waitFor(() => {
      const timeline = getByTestId('test-timeline');
      expect(timeline).toBeInTheDocument();
      expect(timeline).toHaveTextContent('Test Timeline');
    });
  });
});
