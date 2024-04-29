import { render, waitFor } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('renders a card with the provided content', () => {
    const content = 'This is the content of the card';
    const { getByText } = render(<Card>{content}</Card>);
    waitFor(() => {
      expect(getByText(content)).toBeInTheDocument();
    });
  });

  it('renders a card with an image', () => {
    const imgSrc = 'https://example.com/image.jpg';
    const imgAlt = 'Example Image';
    const { getByAltText } = render(
      <Card
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />,
    );
    waitFor(() => {
      expect(getByAltText(imgAlt)).toBeInTheDocument();
      expect(getByAltText(imgAlt)).toHaveAttribute('src', imgSrc);
    });
  });
});
