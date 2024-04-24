import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterLinkGroup from './FooterLinkGroup';

// Describe block for FooterLinkGroup component tests
describe('FooterLinkGroup component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterLinkGroup component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      col: 3,
      testId: 'test-footer-link-group',
    };

    // Act
    const { getByTestId } = render(<FooterLinkGroup {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-link-group')).toBeInTheDocument();
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
    const { getByTestId } = render(<FooterLinkGroup {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-link-group'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders children
  it('should render children', () => {
    // Arrange
    const mockChildren = (
      <>
        <div>Group 1</div>
        <div>Group 2</div>
      </>
    );

    // Act
    const { getByText } = render(
      <FooterLinkGroup col={3}>{mockChildren}</FooterLinkGroup>,
    );

    // Assert
    waitFor(() => {
      expect(getByText('Group 1')).toBeInTheDocument();
      expect(getByText('Group 2')).toBeInTheDocument();
    });
  });
});
