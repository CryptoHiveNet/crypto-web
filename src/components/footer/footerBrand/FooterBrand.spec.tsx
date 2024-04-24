import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterBrand from './FooterBrand';

// Describe block for FooterBrand component tests
describe('FooterBrand component', () => {
  // Test case 1: Renders the component with required props
  it('should render FooterBrand component with required props', () => {
    // Arrange
    const mockProps = {
      id: 'test-id',
      href: '#',
      src: 'logo.png',
      alt: 'Logo',
      name: 'My Brand',
      testId: 'test-footer-brand',
    };

    // Act
    const { getByTestId } = render(<FooterBrand {...mockProps} />);

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-brand')).toBeInTheDocument();
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
    const { getByTestId } = render(<FooterBrand {...mockProps} />);
    waitFor(() => {
      fireEvent.click(getByTestId('test-footer-brand'));

      // Assert
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  // Test case 3: Renders href, src, alt, and name
  it('should render href, src, alt, and name', () => {
    // Arrange
    const mockHref = '#';
    const mockSrc = 'logo.png';
    const mockAlt = 'Logo';
    const mockName = 'My Brand';

    // Act
    const { getByTestId } = render(
      <FooterBrand
        href={mockHref}
        src={mockSrc}
        alt={mockAlt}
        name={mockName}
      />,
    );

    // Assert
    waitFor(() => {
      expect(getByTestId('test-footer-brand')).toHaveAttribute('href', '#');
      expect(getByTestId('test-footer-brand')).toHaveAttribute(
        'src',
        'logo.png',
      );
      expect(getByTestId('test-footer-brand')).toHaveAttribute('alt', 'Logo');
      expect(getByTestId('test-footer-brand')).toHaveTextContent('My Brand');
    });
  });
});
