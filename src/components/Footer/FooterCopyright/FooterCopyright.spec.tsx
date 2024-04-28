import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterCopyright from './FooterCopyright';

// Describe block for FooterCopyright component tests
describe('FooterCopyright component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterCopyright component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#',
      by: 'John Doe',
      year: '2024',
      testId: 'test-footer-copyright',
    };

    // Act
    const { getByTestId } = render(<FooterCopyright {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-copyright')).toBeInTheDocument();
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
    const { getByTestId } = render(<FooterCopyright {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-copyright'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders by and year
  it('should render by and year', () => {
    // Arrange
    const mockBy = 'John Doe';
    const mockYear = '2024';

    // Act
    const { getByText } = render(
      <FooterCopyright
        href='#'
        by={mockBy}
        year={mockYear}
      />,
    );

    // Assert
    waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('2024')).toBeInTheDocument();
    });
  });
});
