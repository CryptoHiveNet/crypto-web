import { fireEvent, render, waitFor } from '@testing-library/react';

import Popover from './Popover';

// Describe block for Popover component tests
describe('Popover component', () => {
  // Test case 1: Renders the component with required props
  it('should render Popover component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-popover',
      ariaLabelledby: 'popover-title',
      content: 'Popover content',
      trigger: 'click',
      open: false,
      onOpenChange: jest.fn(),
      placement: 'bottom',
      arrow: true,
      className: 'custom-popover',
      testId: 'test-popover',
    };

    // Act
    const { getByTestId } = render(
      <Popover {...mockProps}>
        <button
          id='popover-trigger'
          aria-labelledby='popover-title'
        >
          Trigger
        </button>
      </Popover>,
    );

    // Assert
    waitFor(() => {
      const popoverComponent = getByTestId('test-popover');
      expect(popoverComponent).toBeInTheDocument();
      expect(popoverComponent).toHaveClass('custom-popover');
    });
  });

  // Test case 2: Toggles open state when trigger element is clicked
  it('should toggle open state when trigger element is clicked', () => {
    // Arrange
    const mockProps = {
      id: 'test-popover',
      ariaLabelledby: 'popover-title',
      content: 'Popover content',
      trigger: 'click',
      open: false,
      onOpenChange: jest.fn(),
      placement: 'bottom',
      arrow: true,
      className: 'custom-popover',
      testId: 'test-popover',
    };

    // Act
    const { getByTestId, getByText } = render(
      <Popover {...mockProps}>
        <button
          id='popover-trigger'
          aria-labelledby='popover-title'
        >
          Trigger
        </button>
      </Popover>,
    );

    waitFor(() => {
      // Click on the trigger element
      fireEvent.click(getByText('Trigger'));

      // Assert
      expect(mockProps.onOpenChange).toHaveBeenCalledTimes(1);
    });
  });
});
