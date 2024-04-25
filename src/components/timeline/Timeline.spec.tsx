import { render, waitFor } from '@testing-library/react';

import Timeline from './Timeline';

// Describe block for Timeline component tests
describe('Timeline component', () => {
  // Test case 1: Renders the component with required props
  it('should render Timeline component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-timeline',
      horizontal: true,
      className: 'timeline',
      testId: 'test-timeline',
      onClick: jest.fn(), // Mock onClick function
    };

    // Act
    const { getByTestId } = render(
      <Timeline {...mockProps}>Test Timeline</Timeline>,
    );

    // Assert
    waitFor(() => {
      const timeline = getByTestId('test-timeline');
      expect(timeline).toBeInTheDocument();
      expect(timeline).toHaveTextContent('Test Timeline');
    });
  });
});
