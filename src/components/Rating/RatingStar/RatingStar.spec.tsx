import { render, waitFor } from '@testing-library/react';

import Rating from '../Rating';
import RatingStar from './RatingStar';

describe('RatingStar component', () => {
  it('should render RatingStar component with required props', () => {
    const mockProps = {
      id: 'test-id',
      testId: 'test-rating-star',
    };
    const { getByTestId } = render(
      <Rating>
        <RatingStar {...mockProps} />
      </Rating>,
    );
    waitFor(() => {
      expect(getByTestId('test-rating-star')).toBeInTheDocument();
    });
  });
});
