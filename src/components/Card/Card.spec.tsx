import { render, waitFor } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('renders a card with the provided content', () => {
    // Arrange
    const content = 'This is the content of the card';

    // Act
    const { getByText } = render(<Card>{content}</Card>);

    // Assert
    waitFor(() => {
      expect(getByText(content)).toBeInTheDocument();
    });
  });

  it('renders a card with an image', () => {
    // Arrange
    const imgSrc = 'https://example.com/image.jpg';
    const imgAlt = 'Example Image';

    // Act
    const { getByAltText } = render(
      <Card
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />,
    );

    // Assert
    waitFor(() => {
      expect(getByAltText(imgAlt)).toBeInTheDocument();
      expect(getByAltText(imgAlt)).toHaveAttribute('src', imgSrc);
    });
  });
});
