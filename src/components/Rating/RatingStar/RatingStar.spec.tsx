import { render, waitFor } from '@testing-library/react';

import Rating from '../Rating';
import RatingStar from './RatingStar';

describe('RatingStar component unit tests', () => {
  const mockProps = {
    id: 'test-id',
    testId: 'test-rating-star',
  };
  const { getByTestId } = render(
    <Rating>
      <RatingStar {...mockProps} />
    </Rating>,
  );
  it('should render RatingStar component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-rating-star')).toBeInTheDocument();
    });
  });
});
