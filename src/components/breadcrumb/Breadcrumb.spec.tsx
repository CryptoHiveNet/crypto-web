import { Breadcrumb as FlowbiteBreadcrumb } from 'flowbite-react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

// Describe block for Breadcrumb component tests
describe('Breadcrumb component', () => {
  // Test case 1: Renders the component with required props
  it('should render Breadcrumb component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      ariaLabel: 'breadcrumb',
      testId: 'test-breadcrumb',
    };

    // Act
    const { getByTestId } = render(<Breadcrumb {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-breadcrumb')).toBeInTheDocument();
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
    const { getByTestId } = render(<Breadcrumb {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-breadcrumb'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = (
      <FlowbiteBreadcrumb.Item href='#home'>Home</FlowbiteBreadcrumb.Item>
    );

    // Act
    const { getByText } = render(<Breadcrumb>{mockChildren}</Breadcrumb>);

    // Assert
    waitFor(() => {
      expect(getByText('Home')).toBeInTheDocument();
    });
  });
});
