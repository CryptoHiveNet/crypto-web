import { img_alt, img_src, test_children_text } from '@/types/__mocks__/textMock';
import { render, waitFor } from '@testing-library/react';

import Card from './Card';

describe('Card component unit tests', () => {
  const { getByText, getByAltText } = render(
    <Card
      imgSrc={img_src}
      imgAlt={img_alt}
    >
      {test_children_text}
    </Card>,
  );
  it('renders a card with the provided content', () => {
    expect(getByText(test_children_text)).toBeInTheDocument();
  });

  it('renders a card with an image', () => {
    waitFor(() => {
      expect(getByAltText(img_alt)).toBeInTheDocument();
      expect(getByAltText(img_alt)).toHaveAttribute('src', img_src);
    });
  });
});
