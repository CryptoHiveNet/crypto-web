import { fireEvent, render, waitFor } from '@testing-library/react';

import Tooltip from './Tooltip';

// Describe block for Tooltip component tests
describe('Tooltip component', () => {
  // Test case 1: Renders the component with required props
  it('should render Tooltip component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-tooltip',
      content: 'Tooltip content',
      placement: 'top',
      trigger: 'hover',
      animation: true,
      arrow: true,
      className: 'custom-tooltip',
      testId: 'test-tooltip',
    };

    // Act
    const { getByTestId } = render(<Tooltip {...mockProps} />);

    // Assert
    waitFor(() => {
      const tooltipComponent = getByTestId('test-tooltip');
      expect(tooltipComponent).toBeInTheDocument();
      expect(tooltipComponent).toHaveClass('custom-tooltip');
    });
  });

  // Test case 2: Tooltip content appears on mouse enter
  it('should show tooltip content on mouse enter', () => {
    // Arrange
    const mockProps = {
      id: 'test-tooltip',
      content: 'Tooltip content',
      placement: 'top',
      trigger: 'hover',
      animation: true,
      arrow: true,
      className: 'custom-tooltip',
      testId: 'test-tooltip',
    };

    // Act
    const { getByTestId, getByText } = render(
      <Tooltip {...mockProps}>Hover me</Tooltip>,
    );
    waitFor(() => {
      const triggerElement = getByText('Hover me');
      fireEvent.mouseEnter(triggerElement);

      // Assert
      const tooltipContent = getByText('Tooltip content');
      expect(tooltipContent).toBeInTheDocument();
    });
  });

  // Test case 3: Tooltip content disappears on mouse leave
  it('should hide tooltip content on mouse leave', () => {
    // Arrange
    const mockProps = {
      id: 'test-tooltip',
      content: 'Tooltip content',
      placement: 'top',
      trigger: 'hover',
      animation: true,
      arrow: true,
      className: 'custom-tooltip',
      testId: 'test-tooltip',
    };

    // Act
    const { getByTestId, getByText, queryByText } = render(
      <Tooltip {...mockProps}>Hover me</Tooltip>,
    );
    waitFor(() => {
      const triggerElement = getByText('Hover me');
      fireEvent.mouseEnter(triggerElement);
      fireEvent.mouseLeave(triggerElement);

      // Assert
      const tooltipContent = queryByText('Tooltip content');
      expect(tooltipContent).not.toBeInTheDocument();
    });
  });
});
