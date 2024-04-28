import { fireEvent, render, waitFor } from '@testing-library/react';

import BreadcrumbItem from './BreadcrumbItem';

// Describe block for BreadcrumbItem component tests
describe('BreadcrumbItem component', () => {
  // Test case 1: Renders the component with required props
  it('should render BreadcrumbItem component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#home',
      testId: 'test-breadcrumb-item',
    };

    // Act
    const { getByTestId } = render(
      <BreadcrumbItem {...mockProps}>Home</BreadcrumbItem>,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-breadcrumb-item')).toBeInTheDocument();
    });
  });

  // Test case 2: Handles onClick event
  it('should handle onClick event', () => {
    // Arrange
    const onClickMock = jest.fn();
    const mockProps = {
      onClick: onClickMock,
    };

    // Act
    const { getByTestId } = render(
      <BreadcrumbItem {...mockProps}>Home</BreadcrumbItem>,
    );
    waitFor(() => {
      fireEvent.click(getByTestId('test-breadcrumb-item'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = 'Home';

    // Act
    const { getByText } = render(
      <BreadcrumbItem href='#home'>{mockChildren}</BreadcrumbItem>,
    );

    // Assert
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
