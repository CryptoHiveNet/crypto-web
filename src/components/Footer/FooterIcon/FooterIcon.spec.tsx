import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterIcon from './FooterIcon';

// Describe block for FooterIcon component tests
describe('FooterIcon component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterIcon component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#home',
      icon: 'home',
      testId: 'test-footer-icon',
    };

    // Act
    const { getByTestId } = render(<FooterIcon {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-icon')).toBeInTheDocument();
    });
  });

  // Test case 2: Handles onClick event
  it('should handle onClick event', () => {
    // Arrange
    const onClickMock = jest.fn();
    const mockProps = {
      id: 'test-id',
      href: '#home',
      icon: 'home',
      testId: 'test-footer-icon',
      onClick: onClickMock,
    };

    // Act
    const { getByTestId } = render(<FooterIcon {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-icon'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders icon
  it('should render icon', () => {
    // Arrange
    const mockIcon = 'home';

    // Act
    const { getByTestId } = render(
      <FooterIcon
        href='#home'
        icon={mockIcon}
      />,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-icon')).toHaveAttribute('icon', 'home');
    });
  });
});
